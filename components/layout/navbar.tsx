import Image from "next/image";
import { NAV_LINKS } from "@/data/navigation";
import { SITE } from "@/config/site";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={SITE.images.logo} alt={SITE.name} width={40} height={40} className="h-10 w-auto" priority />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="text-gray-600 hover:text-blue-600 transition font-medium">
              {label}
            </a>
          ))}
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
