import {
  HTMLProps,
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { roboto } from "@/providers/font";
import { getCodeLanguageString } from "@/utils/mdx";
import { motion, Variants } from "framer-motion";

export default function Pre({ children }: any) {
  let language: string | null = children.props?.className;
  if (language) language = language.replace("language-", "");
  language = getCodeLanguageString(language);
  const pre: MutableRefObject<HTMLPreElement | null> = useRef(null);

  const [copied, setCopy] = useState(false);
  const handleCopyOnClick = () => {
    if (pre.current) {
      let code: string =
        pre.current.querySelector("div.p-2 > code")?.textContent ?? "";
      navigator.clipboard.writeText(code).then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 800);
      });
    }
  };
  const CopySuccessVariants: Variants = {
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hide: {
      scale: 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  return (
    <div className="w-full overflow-x-clip mdx-pre-wrapper">
      <pre
        ref={pre}
        className={`mdx-pre ${roboto.className} text-md w-full font-bold dark:text-slate-200/80 text-slate-500 relative`}
      >
        <div className="py-1.5 px-2 mb-2 border-b dark:border-slate-400/[0.3] border-slate-400/50 sticky top-0 left-0 h-10">
          <span className={`${roboto.className} font-semibold`}>
            {language}
          </span>
          <button
            className="absolute right-2 top-1.5 py-1 px-1 dark:bg-blue-400/70 rounded-md border border-sky-400/30 flex"
            onClick={handleCopyOnClick}
          >
            <motion.i
              variants={CopySuccessVariants}
              animate={copied ? "hide" : "show"}
              initial="show"
              className="fa-regular fa-clipboard w-full"
            ></motion.i>
            <motion.i
              variants={CopySuccessVariants}
              animate={copied ? "show" : "hide"}
              initial="hide"
              className="fa-solid fa-check -ml-[100%] w-full"
            ></motion.i>
          </button>
        </div>

        <div className="p-2">{children}</div>
      </pre>
    </div>
  );
}
