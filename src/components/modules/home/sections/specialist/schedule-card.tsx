import { ClockCalendarIcon } from "@/assets/icons";

type ScheduleItem = {
  day: string;
  hours: string;
};

type ScheduleCardProps = {
  title: string;
  items: ScheduleItem[];
};

export const ScheduleCard = ({ title, items }: ScheduleCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-secondary p-6 text-white">
      <div className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
          <ClockCalendarIcon className="size-5" />
        </span>
        <span className="font-paytone-one text-lg">{title}</span>
      </div>

      <div className="mt-5 flex flex-col font-paytone-one">
        {items.map(({ day, hours }) => (
          <div
            key={day}
            className="grid grid-cols-2 border-b border-white/25 py-3"
          >
            <span>{day}</span>
            <span>{hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
