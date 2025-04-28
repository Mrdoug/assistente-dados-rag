"use client";

import { useState, useEffect} from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


  useEffect(() => {
    setQuestion("");
    setAnswer("");
  }, []);

  const handleSubmit = async () => {
    const res = await fetch("/api/rag", {
      method: "POST",
      body: JSON.stringify({ question }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setAnswer(data.result);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl mb-4">Assistente de Dados (RAG)</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Digite sua pergunta"
        className="border p-2 w-full max-w-md mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Perguntar
      </button>

      {answer && (
        <div className="mt-8 p-4 bg-gray-100 rounded w-full max-w-md">
          <h2 className="font-bold mb-2">Resposta:</h2>
          <p>{answer}</p>
        </div>
      )}
    </main>
  );
}
