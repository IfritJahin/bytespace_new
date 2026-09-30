"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "#discover", label: "Courses" },
  { href: "#community", label: "Creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 font-[Satoshi-Regular] text-white sm:px-8 md:px-12 lg:px-16">
      <Link href="/" aria-label="ByteSpace home" className="flex shrink-0 items-center">
        <Image src="/Header_Logo.png" alt="ByteSpace" width={171} height={37} priority className="h-auto w-[138px] sm:w-[155px] lg:w-[171px]" />
      </Link>
      <nav aria-label="Main" className="nav-link hidden items-center gap-8 text-sm md:flex">
        {links.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-[#D8FF4F] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{link.label}</Link>)}
      </nav>
      <div className="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm md:gap-6">
      <Link
        href="/login"
        className="transition-colors hover:text-[#D8FF4F]"
      >
        Sign In
      </Link>

      <Link
        href="/signup"
        className="transition-colors hover:text-[#D8FF4F]"
      >
        Join Us
      </Link>

      {/* Saved courses need an account, so send visitors to sign in. */}
      <Link
        href="/login"
        aria-label="Saved courses"
        className="transition-colors hover:text-[#D8FF4F]"
      >
        <Image
          src="/Vector.png"
          alt=""
          width={16}
          height={16}
          className="h-5 w-4 sm:h-5 sm:w-4"
        />
      </Link>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
        className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:text-[#D8FF4F] md:hidden"
      >
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
          {open ? (
            <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          )}
        </svg>
      </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-5 top-full z-30 flex flex-col rounded-2xl bg-white p-2 text-sm text-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,.18)] sm:inset-x-8 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition-colors hover:bg-[#D8FF4F]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
