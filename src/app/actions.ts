"use server";

import { z } from "zod";
import nodemailer from 'nodemailer';

// Dynamic, safe transporter factory that validates credentials at runtime
function getTransporter() {
  const host = process.env.SMTP_HOST || 'mail.cauders.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = (process.env.SMTP_USER || 'info@cauders.com').trim();
  const pass = (process.env.SMTP_PASS || '').replace(/\\/g, '').trim();

  if (!pass) {
    console.error(
      `[SMTP CONFIG ERROR] Missing SMTP_PASS environment variable on this server. ` +
      `Please ensure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS are set in your hosting deployment settings.`
    );
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

const FALLBACK_ERROR_MESSAGE =
  "Our contact gateway is currently undergoing maintenance. Please reach out directly to info@cauders.com, and our team will respond promptly.";

// --- Contact Form Logic ---

const contactFormSchema = z.object({
  workEmail: z.string().email({ message: "Please enter a valid email address." }),
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  companyName: z.string().min(2, { message: "Company name is required." }),
  jobTitle: z.string().min(2, { message: "Job title is required." }),
  companySize: z.string().min(1, { message: "Company size is required." }),
  timeline: z.string().min(1, { message: "Timeline is required." }),
  phoneNumber: z.string().optional(),
  message: z.string().optional(),
});

export async function submitContactForm(data: unknown) {
  const parsedData = contactFormSchema.safeParse(data);
  
  if (!parsedData.success) {
    console.error("Contact form validation error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Please verify all required form fields." };
  }

  const { workEmail, firstName, lastName, companyName, jobTitle, companySize, timeline, phoneNumber, message } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Website" <${senderEmail}>`,
      to: 'info@cauders.com',
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      replyTo: workEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #f3f4f6;">
            <h2 style="color: #042f2e; margin: 0; font-size: 24px;">New Lead: Contact Us Page</h2>
            <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">Received on ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
            <h3 style="color: #111827; font-size: 16px; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Lead Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 130px; font-weight: bold;">Name:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${workEmail}" style="color: #0d9488; text-decoration: none; font-weight: 500;">${workEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;">${phoneNumber || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0; color: #111827;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Job Title:</td>
                <td style="padding: 8px 0; color: #111827;">${jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company Size:</td>
                <td style="padding: 8px 0; color: #111827;">${companySize}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px 0; color: #111827;">${timeline}</td>
              </tr>
            </table>
          </div>

          <div>
            <h3 style="color: #111827; font-size: 16px; margin-bottom: 12px;">Project Details / Message:</h3>
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #0d9488; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6; font-size: 15px;">
              ${message ? message.replace(/\n/g, '<br>') : '<em>No message provided.</em>'}
            </div>
          </div>
          
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was generated automatically from the Cauders website contact page.</p>
          </div>
        </div>
      `,
    });

    console.log("Nodemailer contact form sent:", info.messageId);
    return { success: true, message: "Thank you for reaching out! Our engineering team will review your requirements and respond shortly." };
  } catch (error: unknown) {
    console.error("Failed to send contact email:", error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- Home Page Quick Contact Form Logic ---

const homePageContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  job: z.string().min(1, { message: "Job is required." }),
  city: z.string().min(1, { message: "City is required." }),
  question: z.string().min(1, { message: "Question is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function submitHomePageContactForm(data: unknown) {
  const parsedData = homePageContactFormSchema.safeParse(data);
  
  if (!parsedData.success) {
    console.error("Home page contact form validation error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Please verify all required form fields." };
  }

  const { name, job, city, question, email } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Website" <${senderEmail}>`,
      to: 'info@cauders.com',
      subject: `New Quick Contact from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #f3f4f6;">
            <h2 style="color: #042f2e; margin: 0; font-size: 24px;">New Lead: Homepage Contact</h2>
            <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">Received on ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
            <h3 style="color: #111827; font-size: 16px; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Lead Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px; font-weight: bold;">Name:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Role/Job:</td>
                <td style="padding: 8px 0; color: #111827;">${job}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Location:</td>
                <td style="padding: 8px 0; color: #111827;">${city}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
            </table>
          </div>

          <div>
            <h3 style="color: #111827; font-size: 16px; margin-bottom: 12px;">Their Request / Question:</h3>
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #0d9488; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6; font-size: 15px;">
              ${question.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was generated automatically from the Cauders website homepage form.</p>
          </div>
        </div>
      `,
    });

    console.log("Nodemailer homepage contact sent:", info.messageId);
    return { success: true, message: "Thank you for reaching out! We'll get back to you soon." };
  } catch (error: unknown) {
    console.error("Failed to send quick contact email:", error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- Feedback Form Logic ---

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const feedbackFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  type: z.enum(["bug", "suggestion", "praise", "other"], {
    required_error: "You need to select a feedback type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  file: z.any()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => !file || file.type === '' || ACCEPTED_FILE_TYPES.includes(file.type),
      "Only .jpg, .png, and .webp files are accepted."
    )
    .optional(),
});

export async function submitFeedbackForm(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    type: formData.get('type'),
    message: formData.get('message'),
    file: formData.get('file'),
  };

  const parsedData = feedbackFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error("Feedback form validation error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Invalid data provided.", errors: parsedData.error.flatten().fieldErrors };
  }
  
  const { name, email, type, message, file } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const recipient = 'feedback@cauders.com';
  const subject = `New Feedback Received: ${type.charAt(0).toUpperCase() + type.slice(1)}`;

  const attachments = [];
  if (file && file.size > 0) {
    const buffer = await file.arrayBuffer();
    attachments.push({
      filename: file.name,
      content: Buffer.from(buffer),
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Feedback" <${senderEmail}>`,
      to: recipient,
      subject: subject,
      replyTo: email,
      html: `<p>A new piece of feedback has been submitted.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Feedback Type:</strong> ${type}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`,
      attachments: attachments,
    });
    
    console.log("Nodemailer feedback sent:", info.messageId);
    return { success: true, message: "Thank you for your feedback! We appreciate you taking the time to help us improve." };
  } catch (error: unknown) {
    console.error("Failed to send feedback email:", error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- Career Application Form Logic ---

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_RESUME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  position: z.string().min(1, { message: "Please select a position." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  resume: z.any()
    .refine((file) => file?.size > 0, "A resume/CV is required.")
    .refine((file) => file?.size <= MAX_RESUME_SIZE, `Max resume size is 5MB.`)
    .refine(
      (file) => ACCEPTED_RESUME_TYPES.includes(file?.type),
      "Only .pdf and .doc/.docx files are accepted."
    ),
});

export async function submitApplicationForm(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    position: formData.get('position'),
    message: formData.get('message'),
    resume: formData.get('resume'),
  };

  const parsedData = applicationFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error("Application form validation error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Invalid data provided.", errors: parsedData.error.flatten().fieldErrors };
  }
  
  const { name, email, position, message, resume } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const recipient = 'hr@cauders.com';
  const subject = `New Job Application: ${position}`;

  const attachments = [];
  if (resume && resume.size > 0) {
    const buffer = await resume.arrayBuffer();
    attachments.push({
      filename: resume.name,
      content: Buffer.from(buffer),
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Careers" <${senderEmail}>`,
      to: recipient,
      subject: subject,
      replyTo: email,
      html: `<p>You have received a new job application for the position of <strong>${position}</strong>.</p>
        <p><strong>Applicant Name:</strong> ${name}</p>
        <p><strong>Applicant Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`,
      attachments: attachments,
    });
    
    console.log("Nodemailer career application sent:", info.messageId);
    return { success: true, message: "Thank you for your application! We have received it and will be in touch if your qualifications match our needs." };
  } catch (error: unknown) {
    console.error("Failed to send application email:", error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}

// --- Partnership Application Form Logic ---

const partnerFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  country: z.string().min(2, { message: "Country is required." }),
  model: z.string().min(1, { message: "Please select a partnership model." }),
  message: z.string().min(10, { message: "Please provide some details about your market and clients." }),
});

export async function submitPartnerForm(data: unknown) {
  const parsedData = partnerFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.error("Partner form validation error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Please verify all required form fields." };
  }

  const { firstName, lastName, email, company, country, model, message } = parsedData.data;

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }

  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@cauders.com';
  const recipient = process.env.PARTNER_RECIPIENT_EMAIL || 'info@cauders.com';

  try {
    const info = await transporter.sendMail({
      from: `"Cauders Partnerships" <${senderEmail}>`,
      to: recipient,
      subject: `New Partnership Application from ${firstName} ${lastName} (${company})`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #042f2e; margin-top: 0;">New Partner Program Application</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Name:</td><td>${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Company:</td><td>${company}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Country / Market:</td><td>${country}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Selected Model:</td><td>${model}</td></tr>
          </table>
          <h3 style="margin-top: 20px; color: #111827;">Client & Market Details:</h3>
          <div style="background-color: #f9fafb; padding: 14px; border-radius: 6px; border-left: 4px solid #0d9488;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    console.log("Partner application emailed successfully:", info.messageId);
    return { success: true, message: "Thank you for applying to the Cauders Partner Program! We'll review your details and reach out within two business days." };
  } catch (error: unknown) {
    console.error("Failed to send partner email:", error);
    return { success: false, message: FALLBACK_ERROR_MESSAGE };
  }
}
