## Step 5: Rodar os testes no GitHub Actions (CI) 🤖

Seu teste passa **localmente**, mas se cada pessoa do time precisar lembrar de rodar `npx playwright test` antes de cada PR, mais cedo ou mais tarde algo vai quebrar. A solução é **integração contínua (CI)**: o GitHub roda os testes automaticamente em cada `push`.

### 📖 Teoria rápida

- **GitHub Actions** é o serviço de CI/CD do GitHub. Você descreve o pipeline em um YAML dentro de `.github/workflows/`.
- Para Playwright a Microsoft mantém uma **imagem Docker oficial** com todos os navegadores instalados. Usá-la deixa o job mais rápido e estável.

### ⌨️ Atividade: Criar o workflow de CI com a ajuda do Copilot

1. No **Copilot Chat**, em **Agent mode**, cole o prompt:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Crie o arquivo .github/workflows/playwright.yml que rode os testes
   > Playwright em CI. Requisitos:
   >
   > - Trigger: push em qualquer branch e pull_request para main.
   > - runs-on: ubuntu-latest.
   > - Use a imagem container mcr.microsoft.com/playwright:v1.49.0-noble.
   > - Passos: actions/checkout@v4, actions/setup-node@v4 com node 20,
   >   `npm ci`, `npx playwright test`.
   > - Faça upload do playwright-report como artifact, mesmo se o job falhar.
   > ```

1. Revise o YAML gerado. Ele deve ficar parecido com:

   <details>
   <summary>Exemplo do workflow esperado</summary>

   ```yaml
   name: Playwright Tests
   on:
     push:
     pull_request:
       branches: [main]
   jobs:
     test:
       runs-on: ubuntu-latest
       container:
         image: mcr.microsoft.com/playwright:v1.49.0-noble
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npx playwright test
         - uses: actions/upload-artifact@v4
           if: always()
           with:
             name: playwright-report
             path: playwright-report/
             retention-days: 7
   ```

   </details>

1. Faça commit e publique:

   ```bash
   git add .github/workflows/playwright.yml
   git commit -m "ci: roda testes Playwright no GitHub Actions"
   git push
   ```

1. Vá na aba **Actions** do seu repositório. Você verá o novo workflow **"Playwright Tests"** rodando — e passando 💚.

1. (Opcional) Abra um **Pull Request** da sua branch para `main`. O workflow vai rodar de novo no PR e proteger o `main` de regressões. Se quiser ainda mais ajuda, peça ao Copilot para gerar o **título e a descrição** do PR.

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- O arquivo precisa estar em **`.github/workflows/playwright.yml`**.
- Ele precisa conter **`npx playwright test`**.
- Se a primeira execução em CI demorar muito, é normal: a imagem Docker do Playwright é grande na primeira vez.

</details>
