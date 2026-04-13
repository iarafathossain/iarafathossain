"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useCallback, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { NAV_ITEMS, SOCIAL_LINKS } from "./data";
import { DesktopNavLink } from "./desktop-nav-link";
import { HamburgerButton } from "./hamburger-button";
import { MobileMenu } from "./mobile-menu";
import { ResumeButton } from "./resume-button";
import { SocialButton } from "./social-button";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current: number) => {
    setIsScrolled(current > 12);
  });

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMobileMenu = useCallback(() => setMobileOpen((v) => !v), []);

  return (
    <MotionConfig reducedMotion="user">
      {/* Sticky positioner — stays at top on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ease-out py-4 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-md shadow-xs shadow-primary/20"
            : "bg-transparent p-3 shadow-none"
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
            <div
              className="hidden lg:flex items-center gap-0.5"
              onMouseLeave={() => setHoveredItem(null)}
              role="list"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.href} role="listitem">
                  <DesktopNavLink
                    item={item}
                    isHovered={hoveredItem === item.href}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                </div>
              ))}
            </div>

            {/* ── Right: Actions (desktop) ── */}
            <div className="hidden lg:flex items-center gap-1.5">
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
            <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} />
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
    </MotionConfig>
  );
};

export default Navbar;
