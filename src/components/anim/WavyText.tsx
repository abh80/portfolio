import { motion, Variants } from "framer-motion";

export default function WavyText({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const duration = 0.7 / text.length;
  const delay = 0;
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className={"flex flex-wrap " + className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {Array.from(text).map((x, i) => (
        <motion.span variants={child} key={i}>
          {x == " " ? "\u00A0" : x}
        </motion.span>
      ))}
    </motion.h1>
  );
}
