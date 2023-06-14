import NextImage, { ImageProps } from "next/image";

interface MyImgProps extends ImageProps {
  epic: boolean;
}

export default function Image({ epic = true, alt, ...props }: MyImgProps) {
  return (
    <div className="relative md:px-14 mdx-image">
      {epic ? (
        <div className="relative">
          <div
            className="-top-2 -bottom-2 -right-2 -left-2 absolute bg-center z-[-1] bg-contain blur-2xl rounded-[15%]"
            style={{ backgroundImage: `url(${props.src})` }}
          />
          <NextImage
            alt="blog-image"
            {...props}
            height={720}
            width={1080}
            className="rounded-lg border border-slate-50/[0.05] "
          />
        </div>
      ) : (
        <NextImage
          alt="blog-image"
          {...props}
          height={720}
          width={1080}
          className="rounded-md border border-slate-50/[0.05]"
        />
      )}
    </div>
  );
}
