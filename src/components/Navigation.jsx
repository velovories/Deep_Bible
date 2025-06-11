export default function Navigation() {
  return (
    <nav className="bg-blue-700 p-3">
      <ul className="flex space-x-4 justify-center text-white font-semibold">
        <li><a href="/" className="hover:underline">Головна</a></li>
        <li><a href="/about" className="hover:underline">Про проект</a></li>
        <li><a href="/contact" className="hover:underline">Контакти</a></li>
      </ul>
    </nav>
  );
}