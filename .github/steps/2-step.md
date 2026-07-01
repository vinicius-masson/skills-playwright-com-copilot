## Step 2: Configurar o Playwright MCP e a Skill do projeto 🧠

Bom trabalho! Agora vamos dar **dois superpoderes** ao Copilot:

1. O **Playwright MCP**: assim o Copilot consegue **abrir um navegador real**, ler a árvore de acessibilidade da página e gerar testes baseados no que **está realmente lá** — não em chutes.
2. Um arquivo **`.github/copilot-instructions.md`**: o Copilot lê esse arquivo automaticamente em **toda** conversa neste repositório. Ele funciona como uma “Skill” do projeto, ensinando convenções de TDD e Playwright para o agente.

### 📖 Teoria rápida

- **MCP** é um protocolo aberto. O VS Code (a partir da versão 1.99) sabe ler um arquivo `.vscode/mcp.json` e conectar o Copilot a “servidores MCP”. O servidor [`@playwright/mcp`](https://github.com/microsoft/playwright-mcp) expõe ações como _“abra esta URL”_, _“clique neste botão”_, _“tire um screenshot”_.
- O arquivo **`.github/copilot-instructions.md`** vira um “contrato” entre você e o Copilot: regras que ele deve sempre seguir (ex.: “use `getByRole` em vez de seletor CSS”).

### ⌨️ Atividade 1: Configurar o Playwright MCP

1. Na sua branch `playwright-com-copilot`, crie o arquivo **`.vscode/mcp.json`** com este conteúdo:

   ```json
   {
     "servers": {
       "playwright": {
         "command": "npx",
         "args": ["@playwright/mcp@latest"]
       }
     }
   }
   ```

1. Recarregue o VS Code: aperte `F1` (ou `Ctrl+Shift+P`) → digite **"Developer: Reload Window"** → Enter.

1. Abra o **Copilot Chat** e troque o modo para **Agent** (no seletor no topo do painel).

1. Confirme que o MCP está ativo: clique no ícone de **ferramentas** 🛠️ no chat — você deve ver um grupo `playwright` com várias ferramentas (browser_navigate, browser_click etc.).

1. Faça um teste rápido com este prompt:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Use o Playwright MCP para abrir https://playwright.dev,
   > tirar um screenshot e me dizer o título da página.
   > ```

   Se o Copilot retornar o título e/ou um screenshot, o MCP está conectado. ✅

### ⌨️ Atividade 2: Criar a Skill do projeto

1. Crie o arquivo **`.github/copilot-instructions.md`** com este conteúdo (copie inteiro):

   ```markdown
   # Instruções do Copilot — Playwright + TDD

   Este repositório usa **Playwright** (JavaScript) e segue **TDD**.
   Ao ajudar com testes, siga estas regras:

   ## Fluxo TDD
   - Sempre escreva o teste **antes** do código de produção (RED).
   - Rode `npx playwright test` e confirme que o teste **falha** pelo motivo certo.
   - Escreva o **mínimo** de código para o teste passar (GREEN).
   - Refatore mantendo os testes verdes.

   ## Locators
   - Prefira `getByRole`, `getByLabel`, `getByPlaceholder` e `getByTestId`.
   - Não use seletores CSS frágeis (`.classe`, `#id`) ou XPath.

   ## Esperas
   - Nunca use `page.waitForTimeout` ou delays fixos.
   - Confie no auto-wait do Playwright e em `expect(...).toBeVisible()`.

   ## Estrutura
   - Coloque os testes em `tests/`, um arquivo por feature.
   - Use o `baseURL` do `playwright.config.js` em vez de URLs absolutas.

   ## MCP
   - Quando precisar gerar um teste novo, use o servidor MCP `playwright`
     para inspecionar a página real antes de escrever o código.
   ```

1. Salve, faça commit e publique na branch `playwright-com-copilot`:

   ```bash
   git add .vscode/mcp.json .github/copilot-instructions.md
   git commit -m "feat: configura Playwright MCP e Skill do Copilot"
   git push
   ```

1. Aguarde a Mona conferir os arquivos. 👀

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- O caminho dos arquivos precisa ser **exatamente** `.vscode/mcp.json` e `.github/copilot-instructions.md`.
- Confirme que o `mcp.json` contém a palavra `playwright`.
- Confirme que `copilot-instructions.md` contém as palavras **TDD** e **getByRole**.

</details>
