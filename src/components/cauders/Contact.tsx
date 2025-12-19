
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2 } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import ContactPageContent from "./ContactPageContent";
import { Suspense } from "react";
import HomePageContact from "./HomePageContact";


function ContactPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactPageContent />
        </Suspense>
    )
}

export default function Contact() {
    const pathname = usePathname();
    
    if (pathname === '/contact') {
        return <ContactPage />;
    }

    return <HomePageContact />;
}
