import { SVGProps } from "react";

export const ClinicIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M12 6v4" />
      <path d="M10 8h4" />
      <path d="M9 21v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </svg>
  );
};
