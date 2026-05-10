import { GithubIcon } from "@/assets/svgs";
import { PROJECTS } from "@/components/project/data";
import { Tag } from "@/components/shared/tag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Clock3,
  Database,
  ExternalLink,
  FileText,
  LockKeyhole,
  MapPinned,
  Package,
  Route,
  ScanSearch,
  ShieldCheck,
  Truck,
  UserRoundCog,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const parcelProject =
  PROJECTS.find((project) => project.id === "parcelkoy") ?? PROJECTS[0];

const HERO_TECH_HIGHLIGHTS = [
  "Next.js",
  "Node.js Modular Architecture",
  "JWT",
  "RBAC",
  "Zod",
];

const architectureFrontend = [
  "Service layer owns API calls and network concerns.",
  "Server actions wrap services with a centralized action wrapper.",
  "Client components consume server actions and keep the UI focused.",
];

const architectureBackend = [
  "route.ts handles API routing for each domain.",
  "controllers.ts manages request flow and validation orchestration.",
  "services.ts stores business logic and reusable operations.",
  "validators.ts keeps Zod schemas and inferred types together.",
];

const roleCards = [
  {
    title: "Super Admin",
    icon: UserRoundCog,
    summary: "Owns platform-wide configuration and oversight.",
    points: [
      "Manage user roles and permissions",
      "Configure system settings",
      "Review audit logs",
      "Control platform-level rules",
    ],
  },
  {
    title: "Admin",
    icon: ShieldCheck,
    summary: "Operates hubs, riders, and logistics flow.",
    points: [
      "Manage hubs and hub locations",
      "Assign pickup and delivery riders",
      "Track parcel movement through hubs",
      "Handle COD collection and settlement",
    ],
  },
  {
    title: "Merchant",
    icon: Package,
    summary: "Creates and monitors parcel delivery requests.",
    points: [
      "Create regular pickup or pick-and-drop requests",
      "Provide weight, delivery type, and COD details",
      "Track parcel status and cancel before pickup",
      "Review delivery history and financial reports",
    ],
  },
  {
    title: "Rider",
    icon: Truck,
    summary: "Executes pickup and delivery assignments.",
    points: [
      "Accept or reject assigned tasks",
      "Confirm pickup and update parcel status",
      "Verify delivery with OTP",
      "Add delivery notes when needed",
    ],
  },
];

const pipelineStages = [
  "Requested",
  "Pickup Assigned",
  "Picked Up",
  "Received at Origin Hub",
  "In Transit",
  "Received at Destination Hub",
  "Out for Delivery",
  "Delivery Verification (OTP)",
  "Delivered",
];

const serviceCards = [
  {
    title: "Home Delivery",
    icon: MapPinned,
    text: "Delivered directly to the receiver's address.",
  },
  {
    title: "Pickup Point Delivery",
    icon: Boxes,
    text: "Receiver collects the parcel from a designated hub or location.",
  },
  {
    title: "Express Delivery",
    icon: Clock3,
    text: "Available within Dhaka city with delivery within 24 hours.",
  },
  {
    title: "Standard Delivery",
    icon: Route,
    text: "Available nationwide with delivery within 48 to 72 hours.",
  },
];

function Divider() {
  return <hr className="border-border/50" />;
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
      {text}
    </p>
  );
}

