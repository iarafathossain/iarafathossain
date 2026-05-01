import { GithubIcon, LinkedinIcon } from "@/assets/svgs";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-primary",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:arafat24official@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <footer className="relative w-full bg-muted border-t border-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src={"/arafat.webp"}
                alt="Arafat Hossain"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-bold tracking-wider text-foreground">
                Arafat Hossain
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                Full Stack Web Developer.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-1">Based in Bangladesh</p>
              <p>Available for remote work worldwide</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-6 text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-3 flex flex-col">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200">
                    →
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-6 text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interested in collaborating? Let&apos;s discuss your next
                project.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors duration-200 group"
              >
                Start Conversation
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2.5 rounded-lg border border-border/30 text-muted-foreground transition-all duration-200 hover:border-border/60 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right text-sm text-muted-foreground">
            <p>© {currentYear} Arafat Hossain. All rights reserved.</p>
            <p className="text-xs mt-1">
              Designed & developed with precision and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
