"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ResumeButton } from "../../shared/resume-button";
import { BrandLogo } from "./brand-logo";
import { NAV_ITEMS, SOCIAL_LINKS } from "./data";
import { DesktopNavLink } from "./desktop-nav-link";
import { HamburgerButton } from "./hamburger-button";
import { MobileMenu } from "./mobile-menu";
import { SocialButton } from "./social-button";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const [showHeroJump, setShowHeroJump] = useState<boolean>(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current: number) => {
    setIsScrolled(current > 12);
    setShowHeroJump(current > 180);
  });

  useEffect(() => {
    const resolveActiveNav = () => {
      if (pathname === "/about") {
        setActiveHref("/about");
        return;
      }

      const activationLine = window.scrollY + window.innerHeight * 0.4;
      let currentHref = "";

      for (const item of NAV_ITEMS) {
        if (!item.href.includes("#")) {
          continue;
        }

        const sectionId = item.href.split("#")[1]?.replace(/^\//, "");
        if (!sectionId) {
          continue;
        }
        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) {
          continue;
        }

        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        if (activationLine >= sectionTop && activationLine < sectionBottom) {
          currentHref = item.href;
          break;
        }

        if (activationLine >= sectionTop) {
          currentHref = item.href;
        }
      }

      setActiveHref(currentHref);
    };

    resolveActiveNav();
    window.addEventListener("scroll", resolveActiveNav, { passive: true });
    window.addEventListener("resize", resolveActiveNav);
    window.addEventListener("hashchange", resolveActiveNav);

    return () => {
      window.removeEventListener("scroll", resolveActiveNav);
      window.removeEventListener("resize", resolveActiveNav);
      window.removeEventListener("hashchange", resolveActiveNav);
    };
  }, [pathname]);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMobileMenu = useCallback(() => setMobileOpen((v) => !v), []);
  const handleSelectNav = useCallback((href: string) => {
    setActiveHref(href);
  }, []);
  const jumpToHero = useCallback(() => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-150 ease-out py-5 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-md shadow-xs shadow-primary/20"
            : "bg-transparent shadow-none"
        }`}
      >
        <motion.nav
          initial={{ opacity: 1, y: 0 }}
          role="navigation"
          aria-label="Main navigation"
          className="relative pointer-events-auto px-3 w-full max-w-6xl"
        >
          <div className="flex items-center justify-between gap-4">
            {/* ── Left: Brand ── */}
            <BrandLogo onClick={closeMobileMenu} />

            {/* ── Center: Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1" role="list">
              {NAV_ITEMS.map((item) => (
                <div key={item.href} role="listitem">
                  <DesktopNavLink
                    item={item}
                    isActive={activeHref === item.href}
                    onSelect={() => handleSelectNav(item.href)}
                  />
                </div>
              ))}
            </div>

            {/* ── Right: Actions (desktop) ── */}
            <div className="hidden lg:flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <SocialButton key={link.label} {...link} />
              ))}

              {/* Separator */}
              <span aria-hidden className="w-px h-4 bg-border/70 mx-1" />

              <ResumeButton />
            </div>

            {/* ── Right: Hamburger (mobile) ── */}
            <div className="flex lg:hidden">
              <HamburgerButton isOpen={mobileOpen} onClick={toggleMobileMenu} />
            </div>
          </div>

          {/* ── Mobile dropdown — rendered inside the pill so it sits below ── */}
          {/* Wrapper with relative + overflow-visible so rounded-full doesn't clip dropdown */}
          <div className="lg:hidden relative" id="mobile-nav-menu">
            <MobileMenu
              isOpen={mobileOpen}
              onClose={closeMobileMenu}
              activeHref={activeHref}
              onSelect={handleSelectNav}
            />
          </div>
        </motion.nav>
      </div>

      {/* Backdrop overlay when mobile menu is open (closes on tap outside) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHeroJump && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={jumpToHero}
            aria-label="Jump back to hero section"
            title="Jump back to hero section"
            className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-lg shadow-primary/10 backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Navbar;
