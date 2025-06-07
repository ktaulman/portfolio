import clsx from "clsx";

interface SkeletonProps {
  variant: "text" | "circle" | "rectangle" | "rounded";
  animate?: boolean;
  width: number;
  height: number;
}

export default function Skeleton({
  variant,
  animate,
  width,
  height,
}: SkeletonProps) {
  const className = clsx(
    "bg-gray-400 relative", //background
    { "animate-pulse": animate }, //animation
    { "rounded-full": variant === "circle" }, //appearance variant 1
    { "rounded-lg": variant === "rounded" }, //appearance variant 2
    { "rounded-none": variant === "rectangle" }, //appearance variant 3
    { "rounded-sm": variant === "text" }
  );

  return (
    <div
      className={className}
      style={{ height, width }}
      aria-busy="true"
      aria-label="Loading"
      role="status"
    ></div>
  );
}
