import type { Metadata } from "next";
import ApplicationForm from "@/components/cauders/ApplicationForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Job Application | Cauders Careers",
  description: "Submit your application for open software engineering and technical roles at Cauders.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplicationForm />
    </Suspense>
  );
}
