import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { text: "Explore", href: "/explore" },
    { text: "Trends", href: "/trends" },
    { text: "For Employers", href: "/employers" },
  ];

  return (
    <header className="text-base">
      <nav className="flex justify-between py-[20px] px-[150px]">
        <Link href="/">
          <img src="skilloft-black.png" alt="skilloft Logo" />
        </Link>

        <div className="flex justify-between items-center">
          <ul className="flex gap-40">
            {navItems.map((page, index) => (
              <li key={index}>
                <Link href={page.href}>{page.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-20">
          <Link href="/login">
            <button className="py-2 rounded-lg">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-8 py-2 rounded-xl bg-[#FFD700]">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
