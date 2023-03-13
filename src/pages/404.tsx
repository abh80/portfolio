import MetaResolver from "@/components/MetaResolver";
import { Kanit, Roboto } from "@next/font/google";
import Link from "next/link";

const kanit = Kanit({ weight: ["700", "500", "400"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["700", "500", "400"], subsets: ["latin"] });

export default function NotFound() {
  return (
    <>
      <MetaResolver
        title="This page does not exist"
        description="404 - Not Found"
      />
      <div className="w-full mx-auto text-center flex flex-col space-y-0.5 top-[50%] absolute -translate-y-1/2">
        <h1 className={"text-3xl font-bold leading-loose " + kanit.className}>
          This page does not exist !
        </h1>
        <h2
          className={"text-2xl font-semibold leading-loose " + kanit.className}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          It's not easy to get lost, but its easy to get right back on track
        </h2>
        <Link
          className={
            "text-blue-400 hover:underline text-[1.3rem] text-bold mt-5 " +
            roboto.className
          }
          href={"/"}
        >
          Back to homepage
        </Link>
      </div>
    </>
  );
}
