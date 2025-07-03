import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center gap-4 px-8 py-6">
      <div className="w-[80px]">
        <Link href="/">
          <h3 className="text-xl italic font-bold">Logo</h3>
        </Link>
      </div>
      <div className=" flex items-center justify-center gap-8">
        <Link href="/about" className="text-lg hover:font-semibold">
          About
        </Link>
        <Link href="/projects" className="text-lg hover:font-semibold">
          Projects
        </Link>
        <Link href="/portfolio" className="text-lg hover:font-semibold">
          Portfolio
        </Link>
        <Link href="/contact" className="text-lg hover:font-semibold">
          Contact
        </Link>
      </div>
    </div>
  );
}
