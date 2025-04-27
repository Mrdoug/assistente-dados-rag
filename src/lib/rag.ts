// src/lib/rag.ts

import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";// Usando o chroma, porém para teste troquei para o memory
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { MemoryVectorStore } from "langchain/vectorstores/memory"; // apenas paara testar

// Instancia o modelo de linguagem
const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY!,
  temperature: 0,
  modelName: "gpt-4o-mini",
});

// Cria o Prompt usado para juntar documentos, instuções e perguntas
// O Prompt é o que o modelo de linguagem vai usar para gerar a respost
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "Use the following context to answer the question."],
  new MessagesPlaceholder("context"),
  ["human", "{input}"],
]);

// Cria a chain
const combineDocsChain = await createStuffDocumentsChain({
  llm: model,
  prompt,
});

// Instancia os embeddings
const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY!,
});

// Inicializa o vetorstore e cria o retriever usando a mémória... preciso de um banco de dados depois
async function initializeRAGChain() {
  const vectorstore = await MemoryVectorStore.fromTexts(
    [
      "O céu é azul",
      "A grama é verde",
      "O fogo é quente",
      "A água é molhada",
    ],
    [
      { id: "1" },
      { id: "2" },
      { id: "3" },
      { id: "4" },
    ],
    embeddings
  );

  const retriever = vectorstore.asRetriever();

  return await createRetrievalChain({
    retriever,
    combineDocsChain: combineDocsChain,
  });
}

export const ragChain = await initializeRAGChain();
