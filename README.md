# 🏳️‍🌈 Lacrei Saúde - Desafio Front-end

Aplicação desenvolvida como parte do desafio técnico para voluntariado na **Lacrei Saúde**. O projeto foi construído com foco em **acessibilidade**, **responsividade**, **performance** e **boas práticas de desenvolvimento**, utilizando tecnologias modernas do ecossistema React.

<<<<<<< HEAD
## Links Úteis

- **Deploy na Vercel**: [https://lacrei-saude-desafio.vercel.app](https://lacrei-saude-desafio.vercel.app)
- **Repositório GitHub**: [https://github.com/PauloHenrique993940/lacrei-saude-page-1.git](https://github.com/PauloHenrique993940/lacrei-saude-page-1.git)

## 🚀 Tecnologias Utilizadas

- **Next.js 15+** (App Router)
- **TypeScript** para tipagem estática
- **Styled-Components** para estilização (CSS-in-JS)
- **Jest** e **React Testing Library** para testes unitários
- **Lighthouse** para auditoria de qualidade

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para executar a aplicação em sua máquina:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/PauloHenrique993940/lacrei-saude-page-1.git
   cd lacrei-saude-page-1
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

4. **Execute os testes unitários**:

   ```bash
   npm test
   ```

5. **Build e Deploy**:
   Para gerar a versão de produção:
   ```bash
   npm run build
   npm run start
   ```

## ⚡ Desempenho Otimizado

A aplicação implementa as melhores práticas de performance:

- **Code Splitting**: Cada rota carrega seu próprio bundle
- **Image Optimization**: Formatos AVIF/WebP reduzem tamanho em até 50%
- **React.memo**: Componentes memoizados reduzem re-renders
- **Lazy Loading**: Componentes e imagens carregam sob demanda
- **Cache HTTP**: Assets imutáveis com cache de 1 ano
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Resultados esperados após otimizações:**
- Bundle inicial: 28% menor
- LCP: 44% mais rápido
- Interatividade: 57% melhor
- Estabilidade visual: 67% melhor

Consulte [PERFORMANCE.md](PERFORMANCE.md) para detalhes técnicos.

## 📋 Requisitos Implementados

- [x] **Header e Footer** personalizados seguindo a identidade visual (Marsha Design System).
- [x] **Fluxo de Roteamento Completo**: Jornada de onboarding detalhada com 7 telas funcionais.
- [x] **Três ou mais botões interativos** com navegação e feedback visual.
- [x] **Responsividade Impecável**: Grid de 12 colunas e adaptatividade mobile-first.
- [x] **Acessibilidade**: Nota superior a 90 no Lighthouse, uso de ARIA, semântica e contraste.
- [x] **Performance**: Otimização de bundle e carregamento assíncrono.
- [x] **Next.js + TypeScript + Styled-Components**: Stack tecnológica completa e tipada.
- [x] **Testes Unitários**: Cobertura de componentes críticos (Button, Header, Footer).
- [x] **Mock de Integração com API**: Simulação de persistência de dados de onboarding.
- [x] **Deploy e Rollback**: Documentação e link funcional.

## 🛠️ Jornada do Usuário (Onboarding)

A aplicação conta com um fluxo completo de cadastro para pessoas usuárias, incluindo:

1. **Onboarding**: Boas-vindas e explicação do processo.
2. **Pronome**: Identificação de tratamento.
3. **Etnia**: Identificação de cor/unidade.
4. **Gênero**: Identificação de identidade.
5. **Sexualidade**: Orientação sexual.
6. **Deficiência**: Identificação de PCD.
7. **Conclusão**: Feedback de sucesso com integração via Mock API.

## 💾 Integração de Dados (Mock API)

Para demonstrar domínio no tratamento de dados e fluxos assíncronos, implementamos um serviço de Mock API em `src/services/api.ts`:

- **Simulação de Latência**: Delay artificial para demonstrar estados de "Loading".
- **Persistência Simulada**: Tratamento de objetos complexos de dados do formulário.

## 🔄 Proposta de Rollback e Manutenção

Para garantir a estabilidade em produção, adotamos as seguintes estratégias de rollback:

1. **Rollback via Vercel (Recomendado)**: No dashboard da Vercel, é possível reverter para qualquer deploy anterior com um único clique. Como cada deploy é imutável, a reversão é instantânea e segura.
2. **Rollback Manual via Git**: Caso necessário, o comando abaixo reverte as alterações do último commit e prepara o repositório para um novo deploy:
   ```bash
   git revert HEAD
   git push origin main
   ```

## 📚 Documentação de Qualidade

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guia completo de contribuição com checklist de qualidade para design, documentação, acessibilidade e testes
- **[COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md)** - Padrão de componentes reutilizáveis, modo de uso e boas práticas
- **[DESIGN_IDENTITY.md](DESIGN_IDENTITY.md)** - Sistema de design com paleta LGBTQ+, cores, gradientes e aplicações visuais
- **[ROUTES_NOMENCLATURE.md](ROUTES_NOMENCLATURE.md)** - Mapeamento de rotas, convenções de nomenclatura e estrutura do projeto
- **[PERFORMANCE.md](PERFORMANCE.md)** - Guia de otimizações de desempenho (Core Web Vitals, lazy loading, code splitting)
- **[CHANGELOG.md](CHANGELOG.md)** - Histórico de releases com versionamento semântico (v1.x.x)

## ✅ Páginas Informativas

Adicionadas 3 novas páginas focadas em informações importantes:

- **[/seguranca](http://localhost:3000/seguranca)** - Segurança e Privacidade
  - Proteção de dados conforme LGPD
  - Boas práticas de autenticação
  - Procedimentos de relato de incidente

- **[/acessibilidade](http://localhost:3000/acessibilidade)** - Compromisso com Inclusão
  - Navegação por teclado
  - Conteúdo legível e com contraste adequado
  - Semântica e tecnologias assistivas
  - Melhoria contínua baseada em feedback

- **[/duvidas-frequentes](http://localhost:3000/duvidas-frequentes)** - Perguntas Frequentes
  - Como criar uma conta
  - Busca de profissionais
  - Proteção de dados na plataforma
  - Recuperação de senha

## 🎨 Justificativas Visuais e Técnicas

- **Identidade Visual LGBTQ+**: Implementamos uma paleta de cores que reflete o arco-íris, com cores primárias vibrantes em bordas, divisores e componentes interativos. Essa escolha promove inclusão e representatividade visual da plataforma.
  - 🔴 Vermelho, 🟠 Laranja, 🟡 Amarelo, 🟢 Verde, 🔵 Azul, 🟣 Roxo
  - Gradientes rainbow em Header, Footer, divisores e ícones

- **Paleta Harmoniosa**: Mantemos a cor primária verde (`#018762`) como base inclusiva, complementada por cores secundárias que não competem visualmente mas reforçam a mensagem de acolhimento.

- **Tipografia**: Utilizamos a fonte **Nunito** (peso 700) integrada via `next/font` para garantir performance e legibilidade, mantendo o aspecto moderno e limpo solicitado.

- **Micro-interações**: Botões possuem estados de `:hover` e `:active` com efeitos sutis para fornecer feedback visual sem comprometer a acessibilidade.

- **Performance de Imagens**: Todas as imagens utilizam o componente `Image` do Next.js com redimensionamento automático e `priority` para elementos acima da dobra.

- **Acessibilidade Semântica**: Footer, Header e todas as páginas utilizam tags semânticas (`<nav>`, `<footer>`, `<header>`, `<main>`) corretamente, além de `aria-label` em links interativos. Contrastes e cores seguem WCAG 2.1 AA standards.

---

Desenvolvido com 💙 para a **Lacrei Saúde**.
=======
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
>>>>>>> 5549c532b77e74d01df3f4ca46c19b25fe7bb1bb
