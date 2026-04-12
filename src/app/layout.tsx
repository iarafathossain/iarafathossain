// import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// const satoshiBoldItalic = localFont({
//   src: "../assets/fonts/Satoshi-BoldItalic.otf",
//   variable: "--font-satoshi-bold-italic",
//   display: "swap",
// });

const milker = localFont({
  src: "../assets/fonts/Milker.otf",
  variable: "--font-milker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arafat Hossain | Full-Stack Developer",
  description:
    "Portfolio of Arafat Hossain, a Full-Stack Developer specializing in scalable web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${milker.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            {/* <header>
              <Navbar />
            </header> */}
            <main>{children}</main>
            <footer>Footer</footer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
