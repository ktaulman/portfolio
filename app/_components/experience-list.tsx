import { ReactNode } from "react";
import clsx from "clsx";

interface ListProps {
  children: ReactNode;
  gap: "none" | "xs" | "sm" | "md" | "lg";
}
function List({ children, gap }: ListProps) {
  const className = clsx([
    "flex flex-col items-between tracking-wider text-black ",
    { "gap-[0px]": gap === "none" },
    { "gap-[10px]": gap === "xs" },
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
  return <li className="flex w-full flex-col gap-6">{children}</li>;
}
function ItemLeft({ children }: ItemProps) {
  return <div className="flex-row justify-end items-center">{children}</div>;
}
function ItemRight({ children }: ItemProps) {
  return <div className="flex-3/4 sm:flex-row">{children}</div>;
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-semibold text-sm tracking-wide leading-2">
      {children}
    </h2>
  );
}
function Description({ children }: { children: ReactNode }) {
  return <p className="gap-2 items-start text-sm leading-8">{children}</p>;
}

List.Item = Item;
List.ItemRight = ItemRight;
List.ItemLeft = ItemLeft;
List.Title = Title;
List.Description = Description;

export default List;
