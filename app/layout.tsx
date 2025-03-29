import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/context/theme";
// import { Theme } from "@radix-ui/themes";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio | Pavan",
  description: "Explore my portfolio showcasing innovative projects, skills, and experiences in web development, software engineering, and modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-gramm="false">
      <link rel="icon" href="/grs_logo.svg" sizes="any" />
      <body style={{ background: "#0D0D0D", color: "white" }} className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 max-w-screen-sm md:max-w-[100vw] overflow-x-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
