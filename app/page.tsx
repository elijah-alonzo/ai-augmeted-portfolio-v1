import { ChatDialog } from "@/components/chat/chat-dialog";
import { ChatDialogProvider } from "@/components/chat/chat-dialog-context";
import { Navbar } from "@/components/layout/navbar";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Page() {
  return (
    <ChatDialogProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <CertificationsSection />
          <ExperiencesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <ChatDialog />
      </div>
    </ChatDialogProvider>
  );
}
