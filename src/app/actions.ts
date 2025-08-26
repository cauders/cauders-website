
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
    return { success: false, message: "Invalid data provided.", errors: parsedData.error.flatten().fieldErrors };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate a success response.
  console.log("Form data received:", parsedData.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Thank you for your message! We'll get back to you soon." };
}
