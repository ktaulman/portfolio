import { ReactNode } from "react";
import Link from "next/link";

function ExperienceList({ children }: { children: ReactNode }) {
  return (
    <ol className="flex flex-col items-between gap-24 text-base tracking-wider text-black">
      {children}
    </ol>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <li className="flex w-full">{children}</li>;
}

function Title({ children }: { children: ReactNode }) {
  return <h2 className="w-1/4 ">{children}</h2>;
}
function Description({ children }: { children: ReactNode }) {
  return (
    <p className="w-3/4 text-sm flex flex-col gap-6 items-start ">{children}</p>
  );
}
interface NavigationLinkProps {
  children: ReactNode;
  href: string;
}

function NavigationLink({ children, href }: NavigationLinkProps) {
  return (
    <Link
      className={"w-full underline underline-offset-4 text-blue-900"}
      href={href}
    >
      {children}
    </Link>
  );
}
interface ExternalLinkProps {
  children: ReactNode;
  href: string;
}
function ExternalLink({ children, href }: ExternalLinkProps) {
  return (
    <a
      className="w-full underline underline-offset-4 text-blue-900"
      href={href}
    >
      {children}
    </a>
  );
}

ExperienceList.Item = Item;
ExperienceList.Title = Title;
ExperienceList.Description = Description;
ExperienceList.NavigationLink = NavigationLink;
ExperienceList.ExternalLink = ExternalLink;

export default ExperienceList;
