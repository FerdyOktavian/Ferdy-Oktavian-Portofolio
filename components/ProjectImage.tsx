import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
};

export default function ProjectImage({
  src,
  alt,
  width = 1600,
  height = 1000,
  className = "",
  imageClassName = "",
}: ProjectImageProps) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-black/10 bg-[#ebe7dd] p-2 shadow-[0_12px_35px_rgba(34,34,31,0.06)] md:p-3 ${className}`}
    >
      <div className="overflow-hidden rounded-[11px] border border-black/10 bg-white">
        <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#f5f2eb] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-black/20" />
          <span className="h-2 w-2 rounded-full bg-black/20" />
          <span className="h-2 w-2 rounded-full bg-black/20" />
        </div>

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full ${imageClassName}`}
        />
      </div>
    </div>
  );
}
