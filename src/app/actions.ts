
"use server";

import { z } from "zod";
import { generateImage } from "@/ai/flows/generate-image-flow";
import app from "@/lib/firebase";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(data: unknown) {
  const parsedData = contactFormSchema.safeParse(data);
  let submissionData: { name: string; email: string; message: string; };

  if (!parsedData.success) {
    const lenientParsed = z.object({ name: z.string(), email: z.string(), message: z.string() }).safeParse(data);
    if (!lenientParsed.success) {
      console.error("Contact form error:", lenientParsed.error.flatten().fieldErrors);
      return { success: false, message: "Invalid data provided." };
    }
    submissionData = lenientParsed.data;
     console.log("Form data (from chatbot) received:", submissionData);
  } else {
    submissionData = parsedData.data;
    console.log("Form data received:", submissionData);
  }

  try {
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      ...submissionData,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, message: "Could not save your message. Please try again later." };
  }
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
  
    // Here you would typically send an email to hr@cauders.com with the CV as an attachment.
    // For this example, we'll just log it and simulate a success response.
    console.log("Application received for:", parsedData.data.jobTitle);
    console.log("Applicant:", parsedData.data.name, parsedData.data.email);
    console.log("CV info:", parsedData.data.cv.name, `${(parsedData.data.cv.size / 1024).toFixed(2)} KB`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return { success: true, message: "Thank you for your application! We have received your CV and will be in touch if your profile matches our requirements." };
}

export async function generateImageAction(prompt: string) {
    return await generateImage(prompt);
}

export async function setupCompanyData(secret: string) {
    if (secret !== 'cauders-secret') {
        return { success: false, message: 'Invalid secret.' };
    }

    const companyData = {
        contact: {
            email: 'info@cauders.com',
            hrEmail: 'hr@cauders.com',
            location: 'Pakistan',
        },
        socials: [
            { label: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61580041683735' },
            { label: 'Instagram', href: 'https://www.instagram.com/ccauders/' },
            { label: 'Github', href: 'https://github.com/cauders' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/108785409/admin/dashboard/' },
        ],
        legal: {
            lastUpdated: 'September 1, 2025',
            privacyPolicyUrl: '/privacy-policy',
            termsOfServiceUrl: '/terms-of-service',
        },
        navigation: {
            header: [
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/contact',label: 'Contact' }
            ],
            footerQuick: [
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
            ],
            footerCompany: [
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/careers', label: 'Careers' },
            ],
            footerLegal: [
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-of-service', label: 'Terms of Service' },
            ],
        },
        site: {
            name: 'Cauders',
            description: 'Crafting premium, modern, and dynamic websites and applications to elevate your digital presence.'
        }
    };

    try {
        const db = getFirestore(app);
        // Use a specific ID 'main' for the single document that holds company info
        const docRef = doc(db, 'companyInfo', 'main');
        await setDoc(docRef, companyData);
        console.log("Company info document successfully written!");
        return { success: true, message: 'Company data has been saved to Firestore successfully!' };
    } catch (e) {
        console.error("Error writing company info document: ", e);
        return { success: false, message: 'Could not save company data to Firestore.' };
    }
}
