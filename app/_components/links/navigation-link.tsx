import Link from "next/link";
import { ReactNode } from "react";

interface NavigationLinkProps {
  children: ReactNode;
  href: string;
}

export default function NavigationLink({
  children,
  href,
}: NavigationLinkProps) {
  return (
    <Link
      className={"w-full underline underline-offset-4 text-blue-900"}
      href={href}
    >
      {children}
    </Link>
  );
}
