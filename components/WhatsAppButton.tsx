import { MessageCircle } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { whatsappUrl } from "@/data/site";

type WhatsAppButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-forest-700 text-white shadow-soft hover:bg-forest-900 focus-visible:outline-forest-700",
  secondary:
    "border border-forest-700/20 bg-white text-forest-900 hover:border-forest-700/40 hover:bg-forest-50 focus-visible:outline-forest-700",
  light:
    "bg-cream text-forest-900 hover:bg-white focus-visible:outline-white"
};

export function WhatsAppButton({
  children,
  variant = "primary",
  className = ""
}: WhatsAppButtonProps) {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
    </Link>
  );
}
