import Link from "next/link";

const social = [
  {
    label: "Instagram",
    count: "83k",
    href: "https://instagram.com",
    Icon: IconInstagram,
  },
  {
    label: "YouTube",
    count: "<1k",
    href: "https://youtube.com",
    Icon: IconYouTube,
  },
  {
    label: "TikTok",
    count: "18k",
    href: "https://tiktok.com",
    Icon: IconTikTok,
  },
  {
    label: "X",
    count: "<1k",
    href: "https://x.com",
    Icon: IconX,
  },
  {
    label: "LinkedIn",
    count: "18k",
    href: "https://linkedin.com",
    Icon: IconLinkedIn,
  },
] as const;

export function SocialRow() {
  return (
    <div className="flex w-full max-w-[313px] flex-row flex-wrap items-end gap-6">
      {social.map(({ label, count, href, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-5 flex-col items-center gap-2 text-white hover:opacity-90"
        >
          <span className="sr-only">{label}</span>
          <Icon className="h-5 w-5 shrink-0 text-white/80" aria-hidden />
          <span className="text-[10px] font-medium leading-none">{count}</span>
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

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M17.5 6.2c0-1.2-.9-2.1-2-2.3C13.2 3.5 10 3.5 10 3.5s-3.2 0-5.5.4c-1.1.2-2 1.1-2 2.3C2 7.5 2 10 2 10s0 2.5.5 3.8c0 1.2.9 2.1 2 2.3 2.3.3 5.5.4 5.5.4s3.2 0 5.5-.4c1.1-.2 2-1.1 2-2.3.5-1.3.5-3.8.5-3.8s0-2.5-.5-3.8z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M8.2 12.6V7.4L12.8 10l-4.6 2.6z" fill="currentColor" />
    </svg>
  );
}

function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M14.2 6.8c1 .2 1.8 1 2 2 .2-.1.5-.1.8-.1v2.4a4.3 4.3 0 0 1-2.5-.7v3.5a3.8 3.8 0 1 1-3.8-3.8c.1 0 .2 0 .3.01V12a1.6 1.6 0 1 0 1.1 1.5V4.5h2.1c.1.7.4 1.3.9 1.7.5.4 1.1.6 1.8.6h.01z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M4 4l12 12M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M4.5 7.5h2.2V16M4.5 4.8V4.7M8.2 16v-4.1c0-1.2.8-2 2-2s1.9.7 1.9 2V16"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="5.6" cy="4.1" r="1" fill="currentColor" />
    </svg>
  );
}
