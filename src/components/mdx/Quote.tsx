import { useEffect } from "react";
import { roboto } from "@/providers/font";

export default function Quote({
  type,
  children,
}: {
  type: "note";
  children: any;
}) {
  return (
    <blockquote className={`relative ${roboto.className}`}>
      <div
        className={`rounded-lg ${types[type]?.bg} mt-8 p-2 z-20 relative border ${types[type]?.border} relative text-slate-600 dark:text-slate-300 font-medium`}
      >
        <p>{children}</p>
      </div>
      <div className="absolute -top-8 -z-10 flex gap-1.5 items-center left-2 h-3">
        <div className="relative">
          <i
            className={`${types[type]?.iconColor} ${types[type]?.icon} z-10 backdrop-blur-2xl`}
          ></i>
          <div
            className={
              "absolute w-[1px] h-full bg-slate-400/50 left-[50%] top-3.5 -z-10"
            }
          ></div>
        </div>
        <p className="font-semibold dark:text-slate-300 text-slate-600">
          {toProperCase(type)}
        </p>
      </div>
    </blockquote>
  );
}

const types = {
  note: {
    bg: "dark:bg-[#12303a]/50 bg-slate-100",
    border: "border-sky-400/50",
    iconColor: "dark:text-sky-300/80 text-sky-400",
    icon: "fa-solid fa-circle-info",
  },
  warning: {
    bg: "dark:bg-[#12303a]/50 bg-slate-100",
    border: "border-yellow-400/50",
    iconColor: "dark:text-yellow-300/80 text-yellow-400",
    icon: "fa-solid fa-triangle-exclamation",
  },
};
const toProperCase = (k: string) => {
  return k[0].toUpperCase() + k.slice(1);
};
