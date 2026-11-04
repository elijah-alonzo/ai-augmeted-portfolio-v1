"use client";

import { Mail } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";

const FIELD_CLASS =
  "w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition disabled:opacity-50";

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  disabled: boolean;
}

function Field({ label, name, placeholder, type = "text", disabled }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input id={name} type={type} name={name} placeholder={placeholder} required disabled={disabled} className={FIELD_CLASS} />
    </div>
  );
}

export function ContactForm() {
  const { status, message, submit, isSubmitting } = useContactForm();

  return (
    <form onSubmit={submit} className="space-y-6">
      <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
      <input type="hidden" name="from_name" value="Portfolio Contact Form" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" placeholder="Your name" disabled={isSubmitting} />
        <Field label="Email" name="email" type="email" placeholder="your.email@example.com" disabled={isSubmitting} />
      </div>

      <Field label="Subject" name="subject_line" placeholder="What's this about?" disabled={isSubmitting} />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          required
          disabled={isSubmitting}
          className={`${FIELD_CLASS} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Mail size={18} />
            Send Message
          </>
        )}
      </button>

      {status === "success" && (
        <div role="status" className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
          <span className="font-medium">✓ Success!</span> {message}
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          <span className="font-medium">✗ Error:</span> {message}
        </div>
      )}
    </form>
  );
}
