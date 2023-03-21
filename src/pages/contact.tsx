import ViewItem from "@/components/ViewItem";
import MetaResolver from "@/components/MetaResolver";
import React from "react";
import { motion, Variants } from "framer-motion";
import { kanit, roboto } from "@/providers/font";

export default function ContactPage() {
  const containerVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <MetaResolver
        title="Contact - Abh80"
        description="Connect with me for various kind of purposes ranging from freelancing to hiring for work!"
      />
      <ViewItem
        header={
          <div className="w-full max-w-7xl mx-auto px-3 relative lg:px-5">
            <motion.div>
              <motion.h2
                transition={{ delay: 0.1 }}
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className={
                  "font-bold text-[1rem] ml-0.5 text-sky-400 md:text-[1.7rem] " +
                  kanit.className
                }
              >
                Home
              </motion.h2>
            </motion.div>
            <motion.h1
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className={
                "text-3xl font-bold mt-2 dark:text-slate-200 md:text-7xl " +
                roboto
              }
            >
              Hi, I am Abh80
            </motion.h1>
            <motion.h3
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className={
                "mt-3 text-[1rem] dark:text-slate-400 font-semibold md:text-[1.2rem] max-w-[300px] lg:max-w-fit md:max-w-[600px] md:ml-1 " +
                roboto.className
              }
            >
              a{" "}
              <b className="dark:text-slate-300">Java / Javascript developer</b>
              , interested in web and android applications
            </motion.h3>
          </div>
        }
      >
        <div></div>
      </ViewItem>
    </>
  );
}
