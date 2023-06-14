import { useEffect } from "react";
import { kanit, roboto } from "@/providers/font";

export function LI(props: any) {
  return (
    <li
      className={`whitespace-pre-wrap items-center dark:border-slate-300/[0.1] rounded-lg border px-2 py-4 relative ${roboto.className} shadow-md`}
    >
      <div
        className={`absolute -top-2.5 left-4 h-5 w-12 backdrop-blur-2xl rounded-md dark:border-slate-300/[0.1] border flex items-center text-center text-slate-400 justify-center font-bold ${kanit.className}`}
      >
        <span>#{props.key}</span>
      </div>
      {props.children}
    </li>
  );
}

export function UL({ children }: any) {
  return <ul className="ml-2 py-2 px-2">{children}</ul>;
}
