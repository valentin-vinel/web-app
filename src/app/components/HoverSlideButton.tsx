"use client";
import { ReactNode } from "react";
import Link from "next/link";

interface HoverSlideButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function HoverSlideButton({
  href,
  children,
  className,
  onClick,
}: HoverSlideButtonProps) {
  return (
    <Link
      href={href}
      className={`relative overflow-hidden group flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <span className="word-top">{children}</span>
      <span className="word-bottom absolute left-1/2 -translate-x-1/2">
        {children}
      </span>
    </Link>
  );
}
