import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { ScrollProgress } from "@/components/shared/ScrollProgress";

export const metadata: Metadata = {
 metadataBase: new URL("https://zed-forge-xi.vercel.app"),
 title: "zed-forge | Independent Digital Studio Based in Zambia",
 description:
 "zed-forge engineers high-performance web applications, SaaS platforms, and bespoke digital experiences for ambitious brands and enterprises across Zambia and beyond.",
 keywords: ["web developer Zambia", "digital studio Africa", "zed-forge", "software engineering Zambia"],
 openGraph: {
 title: "zed-forge — Independent Digital Studio Based in Zambia",
 description: "High-performance web applications and bespoke digital platforms, engineered to the standard ambitious brands demand.",
 url: "https://zed-forge-xi.vercel.app",
 siteName: "zed-forge"
 }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 const organizationSchema = {
 "@context": "https://schema.org",
 "@type": "Organization",
 name: "zed-forge",
 url: "https://zed-forge-xi.vercel.app",
 description: "zed-forge is an independent digital studio engineering high-performance web applications, SaaS platforms, and bespoke digital experiences.",
 email: "zedforgezm@gmail.com",
 telephone: "+260573457814",
 sameAs: ["https://www.instagram.com/zedforge.zm"],
 address: {
 "@type": "PostalAddress",
 addressCountry: "ZM"
 }
 };

 return (
 <html lang="en" suppressHydrationWarning>
 <head>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
 />
 <script
 dangerouslySetInnerHTML={{
 __html: `
 (function() {
 var t = localStorage.getItem('ff-theme') || 'dark';
 document.documentElement.classList.toggle('dark', t === 'dark');
 document.documentElement.classList.toggle('light', t === 'light');
 document.documentElement.setAttribute('data-theme', t);
 })();
 `
 }}
 />
 </head>
 <body className={`${GeistSans.variable} ${GeistMono.variable} font-body antialiased`}>
 <a
 href="#main"
 className="focus-ring sr-only z-[100] bg-ff-ember px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
 >
 Skip to main content
 </a>
 <ScrollProgress />
 {children}
 <CommandPalette />
 <Analytics />
 </body>
 </html>
 );
}
