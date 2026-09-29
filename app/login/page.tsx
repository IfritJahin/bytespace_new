import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";
import AuthShell from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
};

export default function LoginPage() {
  return (
    <AuthShell
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-sm text-[#003BE2]">Sign In</p>
      <h1 className="mt-2 text-4xl font-bold leading-[1.15] sm:text-[44px]">Welcome Back</h1>

      <AuthForm
        submitLabel="Sign In"
        fields={[
          { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "current-password" },
        ]}
      />

      <div className="mt-10 flex items-center gap-4 text-xs text-neutral-400">
        <span className="h-px flex-1 bg-neutral-200" />
        or
        <span className="h-px flex-1 bg-neutral-200" />
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 transition hover:border-neutral-300 hover:bg-neutral-50"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Sign in with Google"
          className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 transition hover:border-neutral-300 hover:bg-neutral-50"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M12.24 10.29v3.84h5.35c-.23 1.37-1.63 4.02-5.35 4.02-3.22 0-5.85-2.67-5.85-5.96s2.63-5.96 5.85-5.96c1.83 0 3.06.78 3.76 1.45l2.57-2.47C17 3.7 14.83 2.75 12.24 2.75 6.99 2.75 2.75 6.99 2.75 12.19s4.24 9.44 9.49 9.44c5.48 0 9.11-3.85 9.11-9.27 0-.62-.07-1.1-.15-1.57h-8.96Z" />
          </svg>
        </button>
      </div>

      <p className="mt-auto pt-12 text-center text-xs text-neutral-500">
        New user?{" "}
        <Link href="/signup" className="text-[#003BE2] hover:underline">
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
