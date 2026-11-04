import { ExternalLink } from "lucide-react";
import { CONTACT_SOCIALS } from "@/data/socials";
import { ContactForm } from "@/components/sections/contact-form";
import { SocialIcon } from "@/components/ui/social-icon";
import { Reveal, Section } from "@/components/ui/section";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal variant="left" className="duration-1000">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h2>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Whether you&apos;re looking for an AI and Web developer, data analyst, freelancer, or graphic
              designer, feel free to reach out!
            </p>

            <div className="space-y-4">
              {CONTACT_SOCIALS.map(({ id, label, href, display, external }) => (
                <div
                  key={id}
                  className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <SocialIcon id={id} className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{label}</h3>
                      <a
                        href={href}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                      >
                        {display} {external && <ExternalLink size={14} />}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            variant="right"
            className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-8 backdrop-blur-md shadow-lg duration-1000 delay-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
