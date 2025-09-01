
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(data: unknown) {
  const parsedData = contactFormSchema.safeParse(data);
  
  if (!parsedData.success) {
    console.error("Contact form error:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Invalid data provided." };
  }

  // Simulate a successful submission without a backend
  console.log("Simulated form submission:", parsedData.data);
  return { success: true, message: "Thank you for your message! We'll get back to you soon." };
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    jobTitle: z.string(),
    cv: z.any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
      .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
        ".pdf, .doc, and .docx files are accepted."
      ),
  });

export async function submitApplicationForm(formData: FormData) {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        jobTitle: formData.get('jobTitle'),
        cv: formData.get('cv'),
    };

    const parsedData = applicationFormSchema.safeParse(data);

    if (!parsedData.success) {
      console.log(parsedData.error.flatten().fieldErrors);
      return { success: false, message: "Invalid data provided.", errors: parsedData.error.flatten().fieldErrors };
    }
  
    // Simulate a successful submission without a backend
    console.log("Simulated application received for:", parsedData.data.jobTitle);
    console.log("Applicant:", parsedData.data.name, parsedData.data.email);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return { success: true, message: "Thank you for your application! We have received your CV and will be in touch if your profile matches our requirements." };
}
