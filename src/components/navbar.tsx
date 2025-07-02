import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center gap-4 px-8 py-4">
      <div>
        <Link href="/">
          <h3 className="text-xl italic font-bold">Logo</h3>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/projects">Projects</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
