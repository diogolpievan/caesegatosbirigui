import { ReactNode } from "react";

type ExperienceCardProps = {
  number: string;
  label: ReactNode;
  className?: string;
};

export const ExperienceCard = ({
  number,
  label,
  className = "",
}: ExperienceCardProps) => {
  return (
    <div className={`rounded-[53px] bg-white p-5.25 ${className}`}>
      <div className="flex flex-col items-center justify-center rounded-4xl bg-accent px-14.25 py-9.75 text-center text-white">
        <span className="font-paytone-one text-5xl">{number}</span>
        <span className="mt-3 font-paytone-one text-lg leading-tight">{label}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
