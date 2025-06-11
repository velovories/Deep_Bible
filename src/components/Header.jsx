import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 bg-blue-600 text-white text-center text-2xl font-bold">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <div>Deep Bible 📖</div>
        <nav className="space-x-4 text-base">
          <Link href="/">Головна</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/contacts">Контакти</Link>
        </nav>
      </div>
    </header>
  );
}