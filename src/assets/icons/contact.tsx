import { SVGProps } from "react";

export const ContactIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 18a4 4 0 0 0-8 0" />
      <circle cx="12" cy="11" r="3" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M8 2v2" />
      <path d="M16 2v2" />
    </svg>
  );
};
