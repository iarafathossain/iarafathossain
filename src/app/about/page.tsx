import { GithubIcon, LinkedinIcon } from "@/assets/svgs";
import { ResumeButton } from "@/components/shared/resume-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { socialLinks } from "@/constants";
import { Cake, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STORY_BLOCKS = [
  {
    heading: "My Journey",
    content:
      "My path into tech did not start with a rigid computer science curriculum; it began with pure curiosity. Back in 2022, while balancing my academic studies, I started diving into HTML, CSS, and JavaScript. What began as a side interest quickly became a passion by my first year of university.",
  },
  {
    heading: "From Code to Client Success",
    content:
      "In 2024, I decided to test my skills in the real world on Freelancer.com. Winning my first web design contest was a thrilling validation. That same client later hired me to completely redesign their website from scratch. Delivering that project and earning a 5-star rating taught me what it takes to build tools that real people use and value.",
  },
  {
    heading: "The Strategic Pivot",
    content:
      "As AI tools began reshaping the industry in 2025, I realized the future of web development was not just about building fast; it was about building smart. I recognized the opportunity to become a One Man Army by leveraging AI to handle routine tasks while I focused deeply on what really matters: backend architecture, complex system design, and solving real-world business logic problems.",
  },
  {
    heading: "Today",
    content:
      "I specialize in the MERN stack, Next.js, TypeScript, and PostgreSQL. I thrive on integrating AI capabilities like vector search and tool-calling agents into scalable systems.",
  },
  {
    heading: "The Business Edge",
    content:
      "Because I am completing my BBA in Management Information Systems, I do not just think like a developer; I think like a product manager. During my university years, I actively participated in business case competitions and social work, even taking my team to the runner-up position in the Hult Prize for social entrepreneurship.",
  },
];

const WORK_STYLE_POINTS = [
  "Designing business logic that scales",
  "Thinking like a product builder, not just a developer",
  "Breaking down edge cases others might miss",
];

const AboutPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-muted px-4 pb-20 pt-28 text-foreground sm:px-6 lg:px-8 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1.2px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.4em] text-muted-foreground uppercase">
            About
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            My Story
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hi, I&apos;m Arafat Hossain. I am a full-stack web developer who
            bridges the gap between clean code and measurable business impact.
          </p>
        </div>

        <Card className="border border-border/80 bg-card/95 shadow-xl shadow-primary/5 backdrop-blur-sm mb-10 px-6 py-5 sm:px-8 sm:py-6">
          <div className="flex items-center gap-5">
            <Image
              src="/arafat.webp"
              alt="Professional portrait of Arafat Hossain"
              width={100}
              height={100}
            />
            <div className="-space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Arafat Hossain
              </h2>
              <p className="mt-2 text-sm sm:text-lg font-medium text-muted-foreground">
                Full Stack Web Developer
              </p>
            </div>
          </div>

          <div className="space-y-5 border-t border-border/70 pt-5">
            <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Rangpur, Bangladesh
              </span>
              <span className="hidden text-border sm:inline">|</span>
              <span className="inline-flex items-center gap-2">
                <Cake className="h-4 w-4 text-primary" />
                23 Years Old
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>

              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>

              <ResumeButton />
            </div>
          </div>
        </Card>

        <Card className="border border-border/80 bg-card/95 shadow-xl shadow-primary/5 backdrop-blur-sm">
          <CardHeader className="border-b border-border/70 px-6 py-5 sm:px-8 sm:py-6">
            <Badge className="w-fit rounded-full bg-primary/15 text-primary hover:bg-primary/20">
              The Journey
            </Badge>
            <CardTitle className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              From Curiosity to Product-Focused Engineering
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8 px-6 py-7 sm:px-8 sm:py-9">
            {STORY_BLOCKS.map((block) => (
              <article key={block.heading} className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {block.heading}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-[1.04rem]">
                  {block.content}
                </p>
              </article>
            ))}

            <div className="rounded-2xl border border-border bg-muted/55 p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                How I Think &amp; Work
              </h3>

              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                {WORK_STYLE_POINTS.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[1.04rem]">
                I&apos;m detail-oriented by nature. I may take a bit more time,
                but the result is clean, reliable, and built to last.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutPage;
