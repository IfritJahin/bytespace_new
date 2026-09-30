"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p role="status" className="mt-6 max-w-[500px] rounded-full bg-[#D8FF4F] px-5 py-3 text-sm text-neutral-900">
        Thanks for subscribing! We&apos;ll keep you posted.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // No mailing list backend yet, so just confirm in the page.
        setDone(true);
      }}
      className="mt-6 flex max-w-[500px] items-center gap-2 sm:gap-3"
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="h-12 min-w-0 flex-1 rounded-full border border-neutral-300 bg-white px-4 sm:px-5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-full bg-[#D8FF4F] px-4 text-sm sm:px-7 text-neutral-900 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]"
      >
        Search
      </button>
    </form>
  );
}
