export default function Table({ children }: { children: any }) {
  return (
    <div className="mdx-table">
      <table>{children}</table>
    </div>
  );
}
