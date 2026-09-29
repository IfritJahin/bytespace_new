import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";
import AuthShell from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
};

export default function SignupPage() {
  return (
    <AuthShell
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <p className="text-sm text-[#003BE2]">Create an Account</p>
      <h1 className="mt-2 max-w-[320px] text-4xl font-bold leading-[1.15] sm:text-[44px]">Welcome to ByteSpace</h1>

      <AuthForm
        submitLabel="Continue"
        fields={[
          { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
          { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "new-password" },
        ]}
      />

      <p className="mt-auto pt-12 text-center text-xs text-neutral-500">
        Already have an account?{" "}
        <Link href="/login" className="text-[#003BE2] hover:underline">
          Login
        </Link>
      </p>
    </AuthShell>
  );
}
