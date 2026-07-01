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