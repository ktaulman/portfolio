import React from "react";

type Size = "sm" | "md" | "lg";

export function Spinner({ size }: { size: Size }) {
  function getLength(size: Size) {
    if (size === "sm") return 20;
    else if (size === "md") return 60;
    else if (size === "lg") return 80;
    else return 20;
  }
  const length = getLength(size);
  return (
    <span
      role="status"
      aria-label="Loading"
      className="inline-block w-5 h-5 align-middle"
    >
      <svg
        className="animate-spin text-gray-500"
        width={length}
        height={length}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="10"
          cy="10"
          r="8"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M18 10a8 8 0 01-8 8V18a8 8 0 100-16v2a8 8 0 018 8z"
        />
      </svg>
    </span>
  );
}
