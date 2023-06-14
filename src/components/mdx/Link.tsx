import NextLink from "next/link";
export default function Link({
  children,
  href,
}: {
  children: any;
  href: string;
}) {
  return (
    <NextLink
      href={href}
      className="text-blue-400 hover:underline"
      target="_blank"
    >
      {children}
    </NextLink>
  );
}
