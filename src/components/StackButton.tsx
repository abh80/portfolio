import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css"
import {Roboto} from "@next/font/google";

const roboto = Roboto({weight: "400", subsets: ["latin"]});


export default function StackButton({href, name, icon}: { href: string, name: string, icon: string }) {
    return (
        <Link
            target="_blank"
            href={href}
            onMouseEnter={(event) => {
                event.currentTarget.classList.add(styles["is-hovered"])
            }}
            onMouseLeave={(e) => {
                e.currentTarget.classList.remove(styles["is-hovered"])
            }}
            className={"flex rounded-md border-2 border-sky-500 py-1 px-2 transition-all hover:bg-sky-500 " + styles["stack-link-btn"]}>
                            <span className={"text-white flex gap-2 " + roboto.className}>
                            <i className={icon + " text-xl"}></i>
                                {" "}<p className="text-lg">{name}</p>
                            <span
                                className={"material-symbols-outlined text-[1.2rem] " + styles["ext-icon"]}>open_in_new</span>
                            </span>
        </Link>
    )
}