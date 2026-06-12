# 🏳️‍🌈 Lacrei Saúde - Desafio Front-end

Aplicação desenvolvida como parte do desafio técnico para voluntariado na **Lacrei Saúde**. O projeto foi construído com foco em **acessibilidade**, **responsividade**, **performance** e **boas práticas de desenvolvimento**, utilizando tecnologias modernas do ecossistema React.

---

## 🔗 Links

- 🌐 **Aplicação em produção:**  
  https://lacrei-saude-desafio.vercel.app

- 📂 **Repositório GitHub:**  
  https://github.com/PauloHenrique993940/lacrei-saude-page-1

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** (App Router)
- **TypeScript**
- **Styled Components**
- **Jest**
- **React Testing Library**
- **Mock API**
- **Vercel**
- **Google Lighthouse**

---

## 📊 Qualidade da Aplicação

A aplicação foi otimizada para oferecer uma experiência moderna, acessível e performática.

### Resultados obtidos no Google Lighthouse

<p align="center">
<img width="870" src="https://github.com/user-attachments/assets/319b613c-0135-4fbb-822c-b3c34cdc7f25" />
</p>

| Métrica | Pontuação |
|-----------|----------:|
| ⚡ Performance | 96 |
| ♿ Acessibilidade | 100 |
| ✅ Boas práticas | 96 |
| 🔍 SEO | 100 |

### Principais otimizações realizadas

- Utilização do componente `Image` do Next.js para carregamento otimizado.
- Estrutura semântica com `<header>`, `<main>`, `<nav>` e `<footer>`.
- Implementação de atributos ARIA para melhorar a acessibilidade.
- Tipografia otimizada com `next/font`.
- Componentização e reutilização de código.
- Interface responsiva com abordagem **Mobile First**.
- Melhorias em SEO e indexação.

---

## 🛠️ Instalação

Clone o repositório:

```bash
git clone https://github.com/PauloHenrique993940/lacrei-saude-page-1.git
```

Entre na pasta do projeto:

```bash
cd lacrei-saude-page-1
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

---

## 🧪 Testes

Executar os testes unitários:

```bash
npm test
```

Gerar build de produção:

```bash
npm run build
```

Executar a aplicação em produção:

```bash
npm run start
```

---

## ✅ Funcionalidades Implementadas

- [x] Header e Footer personalizados.
- [x] Fluxo completo de onboarding.
- [x] Navegação entre telas.
- [x] Componentes reutilizáveis.
- [x] Interface responsiva (Mobile First).
- [x] Acessibilidade seguindo boas práticas.
- [x] SEO otimizado.
- [x] Performance superior a 90 no Lighthouse.
- [x] Testes unitários.
- [x] Integração com Mock API.
- [x] Deploy na Vercel.

---

## 📝 Jornada de Onboarding

A aplicação possui um fluxo composto por sete etapas:

1. Boas-vindas
2. Pronome
3. Etnia
4. Gênero
5. Sexualidade
6. Pessoa com deficiência (PCD)
7. Conclusão e confirmação do cadastro

---

## 💾 Simulação de API

Foi implementado um serviço em:

```text
src/services/api.ts
```

Responsável por:

- Simular chamadas assíncronas;
- Reproduzir tempo de resposta (loading);
- Persistir os dados do formulário durante a jornada de onboarding.

---

## 🔄 Estratégia de Rollback

### Vercel

A plataforma permite restaurar qualquer deploy anterior com apenas um clique, garantindo segurança e disponibilidade da aplicação.

### Git

Caso necessário, é possível reverter alterações utilizando:

```bash
git revert HEAD
git push origin main
```

---

## 🎨 Decisões Técnicas

### Design System

As cores foram baseadas na identidade visual da **Lacrei Saúde**, priorizando contraste e acessibilidade.

### Tipografia

Utilização da fonte **Geist**, integrada através do `next/font`, proporcionando melhor performance e legibilidade.

### Componentização

A interface foi construída com componentes reutilizáveis, facilitando manutenção e escalabilidade.

### Performance

- Lazy loading de imagens;
- Otimizações nativas do Next.js;
- Redução do tamanho do bundle;
- Carregamento eficiente dos recursos.

### Acessibilidade

- HTML semântico;
- Uso de atributos ARIA;
- Contraste adequado entre cores;
- Navegação compatível com teclado;
- Pontuação máxima em acessibilidade no Lighthouse.

---

## 📁 Estrutura do Projeto

```text
src
│
├── app
├── components
├── services
├── styles
├── tests
├── types
└── assets
```

---

## 📸 Preview

<p align="center">
<img src="https://github.com/user-attachments/assets/319b613c-0135-4fbb-822c-b3c34cdc7f25" width="850"/>
</p>

---

## 👨‍💻 Desenvolvedor

**Paulo Henrique Ferreira França**

- GitHub: https://github.com/PauloHenrique993940
- LinkedIn: https://linkedin.com/in/paulohenriquefranca

---

<p align="center">
Desenvolvido com ❤️ para a <strong>Lacrei Saúde</strong>.
</p>
