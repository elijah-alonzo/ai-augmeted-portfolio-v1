import type { ReactNode } from "react";

export function Tag({ className, children }: { className: string; children: ReactNode }) {
  return <span className={`px-2 py-1 text-xs rounded ${className}`}>{children}</span>;
}
