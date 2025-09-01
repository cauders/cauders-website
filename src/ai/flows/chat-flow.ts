
'use server';
/**
 * @fileOverview A rule-based chatbot flow that provides menu-driven support.
 */
import { submitContactForm } from '@/app/actions';
import { getServices, getProjects } from '@/lib/data';
import { z } from 'zod';

// Define the schema for a single message
const MessageSchema = z.object({
  role: z.enum(['user', 'bot']),
  content: z.string(),
  state: z.string().optional(),
});

// Define the input schema for the chat function
export const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
  message: z.string(),
  currentState: z.string(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

type ChatResponse = {
  text: string;
  options?: string[];
  newState: string;
};

// Simple state machine for the conversation
const conversationFlow: Record<string, (message: string, history: any[]) => Promise<ChatResponse>> = {
  async 'initial'() {
    return {
      text: "Hello! How can I help you today? Please choose an option below.",
      options: ["Our Services", "Our Projects", "Contact Us"],
      newState: 'main_menu',
    };
  },

  async 'main_menu'(message) {
    if (message.toLowerCase().includes('services')) {
      const services = getServices().map(s => s.title).join(', ');
      return {
        text: `We offer a range of services including: ${services}. Which one would you like to know more about?`,
        options: [...getServices().map(s => s.title), "Go Back"],
        newState: 'services_menu',
      };
    }
    if (message.toLowerCase().includes('projects')) {
       const projects = getProjects().map(p => p.title).slice(0, 4).join(', ');
       return {
        text: `We have worked on many exciting projects, including: ${projects}. You can see our full portfolio on the portfolio page.`,
        options: ["Go Back"],
        newState: 'main_menu',
      };
    }
    if (message.toLowerCase().includes('contact')) {
      return {
        text: "I can help with that. What is your name?",
        newState: 'contact_name',
      };
    }
    return {
      text: "I'm sorry, I didn't understand that. Please select an option from the menu.",
      options: ["Our Services", "Our Projects", "Contact Us"],
      newState: 'main_menu',
    };
  },

  async 'services_menu'(message) {
      if (message.toLowerCase() === 'go back') {
          return conversationFlow['initial'](message, []);
      }
      const service = getServices().find(s => s.title.toLowerCase() === message.toLowerCase());
      if (service) {
          return {
              text: `${service.description.substring(0, 150)}... You can find out more on our services page.`,
              options: ["Go Back"],
              newState: 'services_menu',
          };
      }
      return {
          text: "I couldn't find that service. Please choose from the list or go back.",
          options: [...getServices().map(s => s.title), "Go Back"],
          newState: 'services_menu',
      };
  },

  async 'contact_name'(message) {
    return {
      text: `Thanks, ${message}. What is your email address?`,
      newState: 'contact_email',
    };
  },

  async 'contact_email'(message, history) {
    // Very basic email validation
    if (!message.includes('@')) {
        return {
            text: "That doesn't look like a valid email. Please enter a valid email address.",
            newState: 'contact_email'
        };
    }
    return {
      text: `Great. And what is your message?`,
      newState: 'contact_message',
    };
  },

  async 'contact_message'(message, history) {
    const name = history.find(h => h.state === 'contact_email')?.content;
    const email = history.find(h => h.state === 'contact_message')?.content;
    
    if (!name || !email) {
        return {
            text: "Something went wrong. Let's start over.",
            options: ["Our Services", "Our Projects", "Contact Us"],
            newState: 'main_menu'
        };
    }

    // Call the existing server action to submit the form
    await submitContactForm({ name, email, message });

    return {
      text: "Thank you! Your message has been sent. We'll get back to you soon. Is there anything else I can help with?",
      options: ["Our Services", "Our Projects"],
      newState: 'main_menu',
    };
  },
};


export async function chat(input: ChatInput): Promise<ChatResponse> {
  const handler = conversationFlow[input.currentState] || conversationFlow['initial'];
  return handler(input.message, input.history);
}
