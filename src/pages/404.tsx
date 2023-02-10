import ViewItem from "@/components/ViewItem";
import MetaResolver from "@/components/MetaResolver";
import { Kanit } from "@next/font/google";

const kanit = Kanit({ weight: ["700", "500", "400"], subsets: ["latin"] });
export default function NotFound() {
  return (
    <>
      <MetaResolver
        title="This page does not exist"
        description="404 - Not Found"
      />
      <ViewItem>
        <div className="mt-10 space-y-10">
          <h1
            className={
              kanit.className + " text-xl font-bold text-center w-full"
            }
          >
            404 - Not Found
          </h1>

          <h2
            className={
              kanit.className + " text-lg font-semibold text-center w-full"
            }
          >
            You are definitely lost right?
          </h2>
          <div className="h-96" />
        </div>
      </ViewItem>
    </>
  );
}
