import ViewItem from "@/components/ViewItem";
import MetaResolver from "@/components/MetaResolver";

export default function NotFound() {
  return (
    <>
      <MetaResolver
        title="This page does not exist"
        description="404 - Not Found"
      />
      <ViewItem>
        <div>404</div>
      </ViewItem>
    </>
  );
}
