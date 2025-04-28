# Assistente de Dados (RAG)

Este é um projeto de um assistente de dados baseado em **RAG (Retrieval-Augmented Generation)**, que combina recuperação de informações e geração de respostas utilizando modelos de linguagem avançados.

## 🚀 Funcionalidades

- **Busca de informações**: Recupera dados relevantes de uma base de conhecimento.
- **Geração de respostas**: Utiliza um modelo de linguagem para responder perguntas com base no contexto recuperado.
- **Interface interativa**: Permite que os usuários façam perguntas e recebam respostas diretamente na interface.

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework para construção da interface web.
- **[LangChain](https://www.langchain.com/)**: Biblioteca para construção de cadeias de processamento de linguagem natural.
- **[OpenAI API](https://openai.com/api/)**: Para geração de respostas e embeddings.
- **MemoryVectorStore**: Armazenamento vetorial em memória para testes.


## ⚙️ Configuração e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Chave de API da OpenAI

### Passos para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Mrdoug/assistente-dados-rag.git
   cd assistente-dados-rag
   ```

2. Instale as dependências:
    ```bash
    npm install 
    ```

3. Configure as variáveis de ambiente: Crie um arquivo .env.local na raiz do projeto e adicione sua chave de API da OpenAI:

    ```bash
    OPENAI_API_KEY=your_openai_api_key
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash 
    npm run dev
    ```

5. Acesse o projeto no navegador:
    ```bash 
    http://localhost:3000
    ```

## 🧪 Testes

Atualmente, o projeto não possui testes automatizados. Contribuições para adicionar testes são bem-vindas!

## 📖 Como Funciona

O usuário faz uma pergunta na interface. O sistema utiliza a cadeia RAG para:

- Recuperar informações relevantes de uma base de conhecimento.
- Gerar uma resposta com base no contexto recuperado.
- Exibir a resposta na interface.

## 📌 Próximos Passos

- Adicionar suporte a armazenamento vetorial persistente (ex.: Chroma).
- Melhorar a interface do usuário.
- Implementar testes unitários e de integração.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com 😡 por Douglas Borges.
