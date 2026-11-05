'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatMultilineHtml(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function normalizeOptionalUrl(raw: unknown): string {
  if (typeof raw !== 'string') return '';
  const trimmed = raw.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function getTransporter() {
  const host = process.env.SMTP_HOST || 'mail.cauders.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = (process.env.SMTP_USER || 'info@cauders.com').trim();
  const pass = (process.env.SMTP_PASS || '').replace(/\\/g, '').trim();

  if (!pass) {
    console.error(
      '[SMTP CONFIG ERROR] Missing SMTP_PASS environment variable on this server. ' +
        'Please ensure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS are set in your hosting deployment settings.'
    );
    return null;
  }

  const rejectUnauthorized =
    process.env.NODE_ENV === 'production' && process.env.SMTP_ALLOW_SELF_SIGNED !== 'true';

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized,
    },
  });
}

const FALLBACK_ERROR_MESSAGE =
  'Our contact gateway is currently undergoing maintenance. Please reach out directly to info@cauders.com, and our team will respond promptly.';

// --- 1. Contact Form Logic ---

const contactFormSchema = z.object({
  workEmail: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  firstName: z.string().trim().min(2, { message: 'First name is required.' }),
  lastName: z.string().trim().min(2, { message: 'Last name is required.' }),
  companyName: z.string().trim().min(2, { message: 'Company name is required.' }),
  jobTitle: z.string().trim().min(2, { message: 'Job title is required.' }),
  companySize: z.string().trim().min(1, { message: 'Company size is required.' }),
  timeline: z.string().trim().min(1, { message: 'Timeline is required.' }),
  phoneNumber: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export async function submitContactForm(data: unknown) {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Contact form validation error:', parsedData.error.flatten().fieldErrors);
    return { success: false, message: 'Please verify all required form fields.' };
  }

  const { workEmail, firstName, lastName, companyName, jobTitle, companySize, timeline, phoneNumber, message } =
    parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const safeEmail = escapeHtml(workEmail);

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Website" <${senderEmail}>`,
      to: 'info@cauders.com',
      subject: sanitizeHeader(`New Contact Form Message from ${firstName} ${lastName}`),
      replyTo: sanitizeHeader(workEmail),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #f3f4f6;">
            <h2 style="color: #042f2e; margin: 0; font-size: 24px;">New Lead: Contact Us Page</h2>
            <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">Received on ${escapeHtml(new Date().toUTCString())}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
            <h3 style="color: #111827; font-size: 16px; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Lead Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 130px; font-weight: bold;">Name:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #0d9488; text-decoration: none; font-weight: 500;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;">${phoneNumber ? escapeHtml(phoneNumber) : 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(companyName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Job Title:</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(jobTitle)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company Size:</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(companySize)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(timeline)}</td>
              </tr>
            </table>
          </div>

          <div>
            <h3 style="color: #111827; font-size: 16px; margin-bottom: 12px;">Project Details / Message:</h3>
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #0d9488; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6; font-size: 15px;">
              ${message ? formatMultilineHtml(message) : '<em>No message provided.</em>'}
            </div>
          </div>
          
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was generated automatically from the Cauders website contact page.</p>
          </div>
        </div>
      `,
    });

    console.log('Nodemailer contact form sent:', info.messageId);
    return {
      success: true,
      message: 'Thank you for reaching out! Our engineering team will review your requirements and respond shortly.',
    };
  } catch (error: unknown) {
    console.error('Failed to send contact email:', error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- 2. Home Page Quick Contact Form Logic ---

const homePageContactFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required.' }),
  company: z.string().trim().min(1, { message: 'Company is required.' }),
  project: z.string().trim().min(1, { message: 'Project details are required.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
});

export async function submitHomePageContactForm(data: unknown) {
  const parsedData = homePageContactFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Home page contact form validation error:', parsedData.error.flatten().fieldErrors);
    return { success: false, message: 'Please verify all required form fields.' };
  }

  const { name, company, project, email } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const safeEmail = escapeHtml(email);

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Website" <${senderEmail}>`,
      to: 'info@cauders.com',
      subject: sanitizeHeader(`New Quick Contact from ${name} (${company})`),
      replyTo: sanitizeHeader(email),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #f3f4f6;">
            <h2 style="color: #042f2e; margin: 0; font-size: 24px;">New Lead: Homepage Quick Contact</h2>
            <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">Received on ${escapeHtml(new Date().toUTCString())}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
            <h3 style="color: #111827; font-size: 16px; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Lead Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px; font-weight: bold;">Name:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(company)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #0d9488; text-decoration: none; font-weight: 500;">${safeEmail}</a></td>
              </tr>
            </table>
          </div>

          <div>
            <h3 style="color: #111827; font-size: 16px; margin-bottom: 12px;">Project / Challenge:</h3>
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #0d9488; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6; font-size: 15px;">
              ${formatMultilineHtml(project)}
            </div>
          </div>
          
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was generated automatically from the Cauders website homepage form.</p>
          </div>
        </div>
      `,
    });

    console.log('Nodemailer homepage contact sent:', info.messageId);
    return { success: true, message: "Thank you for reaching out! We'll get back to you soon." };
  } catch (error: unknown) {
    console.error('Failed to send quick contact email:', error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- 3. Feedback Form Logic ---

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const feedbackFormSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  type: z.enum(['bug', 'suggestion', 'praise', 'other'], {
    required_error: 'You need to select a feedback type.',
  }),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters.' }),
  file: z
    .any()
    .refine((file) => !file || typeof file.size !== 'number' || file.size === 0 || file.size <= MAX_FILE_SIZE, 'Max file size is 5MB.')
    .refine(
      (file) =>
        !file ||
        typeof file.size !== 'number' ||
        file.size === 0 ||
        ACCEPTED_FILE_TYPES.includes(file.type),
      'Only .jpg, .png, and .webp files are accepted.'
    )
    .optional(),
});

export async function submitFeedbackForm(formData: FormData) {
  const rawFile = formData.get('file');
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    type: formData.get('type'),
    message: formData.get('message'),
    file: rawFile instanceof File && rawFile.size > 0 ? rawFile : undefined,
  };

  const parsedData = feedbackFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Feedback form validation error:', parsedData.error.flatten().fieldErrors);
    return { success: false, message: 'Invalid data provided.', errors: parsedData.error.flatten().fieldErrors };
  }

  const { name, email, type, message, file } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const recipient = 'feedback@cauders.com';
  const subject = sanitizeHeader(`New Feedback Received: ${type.charAt(0).toUpperCase() + type.slice(1)}`);
  const safeEmail = escapeHtml(email);

  const attachments = [];
  if (file && file.size > 0) {
    const buffer = await file.arrayBuffer();
    attachments.push({
      filename: sanitizeHeader(file.name || 'screenshot'),
      content: Buffer.from(buffer),
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Feedback" <${senderEmail}>`,
      to: recipient,
      subject,
      replyTo: sanitizeHeader(email),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #042f2e; margin-top: 0;">New Website Feedback</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Feedback Type:</strong> ${escapeHtml(type)}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 14px; border-radius: 6px; border-left: 4px solid #0d9488;">
            ${formatMultilineHtml(message)}
          </div>
        </div>
      `,
      attachments,
    });

    console.log('Nodemailer feedback sent:', info.messageId);
    return {
      success: true,
      message: 'Thank you for your feedback! We appreciate you taking the time to help us improve.',
    };
  } catch (error: unknown) {
    console.error('Failed to send feedback email:', error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- 4. Career Application Form Logic ---

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const applicationFormSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().trim().optional(),
  portfolioUrl: z.preprocess(
    normalizeOptionalUrl,
    z.union([z.string().url({ message: 'Please enter a valid URL.' }), z.literal('')])
  ),
  position: z.string().trim().min(1, { message: 'Please select a position.' }),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters.' }),
  resume: z
    .any()
    .refine((file) => file && typeof file.size === 'number' && file.size > 0, 'A resume/CV is required.')
    .refine((file) => file && file.size <= MAX_RESUME_SIZE, 'Max resume size is 5MB.')
    .refine((file) => file && ACCEPTED_RESUME_TYPES.includes(file.type), 'Only .pdf and .doc/.docx files are accepted.'),
});

export async function submitApplicationForm(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    portfolioUrl: formData.get('portfolioUrl') || '',
    position: formData.get('position'),
    message: formData.get('message'),
    resume: formData.get('resume'),
  };

  const parsedData = applicationFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Application form validation error:', parsedData.error.flatten().fieldErrors);
    return { success: false, message: 'Invalid data provided.', errors: parsedData.error.flatten().fieldErrors };
  }

  const { name, email, phone, portfolioUrl, position, message, resume } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const recipient = 'hr@cauders.com';
  const subject = sanitizeHeader(`New Job Application: ${position} — ${name}`);
  const safeEmail = escapeHtml(email);
  const safePortfolio = portfolioUrl ? escapeHtml(portfolioUrl) : '';

  const attachments = [];
  if (resume && resume.size > 0) {
    const buffer = await resume.arrayBuffer();
    attachments.push({
      filename: sanitizeHeader(resume.name || 'resume.pdf'),
      content: Buffer.from(buffer),
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Careers" <${senderEmail}>`,
      to: recipient,
      subject,
      replyTo: sanitizeHeader(email),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #042f2e; margin-top: 0;">New Career Application</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 150px;">Position:</td><td>${escapeHtml(position)}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Applicant Name:</td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Phone:</td><td>${phone ? escapeHtml(phone) : 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Portfolio / LinkedIn:</td><td>${
              safePortfolio ? `<a href="${safePortfolio}">${safePortfolio}</a>` : 'N/A'
            }</td></tr>
          </table>
          <h3 style="margin-top: 20px; color: #111827;">Cover Message:</h3>
          <div style="background-color: #f9fafb; padding: 14px; border-radius: 6px; border-left: 4px solid #0d9488;">
            ${formatMultilineHtml(message)}
          </div>
        </div>
      `,
      attachments,
    });

    console.log('Nodemailer career application sent:', info.messageId);
    return {
      success: true,
      message:
        'Thank you for your application! We have received it and will be in touch if your qualifications match our needs.',
    };
  } catch (error: unknown) {
    console.error('Failed to send application email:', error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- 5. Partnership Application Form Logic ---

const partnerFormSchema = z.object({
  firstName: z.string().trim().min(2, { message: 'First name is required.' }),
  lastName: z.string().trim().min(2, { message: 'Last name is required.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  company: z.string().trim().min(2, { message: 'Company name is required.' }),
  country: z.string().trim().min(2, { message: 'Country is required.' }),
  model: z.string().trim().min(1, { message: 'Please select a partnership model.' }),
  message: z.string().trim().min(10, { message: 'Please provide some details about your market and clients.' }),
});

export async function submitPartnerForm(data: unknown) {
  const parsedData = partnerFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Partner form validation error:', parsedData.error.flatten().fieldErrors);
    return { success: false, message: 'Please verify all required form fields.' };
  }

  const { firstName, lastName, email, company, country, model, message } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const recipient = process.env.PARTNER_RECIPIENT_EMAIL || 'info@cauders.com';
  const safeEmail = escapeHtml(email);

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Partnerships" <${senderEmail}>`,
      to: recipient,
      subject: sanitizeHeader(`New Partnership Application from ${firstName} ${lastName} (${company})`),
      replyTo: sanitizeHeader(email),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #042f2e; margin-top: 0;">New Partner Program Application</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Name:</td><td>${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Company:</td><td>${escapeHtml(company)}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Country / Market:</td><td>${escapeHtml(country)}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Selected Model:</td><td>${escapeHtml(model)}</td></tr>
          </table>
          <h3 style="margin-top: 20px; color: #111827;">Client &amp; Market Details:</h3>
          <div style="background-color: #f9fafb; padding: 14px; border-radius: 6px; border-left: 4px solid #0d9488;">
            ${formatMultilineHtml(message)}
          </div>
        </div>
      `,
    });

    console.log('Partner application emailed successfully:', info.messageId);
    return {
      success: true,
      message:
        "Thank you for applying to the Cauders Partner Program! We'll review your details and reach out within two business days.",
    };
  } catch (error: unknown) {
    console.error('Failed to send partner email:', error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}
