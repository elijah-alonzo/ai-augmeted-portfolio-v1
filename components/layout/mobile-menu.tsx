"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/data/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 text-gray-600 hover:text-blue-600 transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <ul
          id="mobile-menu"
          className="absolute left-0 top-full w-full bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-lg px-4 py-2"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-600 hover:text-blue-600 transition font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
