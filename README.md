# 🏳️‍🌈 Lacrei Saúde - Desafio Front-end

Aplicação desenvolvida como parte do desafio técnico para voluntariado na **Lacrei Saúde**. O projeto foi construído com foco em **acessibilidade**, **responsividade**, **performance** e **boas práticas de desenvolvimento**, utilizando tecnologias modernas do ecossistema React.

---

## 📖 Sumário

1.  [Visão Geral](#-visão-geral)
2.  [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
3.  [📁 Estrutura de Pastas](#-estrutura-de-pastas)
4.  [🛠️ Instalação e Execução](#-instalação-e-execução)
5.  [🌟 Funcionalidades e Jornadas](#-funcionalidades-e-jornadas)
6.  [🎨 Identidade Visual (Design System)](#-identidade-visual-design-system)
7.  [🏗️ Arquitetura e Decisões Técnicas](#-arquitetura-e-decisões-técnicas)
8.  [♿ Acessibilidade e Inclusão](#-acessibilidade-e-inclusão)
9.  [⚡ Performance e Otimização](#-performance-e-otimização)
10. [🧪 Testes e Qualidade](#-testes-e-qualidade)
11. [🚀 Deploy e Manutenção](#-deploy-e-manutenção)
12. [🤝 Contribuição](#-contribuição)

---

## 🔍 Visão Geral

A **Lacrei Saúde** conecta pessoas da comunidade LGBTQIAPN+ com profissionais de saúde comprometidos em oferecer um atendimento seguro, inclusivo e respeitoso. Este projeto representa a interface front-end focada na jornada de onboarding e informacional da plataforma.

- **Deploy**: [https://lacrei-saude-desafio.vercel.app](https://lacrei-saude-desafio.vercel.app)
- **Repositório**: [https://github.com/PauloHenrique993940/lacrei-saude-page-1](https://github.com/PauloHenrique993940/lacrei-saude-page-1)

---

## 🚀 Tecnologias Utilizadas

- **Core**: Next.js 15+ (App Router), React 19, TypeScript.
- **Estilização**: Styled-Components (CSS-in-JS).
- **Qualidade**: Jest, React Testing Library.
- **Otimização**: Google Lighthouse, Next/Font, Next/Image.
- **Deploy**: Vercel.

---

## 📁 Estrutura de Pastas

```text
src/
├── app/               # Rotas e páginas (Next.js App Router)
│   ├── cadastro/      # Fluxo de onboarding (7 etapas)
│   ├── components/    # Componentes globais (Header, Footer, Button)
│   ├── services/      # Integrações e Mock API
│   ├── styles/        # Tema e Estilos Globais
│   └── (outras páginas institucionais)
```

---

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (v18+)
- NPM ou Yarn

### Passos
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/PauloHenrique993940/lacrei-saude-page-1.git
   cd lacrei-saude-page-1
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Execute em modo desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000).

---

## 🌟 Funcionalidades e Jornadas

### 1. Jornada Institucional
- **Home (`/`)**: Apresentação da proposta Lacrei Saúde.
- **Quem Somos (`/quem-somos`)**: Missão, visão e valores.
- **Segurança (`/seguranca`)**: Políticas de privacidade e proteção de dados (LGPD).
- **Acessibilidade (`/acessibilidade`)**: Recursos de inclusão digital.

### 2. Fluxo de Onboarding (PO)
Fluxo gamificado e semântico composto por 7 etapas:
1. `onboarding`: Boas-vindas.
2. `pronome`: Identificação de tratamento.
3. `genero`: Identidade de gênero.
4. `sexualidade`: Orientação sexual.
5. `etnia`: Identificação étnico-racial.
6. `deficiencia`: Identificação PCD.
7. `concluido`: Sucesso com integração Mock API.

---

## 🎨 Identidade Visual (Design System)

Baseada no **Design System Marsha**, a interface utiliza uma paleta que celebra a diversidade:
- **Cor Primária**: Verde Lacrei (`#018762`) para ações e acessibilidade.
- **Gradiente Rainbow**: Implementado em bordas e divisores para reforçar a identidade LGBTQ+.
- **Tipografia**: Nunito (peso 700) para máxima legibilidade.

---

## 🏗️ Arquitetura e Decisões Técnicas

- **Componentização**: Reuso estrito de componentes como `Button`, `RadioGroup` e `Stepper`.
- **Atomic Design**: Organização baseada em complexidade crescente.
- **Mock API**: Simulação de latência e persistência em `src/services/api.ts` para demonstrar resiliência da UI.
- **Styled Props**: Uso de prefixo `$` (transient props) para evitar vazamento de estilos para o DOM.

---

## ♿ Acessibilidade e Inclusão
**Score Lighthouse: 100/100**

- **Semântica HTML5**: Uso rigoroso de tags como `<main>`, `<nav>`, `<footer>`.
- **WAI-ARIA**: Atributos `aria-label`, `aria-live` e `roles` em componentes interativos.
- **Contraste**: Validado conforme WCAG 2.1 AA/AAA.
- **Navegação**: 100% acessível via teclado e testada com leitores de tela (NVDA/VoiceOver).

---

## ⚡ Performance e Otimização
**Score Lighthouse: >85%**

- **Imagens**: Uso de `next/image` com formatos AVIF/WebP e `sizes` responsivos.
- **Fonts**: Carregamento otimizado via `next/font/google` para evitar CLS.
- **Bundle**: Code-splitting automático por rota.

---

## 🧪 Testes e Qualidade

Execução de testes unitários em componentes críticos:
```bash
npm test
```
- **Jest**: Runner de testes.
- **React Testing Library**: Foco em testes focados no comportamento do usuário.

---

## 🚀 Deploy e Manutenção

- **Plataforma**: Vercel para deploys contínuos e imutáveis.
- **Rollback**: Capacidade de reversão instantânea via dashboard Vercel ou comando git:
  ```bash
  git revert HEAD
  git push origin main
  ```

---

## 🤝 Contribuição

Para garantir a qualidade, siga o checklist:
1. Validar contraste de cores (mínimo 4.5:1).
2. Garantir navegação via teclado.
3. Seguir padrão de nomenclatura (PascalCase para componentes).
4. Rodar `npm test` antes de cada submissão.

---

Desenvolvido com 💙 para a **Lacrei Saúde**.

