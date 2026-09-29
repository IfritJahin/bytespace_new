"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
};

export default function AuthForm({ fields, submitLabel }: { fields: Field[]; submitLabel: string }) {
  const [status, setStatus] = useState("");

  return (
    <form
      className="mt-10 space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        // No auth backend yet — keep credentials in the browser and tell the user.
        setStatus("Accounts aren't connected yet. Please check back soon.");
      }}
    >
      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="block text-xs font-medium text-neutral-700">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            required
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            minLength={f.type === "password" ? 8 : undefined}
            className="mt-2 h-11 w-full rounded-lg border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none focus:ring-2 focus:ring-[#003BE2]/15"
          />
        </div>
      ))}

      <div className="flex items-center justify-between gap-4">
        <p role="status" className="text-xs text-neutral-500">
          {status}
        </p>
        <button
          type="submit"
          className="h-10 shrink-0 rounded-full bg-[#D8FF4F] px-6 text-sm text-neutral-900 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
