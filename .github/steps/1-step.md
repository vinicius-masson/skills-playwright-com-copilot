## Step 1: Abrir o Codespace e criar uma branch de trabalho 🚀

Bem-vindo(a)! Neste exercício você vai escrever testes **end-to-end (E2E)** com **Playwright**, guiado pelo **GitHub Copilot**, usando **MCP**, **Skills** e **TDD**.

### 📖 Teoria rápida: o que é cada coisa?

| Conceito | O que é, em uma frase |
| --- | --- |
| **Playwright** | Ferramenta da Microsoft que abre um navegador de verdade e interage com a sua página (clica, digita, valida). |
| **TDD** (Test Driven Development) | Você escreve o **teste primeiro** (que falha — RED), depois escreve o código mínimo pra ele passar (GREEN) e por fim **refatora**. |
| **MCP** (Model Context Protocol) | Um “plug” padronizado que dá superpoderes ao Copilot — como abrir um navegador real e ler a página. |
| **Skill / Instructions** | Um arquivo `markdown` que o Copilot lê automaticamente para seguir as **convenções do seu projeto**. |

> Não se preocupe em decorar agora — você vai praticar cada uma dessas ideias nos próximos passos. 😉

### ⌨️ Atividade 1: Abrir o Codespace

1. Clique no botão abaixo para abrir um **Codespace** (um VS Code que roda no navegador, já configurado com Node.js, Playwright e o Chromium):

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

1. Confirme que o campo **Repository** é o **seu** repositório (não o template original) e clique em **Create Codespace**.

   - ✅ Sua cópia: `/{{full_repo_name}}`

1. Aguarde 1-2 minutos enquanto o Codespace instala dependências e baixa o Chromium. Você verá no terminal uma mensagem do `playwright install` finalizando.

### ⌨️ Atividade 2: Conhecer o projeto com a ajuda do Copilot

1. No VS Code, clique no ícone de **chat** (no topo) para abrir o painel do **Copilot Chat**. Selecione o modo **Ask**.

1. Cole o prompt abaixo para o Copilot te apresentar o projeto:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Explique brevemente a estrutura deste projeto e o que cada arquivo faz.
   > ```

1. Para conferir se a página carrega, abra um terminal (menu **Terminal → New Terminal**) e rode:

   ```bash
   npm start
   ```

   Vá para a aba **Ports**, encontre a porta `3000` e clique no ícone 🌐 para abrir no navegador. Você verá a página da **Newsletter do Pinguim** 🐧. Pare o servidor com `Ctrl+C` quando quiser.

### ⌨️ Atividade 3: Criar uma branch para o seu trabalho

A próxima validação automática espera que você publique uma branch chamada **exatamente** `playwright-com-copilot`.

1. No terminal, rode:

   ```bash
   git checkout -b playwright-com-copilot
   git push -u origin playwright-com-copilot
   ```

1. Confira no canto inferior esquerdo do VS Code: deve estar escrito `playwright-com-copilot`.

1. Aguarde alguns segundos: a Mona vai conferir sua branch e enviar o próximo passo aqui na issue. 👀

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- O nome da branch precisa ser **exatamente** `playwright-com-copilot` — sem prefixos, sufixos ou erros de digitação.
- Confirme se a branch foi **publicada** com `git push -u origin playwright-com-copilot`.

</details>
