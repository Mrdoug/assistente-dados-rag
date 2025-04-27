"use client";

import { useState } from "react";

export default function RagPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/rag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (response.ok) {
        setAnswer(data.result);
      } else {
        setAnswer(data.error || "Erro desconhecido.");
      }
    } catch (error) {
      console.error(error);
      setAnswer("Erro ao se comunicar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Assistente de Dados (RAG)</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Digite sua pergunta..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Consultando..." : "Perguntar"}
        </button>
      </form>

      {answer && (
        <div className="mt-8 bg-gray-100 p-4 rounded shadow max-w-md w-full">
          <h2 className="text-xl font-semibold mb-2">Resposta:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
