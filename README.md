# Lacrei Saúde - Desafio Front-end

Este projeto foi desenvolvido como parte do desafio técnico para voluntariado na **Lacrei Saúde**. A aplicação é uma plataforma interativa focada em acessibilidade, responsividade e performance, utilizando as tecnologias mais modernas do ecossistema React.

## � Links Úteis
- **Deploy na Vercel**: [https://lacrei-saude-desafio.vercel.app](https://lacrei-saude-desafio.vercel.app)
- **Repositório GitHub**: [https://github.com/seu-usuario/lacrei-saude](https://github.com/seu-usuario/lacrei-saude)

## �🚀 Tecnologias Utilizadas

- **Next.js 15+** (App Router)
- **TypeScript** para tipagem estática
- **Styled-Components** para estilização (CSS-in-JS)
- **Jest** e **React Testing Library** para testes unitários
- **Lighthouse** para auditoria de qualidade

## �️ Como rodar o projeto localmente

Siga os passos abaixo para executar a aplicação em sua máquina:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/lacrei-saude.git
   cd lacrei-saude
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

## �📋 Requisitos Implementados

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

## 🎨 Justificativas Visuais e Técnicas

- **Marsha Design System**: Implementamos as cores `#018762` (Primária) e `#2D2D2D` (Secundária) conforme o guia de estilo.
- **Tipografia**: Utilizamos a fonte **Geist** (Sans e Mono) integrada via `next/font` para garantir performance e legibilidade, mantendo o aspecto moderno e limpo solicitado.
- **Micro-interações**: Botões possuem estados de `:hover` e `:active` sutis para fornecer feedback visual sem comprometer a acessibilidade.
- **Performance de Imagens**: Todas as imagens (como a `fundolacrei.png` no Onboarding) utilizam o componente `Image` do Next.js com redimensionamento automático e `priority` para os elementos acima da dobra.
- **Acessibilidade Semântica**: O Footer e Header utilizam as tags `<nav>`, `<footer>` e `<header>` corretamente, além de `aria-label` em links e grupos de ícones sociais.

---
Desenvolvido com 💙 para a **Lacrei Saúde**.
