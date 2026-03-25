import Link from "next/link";

const social = [
  {
    label: "Instagram",
    count: "83k",
    href: "https://instagram.com",
    icon: "/icons/instagram.svg",
  },
  {
    label: "YouTube",
    count: "<1k",
    href: "https://youtube.com",
    icon: "/icons/youtube.svg",
  },
  {
    label: "TikTok",
    count: "18k",
    href: "https://tiktok.com",
    icon: "/icons/tiktok.svg",
  },
  {
    label: "X",
    count: "<1k",
    href: "https://x.com",
    icon: "/icons/x.svg",
  },
  {
    label: "LinkedIn",
    count: "18k",
    href: "https://linkedin.com",
    icon: "/icons/linkedin.svg",
  },
] as const;

export function SocialRow() {
  return (
    <div className="flex w-full max-w-[313px] flex-row flex-wrap items-end gap-6">
      {social.map(({ label, count, href, icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-5 flex-col items-center gap-2 hover:opacity-90"
        >
          <span className="sr-only">{label}</span>
          <img
            src={icon}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 shrink-0 object-contain"
          />
          <span className="text-[10px] font-medium leading-none text-white">
            {count}
          </span>
        </Link>
      ))}
      <Link
        href="mailto:hello@example.com"
        className="flex h-[41px] shrink-0 items-center rounded-full bg-white/20 px-5 text-[13px] font-medium leading-none text-white transition-colors hover:bg-white/30"
      >
        Contact
      </Link>
    </div>
  );
}
