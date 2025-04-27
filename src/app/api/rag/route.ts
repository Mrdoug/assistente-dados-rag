import { NextResponse } from "next/server";
import { ragChain } from "@/lib/rag";

// POST para /api/rag
export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Nenhuma pergunta enviada." }, { status: 400 });
    }

    // Usa a cadeia RAG para gerar a resposta, passando a pergunta
    const response = await ragChain.invoke({
      input: question,
    });

    return NextResponse.json({ result: response.answer });
  } catch (error: any) {
    console.error("Erro ao processar RAG:", error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}