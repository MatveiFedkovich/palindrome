import { useState } from 'react';
import Header from '../../components/Header';
import palindromes from '../../data/palindromes';

export default function Palindromes() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredPalindromes = palindromes
    .filter((word) => word.includes(search.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.localeCompare(b) : b.localeCompare(a)));

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Словарь палиндромов</h1>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Поиск палиндромов..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border border-gray-300 rounded mr-4 w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="p-3 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Сортировать: {sortAsc ? "А-Я" : "Я-А"}
          </button>
        </div>
        <ul className="list-disc text-lg text-gray-700 space-y-2 text-left w-80">
          {filteredPalindromes.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
