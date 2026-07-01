## Step 3: TDD — Escreva o teste que **FALHA** primeiro 🔴

Este é o coração do **TDD**: você descreve o comportamento desejado num teste **antes** de existir o código. O teste vai **falhar** — e isso é exatamente o que queremos. Essa falha prova que o teste **realmente testa** algo.

### 🎯 A feature que vamos construir

Hoje a página `public/index.html` só mostra um título e um parágrafo. Queremos adicionar um **formulário de inscrição** na newsletter:

- Um campo de e-mail (label: **"Seu e-mail"**).
- Um botão **"Inscrever"**.
- Quando o usuário clicar com um e-mail válido, deve aparecer a mensagem **"Inscrição confirmada!"**.

Antes de codar isso na página, vamos escrever o **teste E2E** que descreve esse comportamento.

### ⌨️ Atividade: Gerar o teste com o Copilot (modo Agent)

1. No **Copilot Chat**, garanta que está em **Agent mode** e que a Skill `.github/copilot-instructions.md` aparece como contexto carregado.

1. Cole este prompt:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Crie o arquivo tests/newsletter.spec.js com um teste Playwright que:
   >
   > 1. Abre a página inicial (use baseURL do playwright.config.js).
   > 2. Preenche o campo "Seu e-mail" com "ada@example.com".
   > 3. Clica no botão "Inscrever".
   > 4. Espera que apareça o texto "Inscrição confirmada!".
   >
   > Siga as regras do .github/copilot-instructions.md:
   > use getByRole/getByLabel, sem CSS, sem waitForTimeout.
   > NÃO altere ainda o public/index.html — o teste deve falhar (TDD RED).
   > ```

1. Revise o arquivo gerado. Ele deve ficar parecido com:

   <details>
   <summary>Exemplo do teste esperado</summary>

   ```javascript
   const { test, expect } = require('@playwright/test');

   test('usuário consegue se inscrever na newsletter', async ({ page }) => {
     await page.goto('/');

     await page.getByLabel('Seu e-mail').fill('ada@example.com');
     await page.getByRole('button', { name: 'Inscrever' }).click();

     await expect(page.getByText('Inscrição confirmada!')).toBeVisible();
   });
   ```

   </details>

1. Rode o teste no terminal e **confirme que ele falha** (esperamos isso!):

   ```bash
   npx playwright test
   ```

   Você verá algo como `Error: locator.fill: Test timeout ... waiting for getByLabel('Seu e-mail')`. **Esse é o RED do TDD.** 🔴

1. Faça commit e publique:

   ```bash
   git add tests/newsletter.spec.js
   git commit -m "test: adiciona teste E2E (RED) da inscricao na newsletter"
   git push
   ```

1. Aguarde a Mona conferir que o teste foi adicionado. 👀

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- O arquivo precisa estar em **`tests/newsletter.spec.js`**.
- Ele precisa conter **`getByRole`** e **`Inscrição confirmada!`** (com acento).
- Se o Copilot quiser “consertar” o HTML para o teste passar, peça para **não alterar** ainda — esse é o passo seguinte.

</details>
