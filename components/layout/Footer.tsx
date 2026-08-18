import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const links = [
 ["Work", "/#work"],
 ["Services", "/#services"],
 ["About", "/#about"],
 ["Contact", "/#contact"]
];

export function Footer() {
 return (
 <footer className="border-t border-ff-border bg-ff-bg px-4 py-12 sm:px-6 lg:px-8">
 <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
 <div>
 <Link href="/" className="inline-flex text-ff-text">
 <Logo size="sm" />
 </Link>
 <p className="mt-4 text-sm text-ff-muted">Built in Zambia. Working worldwide.</p>
 </div>
 <div>
 <h2 className="font-heading text-sm font-semibold text-ff-text">Navigation</h2>
 <div className="mt-4 flex flex-col gap-3">
 {links.map(([label, href]) => (
 <Link key={href} href={href} className="text-sm text-ff-muted transition hover:text-ff-text">
 {label}
 </Link>
 ))}
 </div>
 </div>
 <div>
 <h2 className="font-heading text-sm font-semibold text-ff-text">Social</h2>
 <div className="mt-4 flex items-center gap-4">
 <a
 href="https://www.instagram.com/zedforge.zm"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="zed-forge on Instagram"
 className="focus-ring text-ff-muted transition hover:text-ff-text"
 >
 <Instagram size={18} />
 </a>
 <a
 href="https://wa.me/260966451446"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Message zed-forge on WhatsApp"
 className="focus-ring text-ff-muted transition hover:text-ff-text"
 >
 <MessageCircle size={18} />
 </a>
 </div>
 </div>
 </div>
 <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-ff-border pt-6 text-xs text-ff-muted md:flex-row">
 <p>© 2026 zed-forge. All rights reserved.</p>
 <p>Independent Digital Studio</p>
 </div>
 </footer>
 );
}
