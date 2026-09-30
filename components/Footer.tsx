import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const columns = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#discover" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#community" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-6 pt-14 pb-8 md:px-12 md:pt-20 lg:px-[115px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,500px)_1fr] lg:gap-20">
          <div>
            <Link href="#home" aria-label="ByteSpace home" className="inline-flex items-center gap-2">
              {/* Header_Logo.png has white text; show only its lime mark and set the wordmark dark */}
              <span className="block h-[37px] w-[32px] overflow-hidden">
                <Image src="/Header_Logo.png" alt="" width={171} height={37} className="h-[37px] w-[171px] max-w-none" />
              </span>
              <span className="text-xl font-bold tracking-tight">ByteSpace</span>
            </Link>
            <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-neutral-600">
            Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <NewsletterForm />
            <p className="mt-3 max-w-[460px] text-xs leading-relaxed text-neutral-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-10 lg:justify-items-start">
            {columns.map((links, i) => (
              <ul key={i} className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link.label} className="text-sm">
                    <Link href={link.href} className="break-words text-neutral-600 transition-colors hover:text-[#003BE2]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-neutral-200 pt-8 text-center text-xs text-neutral-500 md:mt-20 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-xs">© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {legal.map((link) => (
              <li key={link.label} className="text-xs">
                <Link href={link.href} className="underline-offset-4 transition-colors hover:text-[#003BE2] hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
