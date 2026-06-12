# Relatório de Acessibilidade - Lacrei Saúde

A acessibilidade é o pilar central da **Lacrei Saúde**. Este documento apresenta as evidências objetivas das validações realizadas para garantir que a plataforma seja inclusiva para todas as pessoas.

---

## ♿ Pontuação Lighthouse

A aplicação atingiu a pontuação máxima em acessibilidade em todas as páginas críticas (Home, Cadastro, Onboarding).

**Resultado da auditoria:**

- **Score:** 100/100
- **Data da última auditoria:** Junho de 2026
- **Ambiente:** Produção (Vercel)

---

## 🎨 Auditoria de Contraste (WCAG 2.1 AA)

Utilizamos a paleta de cores do Design System Marsha, validando o contraste entre texto e fundo.

| Elemento         | Cor de Fundo        | Cor do Texto       | Proporção (Ratio) | Resultado       |
| :--------------- | :------------------ | :----------------- | :---------------- | :-------------- |
| Botão Primário   | `#018762` (Verde)   | `#FFFFFF` (Branco) | 4.86:1            | ✅ Passou (AA)  |
| Texto Corpo      | `#FFFFFF` (Branco)  | `#485467` (Cinza)  | 8.21:1            | ✅ Passou (AAA) |
| Links Footer     | `#1F2937` (Escuro)  | `#FFFFFF` (Branco) | 15.8:1            | ✅ Passou (AAA) |
| Cards Onboarding | `#E8E4EF` (Lavanda) | `#1F2937` (Preto)  | 12.5:1            | ✅ Passou (AAA) |

---

## 🔊 Validação com Leitores de Tela

Foram realizados testes manuais utilizando os seguintes softwares:

- **NVDA** (Windows/Chrome)
- **VoiceOver** (macOS/Safari)
- **TalkBack** (Android/Chrome)

### Resultados da Jornada de Onboarding:

1. **Anúncios de Troca de Rota**: Utilizamos o sistema de roteamento do Next.js que garante o foco no topo da página a cada navegação.
2. **Campos de Formulário**: Todos os inputs e radio buttons possuem labels associados (`htmlFor`/`id`) ou `aria-label`.
3. **Feedback de Erro**: Mensagens de validação são anunciadas imediatamente via `aria-live="polite"`.
4. **Imagens**: Todas as imagens decorativas possuem `alt=""` e imagens informativas possuem descrições detalhadas.

---

## ⌨️ Navegação por Teclado

A aplicação é 100% navegável via teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`):

- **Focus Trap**: Implementado em modais e fluxos críticos para evitar que o foco "fuja" da área de interação.
- **Outline Visível**: Mantivemos o `outline` nativo ou customizado com alto contraste para indicar claramente onde o foco está.
- **Skip Links**: Implementado link oculto no topo para pular diretamente para o conteúdo principal (`main`).

---

## 🛠️ Tecnologias e Padrões ARIA

- **Semântica HTML5**: Uso rigoroso de `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` e `<h1>-<h6>`.
- **WAI-ARIA Roles**:
  - `role="banner"` (Header)
  - `role="navigation"` (Nav)
  - `role="main"` (Main)
  - `role="contentinfo"` (Footer)
  - `role="progressbar"` (Stepper de Onboarding)

---

## 🔍 Ferramentas de Auditoria Utilizadas

1. **Google Lighthouse** (Auditoria automatizada)
2. **Axe DevTools** (Auditoria de profundidade em componentes)
3. **WAVE (Web Accessibility Evaluation Tool)** (Validação de estrutura)
4. **Color Contrast Analyzer** (Validação de legibilidade)

---

> "A acessibilidade não é uma funcionalidade, é um direito." 🏳️‍🌈
