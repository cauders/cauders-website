
"use server";

import { z } from "zod";
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// --- Contact Form Logic ---

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(data: unknown) {
  const parsedData = contactFormSchema.safeParse(data);
  
  if (!parsedData.success) {
    console.error("Contact form validation error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Invalid data provided." };
  }

  const { name, email, message } = parsedData.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Cauders Website <noreply@cauders.com>',
      to: ['info@cauders.com'],
      subject: `New Contact Form Message from ${name}`,
      reply_to: email,
      html: `<p>You have received a new message from your website contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
        console.error("Resend API error:", error);
        return { success: false, message: `API Error: ${error.message}` };
    }

    console.log("Resend success response:", data);
    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    console.error("Failed to send email:", error);
    return { success: false, message: `Server Error: ${errorMessage}` };
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
        const { data, error } = await resend.emails.send({
            from: 'Cauders Feedback <noreply@cauders.com>',
            to: [recipient],
            subject: subject,
            reply_to: email,
            html: `<p>A new piece of feedback has been submitted.</p>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Feedback Type:</strong> ${type}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`,
            attachments: attachments,
        });

        if (error) {
            console.error("Resend API error:", error);
            return { success: false, message: `API Error: ${error.message}` };
        }
        
        console.log("Resend success response:", data);
        return { success: true, message: "Thank you for your feedback! We appreciate you taking the time to help us improve." };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        console.error("Failed to send feedback email:", error);
        return { success: false, message: `Server Error: ${errorMessage}` };
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
        const { data, error } = await resend.emails.send({
            from: 'Cauders Careers <noreply@cauders.com>',
            to: [recipient],
            subject: subject,
            reply_to: email,
            html: `<p>You have received a new job application for the position of <strong>${position}</strong>.</p>
                   <p><strong>Applicant Name:</strong> ${name}</p>
                   <p><strong>Applicant Email:</strong> ${email}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`,
            attachments: attachments,
        });

        if (error) {
            console.error("Resend API error:", error);
            return { success: false, message: `API Error: ${error.message}` };
        }
        
        console.log("Resend success response:", data);
        return { success: true, message: "Thank you for your application! We have received it and will be in touch if your qualifications match our needs." };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        console.error("Failed to send application email:", error);
        return { success: false, message: `Server Error: ${errorMessage}` };
    }
}
