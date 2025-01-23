import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-around">
        <Link href="/" className="text-xl font-semibold hover:text-gray-200">
          Главная
        </Link>
        <Link href="/palindromes" className="text-xl font-semibold hover:text-gray-200">
          Словарь палиндромов
        </Link>
      </div>
    </header>
  );
}
