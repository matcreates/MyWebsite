import Image from "next/image";
import { LinkCard } from "@/components/LinkCard";
import { SocialRow } from "@/components/SocialRow";
import { linkItems } from "@/data/links";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto w-full max-w-[440px] px-[30px] pb-16 pt-[54px] lg:max-w-[min(1200px,calc(100vw-4rem))] lg:px-8">
        <div className="flex flex-col gap-6">
          <header className="mx-auto w-full max-w-[313px]">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <p className="text-[17px] font-normal leading-none tracking-tight text-white">
                  @matcreates
                </p>
              </div>
              <SocialRow />
            </div>
          </header>

          <section
            aria-label="Links"
            className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            {linkItems.map((item) => (
              <LinkCard key={item.title} item={item} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
