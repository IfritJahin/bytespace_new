import Link from "next/link";

export default function LoginPage() {
	return (
		<main className="grid min-h-screen place-items-center bg-[#003BE2] px-5 py-12 text-white">
			<section className="w-full max-w-md rounded-lg bg-white p-8 text-neutral-900 shadow-xl sm:p-10">
				<Link href="/" className="text-sm font-semibold text-[#003BE2]">ByteSpace</Link>
				<h1 className="mt-8 text-3xl font-bold">Sign in</h1>
				<p className="mt-3 text-sm leading-relaxed text-neutral-600">Account access is not connected yet. Browse the available courses while we get things ready.</p>
				<Link href="/#discover" className="mt-7 inline-flex rounded-full bg-[#D8FF4F] px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-95">Explore courses</Link>
			</section>
		</main>
	);
}
