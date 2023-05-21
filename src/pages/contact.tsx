import ViewItem from "@/components/ViewItem";
import MetaResolver from "@/components/MetaResolver";
import React from "react";
import { motion, Variants } from "framer-motion";
import { kanit, roboto } from "@/providers/font";
import Link from "next/link";

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
                Contact
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
              Lets Connect!
            </motion.h1>
          </div>
        }
      >
        <div>
          <section id={"email"}>
            <h1
              className={
                kanit.className +
                " dark:text-white md:text-2xl text-xl font-bold"
              }
            >
              <Link scroll={true} href={"#email"}>
                Email
              </Link>
            </h1>
            <div className="h-5"></div>
            <h2
              className={
                kanit.className + " dark:text-white md:text-lg text-base"
              }
            >
              Feel free to reach via any of the following emails -
              <div className="h-5"></div>
            </h2>
            <table
              className={
                "w-42 sm:w-full lg:w-3/4 table-fixed text-left rounded-lg dark:border-slate-200/10 border border-collapse " +
                roboto.className
              }
            >
              <thead>
                <tr className="border-b border-slate-200/10">
                  <th className="px-4 py-1">Contact</th>
                  <th className="px-4 py-1">Detail</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr>
                  <td className="px-4 py-1">contact@abh80.site</td>
                  <td className="px-4 py-1">
                    Business purposes / formal way to reach
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-1">abhb787@outlook.com</td>
                  <td className="px-4 py-1">Personal email</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </ViewItem>
    </>
  );
}
