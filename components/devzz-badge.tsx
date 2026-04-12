import React from "react";
import Image from "next/image";

const SHOW_BADGE = process.env.NEXT_PUBLIC_SHOW_DEVZZ_BADGE !== "false";

export function DevzzBadge() {
  if (!SHOW_BADGE) return null;

  return (
    <a
      href="https://devzz.toolzz.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      Made with Vibe
      <Image src="/devzz-favicon.ico" alt="Devzz" width={16} height={16} />
    </a>
  );
}

