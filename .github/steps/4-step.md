## Step 4: TDD — Implementar até o teste **PASSAR** 🟢

Agora a parte divertida: o teste é a sua especificação executável. Vamos pedir ao Copilot que escreva **o mínimo** de código para o teste do Step 3 ficar **verde**.

### 📖 Teoria rápida: por que essa ordem importa?

- O teste falhando garante que você **realmente precisa** do código novo (sem teste passando “de graça”).
- O Copilot tem agora um alvo objetivo: _“faça este teste passar”_. Isso reduz invenções e mantém o agente focado.
- Combinar **MCP + teste falhando** é poderoso: o agente pode rodar o teste, ver o erro, ajustar o HTML e rodar de novo até o verde.

### ⌨️ Atividade: Implementar a feature com o Copilot Agent

1. Abra o **Copilot Chat** em **Agent mode**.

1. Cole o prompt:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Faça o teste tests/newsletter.spec.js passar.
   >
   > - Edite public/index.html para adicionar um <form> com:
   >     • um <label for="email">Seu e-mail</label> e <input id="email" type="email" required />
   >     • um <button type="submit">Inscrever</button>
   > - Edite public/app.js para, no submit do form, mostrar o texto
   >   "Inscrição confirmada!" dentro de um elemento com role="status".
   > - NÃO altere o teste.
   > - Depois de aplicar as mudanças, rode `npx playwright test`
   >   e me mostre o resultado.
   > ```

1. Revise o `diff` que o Copilot propõe (em `public/index.html` e `public/app.js`) e clique em **Keep** quando estiver satisfeito.

1. Rode os testes localmente para confirmar o **GREEN**:

   ```bash
   npx playwright test
   ```

   Você deve ver `1 passed`. 🟢

1. (Opcional, mas recomendado) **Refatore** com o Copilot — peça para extrair a mensagem para uma constante, melhorar nomes, etc. Rode os testes de novo: precisam continuar verdes. Esse é o **R** do TDD (Refactor).

1. Faça commit e publique:

   ```bash
   git add public/index.html public/app.js
   git commit -m "feat: implementa formulario de newsletter (TDD GREEN)"
   git push
   ```

1. Aguarde a Mona verificar que o HTML agora tem o botão **Inscrever**. 👀

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- O arquivo `public/index.html` precisa conter as palavras **`Inscrever`** e **`<button`**.
- Se o teste continuar falhando, abra a página manualmente (`npm start` + porta 3000) e veja se o formulário aparece.
- Verifique se o servidor `npm start` está parado antes de rodar `npx playwright test` (o Playwright sobe o seu próprio).

</details>
