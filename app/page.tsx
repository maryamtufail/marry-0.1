import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "LEARINGO — A realm of education",
      subtitle: "Development with Next.js",
      imageSrc: "/images/learingo.png",
      tags: ["Dashboard", "SaaS", "Development", "UI/UX"],
      href: "https://learnigo.org",
      priority: true,
      gradientFrom: " #FFD4BD",
      gradientTo: "#EF644C",
    },
    {
      title: "RiverCity - Dashboard",
      subtitle: "Design & web app",
      imageSrc: "/images/rivercity.png",
      tags: ["CRM", "Web Development", "Web", "Dashboard"],
      href: "https://rivercitytech.ca",
      priority: false,
      gradientFrom: " #FFD4BD",
      gradientTo: "#EF644C",
    },
    {
      title: "CollectMD — Medical Company",
      subtitle: "Mobile‑first",
      imageSrc: "/images/collectmd.png",
      tags: ["Company Website", "UI/UX", "Brand"],
      href: "https://www.collectmd.com",
      priority: false,
       gradientFrom: " #FFD4BD",
      gradientTo: "#EF644C",
    },
    {
      title: "IKS Logics",
      subtitle: "Accessibility‑first UI",
      imageSrc: "/images/iks.png",
      tags: ["A11y", "Web App", "Portfolio"],
      href: "https://ikslogics.com",
      priority: false,
       gradientFrom: " #FFD4BD",
      gradientTo: "#EF644C",
    }
  ]

  return (
    <main className="bg-[#FFD4BD] text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
        <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
  <RevealOnView
    as="div"
    intensity="hero"
    className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 sm:p-8"
    staggerChildren
  >
    {/* Texture background */}
    <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
      <DotGridShader />
    </div>
    <div>
      {/* Wordmark */}
      <div className="mb-8 flex items-center gap-2">
        <div className="text-2xl font-extrabold tracking-tight text-black">Marry v 0.1</div>
        <div className="h-2 w-2 rounded-full bg-black/60" aria-hidden="true" />
      </div>

      {/* Headline with intro blur effect */}
      <AnimatedHeading
        className="text-4xl font-black leading-[1.05] tracking-tight text-black sm:text-5xl"
        lines={["If you imagine, I make it."]}
      />

      <p className="mt-4 max-w-[42ch] text-lg text-black/70">
        A freelancer focusing heavily on design & development based in Pakistan. Create products that make people say, oh damn!
      </p>

      {/* CTAs */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="rounded-full">
          <Link href="mailto:maryamtufail78@gmail.com">
            Hire me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Trusted by */}
      <div className="mt-10">
        <p className="mb-3 text-xs font-semibold tracking-widest text-black/50">COMPANIES I'VE WORKED WITH</p>
        <ul className="flex flex-col gap-2 text-2xl font-black text-black/25 sm:flex-row flex-wrap">
          <li>LEARINGO</li>
          <li>SAPPHIRE SOL.</li>
          <li>IKS LOGICS</li>
          <li>COLLECT MD</li>
        </ul>
      </div>
    </div>
  </RevealOnView>
</aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(80svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
