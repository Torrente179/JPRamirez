import Link from "next/link";
import { Ambient } from "@/components/ambient";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-clip pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <Ambient src="/images/ambient/hero.webp" opacity={0.3} fade="bottom" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <p className="label enter">404</p>
        <h1 className="display enter mt-5 text-[clamp(3rem,8vw,7rem)]">
          This page doesn&apos;t exist.
        </h1>
        <p className="enter mt-6 max-w-[460px] text-lg leading-[1.6] text-muted-foreground">
          The link might be old, or the address has a typo.
        </p>
        <div className="enter mt-8 flex flex-wrap gap-2.5">
          <Link href="/" className="btn btn-brand">
            Go home
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            See my projects
          </Link>
        </div>
      </div>
    </section>
  );
}
