import { motion, Variants } from "framer-motion";
import MetaResolver from "@/components/MetaResolver";
import ViewItem from "@/components/ViewItem";
import { kanit, roboto } from "@/providers/font";
import { MDXProvider } from "@mdx-js/react";
import components from "@/components/mdx";
import React from "react";

export default function BlogLayout({
  children = null,
  matter: { title, description, tag, cover, date, author, topics },
}: {
  children: any;
  matter: {
    title: string;
    description?: string;
    tag: string;
    cover: string;
    topics: string[];
    author: string;
    date: string;
  };
}) {
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
        title={title + " - Abh80 Blogs"}
        banner={cover ?? null}
        description={
          description +
          " | Indulge in the enriching world of Abh80's exceptional blog collection, meticulously crafted to deliver quality content with simplicity. Immerse yourself in captivating articles that effortlessly keep you engaged and on the edge of your seat. Explore Abh80's thought-provoking blogs today and unlock a wealth of knowledge and inspiration."
        }
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
                {tag}
              </motion.h2>
            </motion.div>
            <motion.h1
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className={
                "text-3xl font-bold mt-2 dark:text-slate-200 md:text-7xl " +
                roboto.className
              }
            >
              {title}
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
              {description}
            </motion.h3>
            <div
              className={
                "mt-4 text-[1rem] dark:text-slate-400 font-semibold md:text-[1.1rem] max-w-[300px] lg:max-w-fit md:max-w-[600px] md:ml-1 flex gap-2 items-center " +
                roboto.className
              }
            >
              <i className="fa-regular fa-calendar"></i>
              <span>{date}</span>
            </div>
          </div>
        }
      >
        <div className={roboto.className + " mdx-view"}>
          {
            //@ts-ignore
            <MDXProvider components={components}>{children}</MDXProvider>
          }
          <div
            className={`${kanit.className} font-semibold dark:text-slate-400 mt-10`}
          >
            Posted by <span className="text-blue-400">{author}</span> with
            topics:{" "}
            {topics.map((x, i) => (
              <span
                key={i}
                className="mx-1 px-1 dark:bg-sky-700/50 bg-slate-300 dark:text-slate-300 text-slate-600"
              >
                #{x}
              </span>
            ))}
          </div>
        </div>
      </ViewItem>
    </>
  );
}
