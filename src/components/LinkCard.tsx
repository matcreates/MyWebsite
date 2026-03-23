import Image from "next/image";
import Link from "next/link";
import type { LinkItem } from "@/data/links";

type Props = {
  item: LinkItem;
};

export function LinkCard({ item }: Props) {
  return (
    <Link
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative block h-[152px] w-full overflow-hidden rounded-[24px] outline-none ring-white/0 transition-[box-shadow,transform] focus-visible:ring-2 focus-visible:ring-white/50 active:scale-[0.99]"
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 1024px) 45vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        priority={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1C1E] from-[5%] via-[#1C1C1E]/55 to-[#1C1C1E]/10"
        aria-hidden
      />
      <div className="relative flex h-full flex-col justify-start p-5">
        <div className="flex min-h-0 flex-1 flex-col gap-1 text-[13px] leading-snug">
          {item.category ? (
            <p className="text-[10px] font-medium uppercase leading-none tracking-[0.04em] text-white/60">
              {item.category}
            </p>
          ) : null}
          <p className="font-semibold text-white">{item.title}</p>
          <p className="text-[12px] leading-[1.35] text-white/80">{item.description}</p>
        </div>
      </div>
    </Link>
  );
}