const ParcelKoyPage = () => {
  return (
    <div className="relative bg-muted text-foreground">
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-32 pt-8 sm:px-6">
        {/* ── Back link ── */}
        <div className="my-10">
          <Button
            asChild
            variant="ghost"
            className="w-fit rounded-full px-3 -ml-3"
          >
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* ══════════════════════════════════════════
            HERO — title, badges, links, tags
        ══════════════════════════════════════════ */}
        <header className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-primary uppercase hover:bg-primary/15">
              Deep Dive
            </Badge>
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-medium"
            >
              {parcelProject.type}
            </Badge>
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              ParcelKoy
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
              A web-based courier logistics platform managing the complete
              parcel delivery lifecycle — from merchant pickup requests to COD
              settlement.
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {HERO_TECH_HIGHLIGHTS.map((tech) => (
              <Tag key={tech} text={tech} />
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild size="default" className="rounded-full px-5">
              <Link
                href={parcelProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="outline"
              className="rounded-full px-5"
            >
              <Link
                href={
                  parcelProject.githubUrlFrontend ??
                  parcelProject.githubUrlBackend ??
                  parcelProject.liveUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
                <GithubIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="ghost"
              className="rounded-full px-5"
            >
              <Link href="#database-design">
                View ERD
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Quick sub-links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground pt-1">
            <span className="font-medium text-foreground">Repos:</span>
            <Link
              href={parcelProject.githubUrlFrontend ?? parcelProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              Frontend <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={parcelProject.githubUrlBackend ?? parcelProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              Backend <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </header>

        {/* ══════════════════════════════════════════
            HERO IMAGE PLACEHOLDER
        ══════════════════════════════════════════ */}
        <div className="mb-16 rounded-2xl border border-border/70 bg-card/95 overflow-hidden shadow-lg shadow-primary/5">
          {/* Fake browser chrome */}
          <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <div className="ml-3 flex-1 rounded-md border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
              parcekoy.com
            </div>
          </div>
          {/* Image slot */}
          <div className="w-full h-80 relative">
            <Image
              src="/parcel-koy-hero-img.webp"
              fill
              className="object-cover"
              alt="parcel koy"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            AT A GLANCE — 4 stats
        ══════════════════════════════════════════ */}
        <section className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Lifecycle", value: "Pickup → COD" },
            { label: "Roles", value: "4 actor types" },
            { label: "Security", value: "JWT + RBAC + OTP" },
            { label: "Stack", value: "Next.js + Express" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/70 bg-card/80 px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-[10px] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            OVERVIEW
        ══════════════════════════════════════════ */}
        <section id="overview" className="py-14 space-y-8">
          <div className="space-y-2">
            <SectionLabel text="Project Overview" />
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Built to simplify courier operations end to end
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              ParcelKoy streamlines parcel delivery operations, provides
              real-time tracking, reduces manual logistics errors, and scales
              with multi-role courier workflows.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              What the platform covers
            </p>
            <div className="space-y-2">
              {[
                "Parcel pickup requests",
                "Rider assignment",
                "Hub processing and routing",
                "Real-time parcel tracking",
                "Delivery confirmation",
                "Cash on Delivery (COD) settlement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Improves handoff reliability across delivery stages",
              "Supports scalable courier services across multiple roles",
              "Keeps merchants, riders, and admins aligned on parcel state",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/60 bg-card/80 p-4"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            ARCHITECTURE
        ══════════════════════════════════════════ */}
        <section id="architecture" className="py-14 space-y-8">
          <div className="space-y-2">
            <SectionLabel text="Technical Architecture" />
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              A clean front-to-back structure built for scale
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              ParcelKoy keeps responsibilities separated so the frontend stays
              predictable while the backend remains modular and easy to extend.
            </p>
          </div>

          <div className="space-y-6">
            {/* Frontend */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">
                Frontend — Next.js
              </p>
              <div className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Service Layer → Server Actions → Client Data Flow
                </p>
              </div>
              <div className="space-y-2">
                {architectureFrontend.map((item, i) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-border/60 bg-card/80 p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background text-xs font-semibold text-primary ring-1 ring-primary/20">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">
                Backend — Modular Express
              </p>
              <div className="space-y-2">
                {architectureBackend.map((item, i) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-border/60 bg-card/80 p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background text-xs font-semibold text-primary ring-1 ring-primary/20">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            SECURITY
        ══════════════════════════════════════════ */}
        <section id="security" className="py-14 space-y-8">
          <div className="space-y-2">
            <SectionLabel text="Security & Validation" />
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Strict controls across auth, access, and data integrity
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The platform combines better-auth, JWT, RBAC, and Zod so the route
              layer, business logic, and forms all stay aligned on trust
              boundaries.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: LockKeyhole,
                title: "Authentication",
                text: "better-auth and JWT with login, register, password reset, OTP validation, and token rotation.",
              },
              {
                icon: ShieldCheck,
                title: "Access Control",
                text: "RBAC gates critical flows including block/delete user controls and role-specific logistics actions.",
              },
              {
                icon: FileText,
                title: "Validation",
                text: "Zod keeps backend APIs and frontend forms type-safe and consistent from request to response.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/60 bg-card/80 p-5 space-y-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            RBAC — User Roles
        ══════════════════════════════════════════ */}
        <section id="rbac" className="py-14 space-y-8">
          <div className="space-y-2">
            <SectionLabel text="User Roles & Access Control" />
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Four roles, clearly separated responsibilities
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              RBAC controls permissions from platform administration to parcel
              delivery execution.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {roleCards.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="rounded-2xl border border-border/60 bg-card/80 p-5 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {role.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {role.summary}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            PIPELINE — Delivery Stages
        ══════════════════════════════════════════ */}
        <section id="pipeline" className="py-14 space-y-8">
          <div className="space-y-2">
            <SectionLabel text="Core Workflow" />
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              A strictly ordered delivery pipeline
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every parcel moves through a transparent logistics pipeline so
              merchants and receivers can follow each step with confidence.
            </p>
          </div>

          <div className="relative">
            <div className="space-y-2">
              {pipelineStages.map((stage, index) => (
                <div
                  key={stage}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/80 px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-xs font-semibold text-primary ring-1 ring-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium text-foreground">{stage}</p>
                  {index === pipelineStages.length - 1 && (
                    <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                      Final
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
            OTP verification at the final step adds a trust check before a
            parcel is marked delivered.
          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            DELIVERY SERVICES & PRICING
        ══════════════════════════════════════════ */}
        <section id="services-pricing" className="py-14 space-y-8">
          <div className="space-y-2">
            <SectionLabel text="Delivery Services & Pricing" />
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Flexible delivery options with dynamic pricing
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Different delivery experiences with pricing adaptable to weight
              and delivery zone.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border/60 bg-card/80 p-5 space-y-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {service.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              Pricing factors
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Weight", "Measured per parcel"],
                ["Zone", "Based on delivery region"],
                ["Tier", "Aligned to speed level"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-border/60 bg-card/80 p-4"
                >
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            DATABASE DESIGN
        ══════════════════════════════════════════ */}
        <section id="database-design" className="py-14 space-y-8">
          <div className="space-y-2">
            <SectionLabel text="Database Design" />
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Structured around domain tables
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Each domain is isolated into its own management module, keeping
              the codebase maintainable and scalable without collapsing into a
              single large service file.
            </p>
          </div>

          {/* Domain tables */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              Core domain tables
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "Users",
                "Parcels",
                "Hubs / Routes",
                "Riders",
                "Payments / COD",
                "Audit Logs",
              ].map((table) => (
                <div
                  key={table}
                  className="rounded-xl border border-border/60 bg-card/80 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {table}
                </div>
              ))}
            </div>
          </div>

          {/* ERD placeholder */}
          <div className="rounded-2xl border border-dashed border-border/70 bg-linear-to-br from-background via-muted/40 to-primary/5 p-8 flex items-center justify-center min-h-50">
            <div className="text-center space-y-2">
              <Database className="h-8 w-8 text-muted-foreground/50 mx-auto" />
              <p className="text-sm text-muted-foreground">
                ERD diagram — postresql tables and relationships
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full mt-2"
              >
                <Link href="#database-design">
                  <ScanSearch className="h-4 w-4" />
                  View Full ERD
                </Link>
              </Button>
            </div>
          </div>

          {/* Module breakdown */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              Module structure per domain
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ["route.ts", "API routing"],
                ["controllers.ts", "Request orchestration"],
                ["services.ts", "Business logic"],
                ["validators.ts", "Zod schemas"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-border/60 bg-card/80 p-4"
                >
                  <p className="text-[11px] font-semibold tracking-[0.15em] text-primary font-mono">
                    {label}
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════
            FOOTER CTA
        ══════════════════════════════════════════ */}
        <section className="pt-14 space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              Next Step
            </p>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Explore the live product or review the codebase.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The links below connect you to the deployed frontend and the
              GitHub repositories that power ParcelKoy.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="outline" className="rounded-full px-5">
              <Link
                href={parcelProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="rounded-full px-5">
              <Link
                href={
                  parcelProject.githubUrlFrontend ??
                  parcelProject.githubUrlBackend ??
                  parcelProject.liveUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
                <GithubIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ParcelKoyPage;
