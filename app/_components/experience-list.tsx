import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ListProps {
  children: ReactNode;
  gap: "none" | "sm" | "md" | "lg";
}
function List({ children, gap }: ListProps) {
  const className = clsx([
    "flex flex-col items-between text-base tracking-wider text-black",
    { "gap-[0px]": gap === "none" },
    { "gap-[20px]": gap === "sm" },
    { "gap-[60px]": gap === "md" },
    { "gap-[300px]": gap === "lg" },
  ]);

  return <ul className={className}>{children}</ul>;
}

interface ItemProps {
  children: ReactNode;
}
function Item({ children }: ItemProps) {
  return <li className="flex w-full ">{children}</li>;
}
function ItemLeft({ children }: ItemProps) {
  return <div className="flex-1/4">{children}</div>;
}
function ItemRight({ children }: ItemProps) {
  return <div className="flex-3/4">{children}</div>;
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex-1/4 text-right pr-15 font-semibold text-sm tracking-wide">
      {children}
    </h2>
  );
}
function Description({ children }: { children: ReactNode }) {
  return (
    <p className="flex-3/4 flex flex-col gap-2 items-start text-sm">
      {children}
    </p>
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
      className="flex-3/4 underline underline-offset-4 text-blue-900"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}

List.Item = Item;
List.ItemRight = ItemRight;
List.ItemLeft = ItemLeft;
List.Title = Title;
List.Description = Description;
List.NavigationLink = NavigationLink;
List.ExternalLink = ExternalLink;

export default List;
