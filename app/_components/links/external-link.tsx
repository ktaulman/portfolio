import { ReactNode } from "react";

interface ExternalLinkProps {
  children: ReactNode;
  href: string;
}
export default function ExternalLink({ children, href }: ExternalLinkProps) {
  return (
    <a
      className="flex-3/4 underline underline-offset-4 text-blue-900"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}
