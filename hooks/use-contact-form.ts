"use client";

import { useRef, useState, type FormEvent } from "react";
import { CONTACT_FORM, SITE } from "@/config/site";

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [message, setMessage] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function showResult(nextStatus: "success" | "error", nextMessage: string) {
    setStatus(nextStatus);
    setMessage(nextMessage);

    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, CONTACT_FORM.resetDelayMs);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(CONTACT_FORM.endpoint, {
        method: "POST",
        body: new FormData(form),
      });
      const data = await response.json();

      if (!data.success) throw new Error("Failed to send message");

      form.reset();
      showResult("success", "Thank you! Your message has been sent successfully.");
    } catch {
      showResult(
        "error",
        `Sorry, there was an error sending your message. Please try emailing me directly at ${SITE.email}`,
      );
    }
  }

  return { status, message, submit, isSubmitting: status === "submitting" };
}
