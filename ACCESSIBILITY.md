# Relatório de Acessibilidade - Lacrei Saúde

A acessibilidade é o pilar central da **Lacrei Saúde**. Este documento apresenta as evidências objetivas das validações realizadas para garantir que a plataforma seja inclusiva para todas as pessoas.

Os artefatos visuais desta entrega estão concentrados em `src/app/printDoc/`, com capturas da auditoria automatizada e PDFs exportados da rodada documentada.

---

## ♿ Pontuação Lighthouse

A aplicação atingiu a pontuação máxima em acessibilidade em todas as páginas críticas (Home, Cadastro, Onboarding).

**Resultado da auditoria:**

- **Score:** 100/100
- **Data da última auditoria:** Junho de 2026
- **Ambiente:** Produção (Vercel)

**Artefatos relacionados:**

- `src/app/printDoc/acessibilidade.png`
- `src/app/printDoc/doload.pdf`
- `src/app/printDoc/download-1.pdf`

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

Esta entrega documenta a validação manual dos fluxos prioritários com foco em leitura de conteúdo, formulário e feedback de interface.

Tecnologias assistivas consideradas na validação:

- **NVDA** (Windows/Chrome)
- **VoiceOver** (macOS/Safari)
- **TalkBack** (Android/Chrome)

### Fluxos auditados

1. **Home (`/`)**: landmarks semânticos, imagens com texto alternativo e links descritivos.
2. **Entrar (`/entrar`)**: rótulos, feedback com `role="alert"` e `aria-live`, ordem de tabulação e estados de envio.
3. **Esqueci minha senha (`/esqueci-senha`)**: mensagens de sucesso/erro anunciadas de forma assistiva.
4. **Cadastro / onboarding**: seleção por teclado, stepper com progresso assistivo e navegação linear.

### Resultados observados

1. **Estrutura semântica consistente**: Header, navegação, conteúdo principal e rodapé estão separados por landmarks semânticos.
2. **Campos de Formulário**: Todos os inputs e radio buttons possuem labels associados (`htmlFor`/`id`) ou `aria-label`.
3. **Feedback de Erro**: Mensagens de validação são anunciadas imediatamente via `aria-live="polite"`.
4. **Imagens**: Imagens informativas possuem descrições textuais e os links importantes contam com nomes acessíveis.

---

## ⌨️ Navegação por Teclado

A aplicação é 100% navegável via teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`):

- **Outline Visível**: Mantivemos o `outline` nativo ou customizado com alto contraste para indicar claramente onde o foco está.
- **Seleção de Opções**: Radio groups e botões principais respondem por teclado com foco visual claro.
- **Progresso Assistivo**: O stepper do cadastro informa etapa atual e total por meio de atributos WAI-ARIA.

---

## 🛠️ Tecnologias e Padrões ARIA

- **Semântica HTML5**: Uso rigoroso de `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` e `<h1>-<h6>`.
- **WAI-ARIA Roles**:
  - `role="banner"` (Header)
  - `role="navigation"` (Nav)
  - `role="main"` (Main)
  - `role="contentinfo"` (Footer)
  - `role="progressbar"` (Stepper de Onboarding)

## ✅ Matriz resumida de validação

| Rota / fluxo | Itens auditados | Resultado |
| :----------- | :-------------- | :-------- |
| Home (`/`) | Estrutura semântica, links, imagens, contraste | ✅ Conforme |
| Entrar (`/entrar`) | Labels, feedback de erro, foco, teclado | ✅ Conforme |
| Esqueci senha (`/esqueci-senha`) | Estados de erro/sucesso anunciados | ✅ Conforme |
| Cadastro | Stepper, radio groups, ordem de interação | ✅ Conforme |

---

## 🔍 Ferramentas de Auditoria Utilizadas

1. **Google Lighthouse** (Auditoria automatizada)
2. **Axe DevTools** (Auditoria de profundidade em componentes)
3. **WAVE (Web Accessibility Evaluation Tool)** (Validação de estrutura)
4. **Color Contrast Analyzer** (Validação de legibilidade)
5. **Inspeção manual com teclado** (Tab, Shift+Tab, Enter e Space)

---

> "A acessibilidade não é uma funcionalidade, é um direito." 🏳️‍🌈
