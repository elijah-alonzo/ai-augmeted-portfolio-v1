import Image from "next/image";
import { SITE } from "@/config/site";
import { HERO_SOCIALS } from "@/data/socials";
import { OpenChatButton } from "@/components/chat/open-chat-button";
import { Reveal, Section } from "@/components/ui/section";

export function HeroSection() {
  return (
    <Section id="home" className="py-32 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal variant="left" className="space-y-8 duration-1000">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight whitespace-nowrap">
                <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                  {SITE.name}
                </span>
              </h1>
              <p className="text-base text-gray-600 font-medium mb-8 leading-relaxed">{SITE.tagline}</p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              An information technology student with a passion for learning and developing skills in software
              development, networking, and cybersecurity. Eager to contribute to real-world projects and gain
              hands-on experience in the IT industry.
            </p>

            <div className="flex gap-4 flex-wrap">
              <OpenChatButton />
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 font-semibold rounded-lg transition"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              {HERO_SOCIALS.map(({ label, href, title, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  title={title}
                  aria-label={label}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-gray-600 hover:text-blue-600 shadow-sm hover:shadow-md transition"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" className="flex justify-center duration-1000 delay-300">
            <div className="relative w-80 h-80">
              <div className="relative w-full h-full rounded-full shadow-lg">
                <Image
                  src={SITE.images.avatar}
                  alt={SITE.fullName}
                  fill
                  sizes="320px"
                  className="object-cover rounded-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-full" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg text-center min-w-max">
                {SITE.badge}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
