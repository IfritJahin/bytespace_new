import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#discover", label: "Courses" },
  { href: "#community", label: "Creators" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 text-white sm:px-8 md:px-12 lg:px-16">
      <Link href="#home" aria-label="ByteSpace home" className="flex shrink-0 items-center">
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
        href="/#discover"
        className="transition-colors hover:text-[#D8FF4F]"
      >
        Join Us
      </Link>

      <button
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
      </button>
      </div>
    </header>
  );
}
