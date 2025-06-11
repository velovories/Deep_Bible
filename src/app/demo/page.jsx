"use client"; // потрібен для використання React hooks у Next.js 13 app router

import { useState } from "react";

export default function DemoPage() {
  const [message, setMessage] = useState("Натисни будь-яку кнопку");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Демо сторінка з кнопками</h1>

      <div className="flex gap-4 mb-6">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded"
          onClick={() => setMessage("Ти натиснув кнопку 1")}
        >
          Кнопка 1
        </button>

        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => setMessage("Ти натиснув кнопку 2")}
        >
          Кнопка 2
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setMessage("Ти натиснув кнопку 3")}
        >
          Кнопка 3
        </button>
      </div>

      <div className="text-xl font-semibold">{message}</div>
    </main>
  );
}