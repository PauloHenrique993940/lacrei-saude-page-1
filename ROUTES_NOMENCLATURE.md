# Padrão de Rotas e Nomenclatura - Lacrei Saúde

## 📍 Mapeamento de Rotas

### Jornada Institucional (I - Início)

| Rota | Nome | Descrição | Status |
|------|------|-----------|--------|
| `/` | `1I/Início` | Home principal com apresentação | ✅ Implementado |
| `/quem-somos` | `2I/Quem Somos` | Informações sobre a Lacrei Saúde | ✅ Implementado |
| `/profissional` | Página Profissional | Informações para profissionais de saúde | ✅ Implementado |

### Jornada de Segurança e Informação (SI - Segurança & Informação)

| Rota | Nome | Descrição | Status |
|------|------|-----------|--------|
| `/seguranca` | `3I/Segurança` | Informações de segurança e privacidade | ✅ Implementado |
| `/acessibilidade` | `4I/Acessibilidade` | Compromisso com inclusão digital | ✅ Implementado |
| `/duvidas-frequentes` | `5I/Dúvidas Frequentes` | FAQ da plataforma | ✅ Implementado |
| `/ajuda` | Ajuda Geral | Central de suporte e dúvidas | ✅ Implementado |

### Jornada de Autenticação (Auth)

| Rota | Nome | Descrição | Status |
|------|------|-----------|--------|
| `/entrar` | Login | Página de entrada na plataforma | ✅ Implementado |
| `/criar-conta` | Cadastro | Criação de nova conta | ✅ Implementado |
| `/esqueci-senha` | Recuperação | Recuperação de senha | ✅ Implementado |

### Jornada de Cadastro (PO - Pessoa/Onboarding)

| Rota | Nome | Descrição | Status |
|------|------|-----------|--------|
| `/cadastro/onboarding` | `1PO/Onboarding` | Boas-vindas e orientação | ✅ Implementado |
| `/cadastro/pronome` | `2PO/Pronome` | Seleção de pronome de tratamento | ✅ Implementado |
| `/cadastro/genero` | `3PO/Gênero` | Identificação de identidade de gênero | ✅ Implementado |
| `/cadastro/sexualidade` | `4PO/Sexualidade` | Identificação de orientação sexual | ✅ Implementado |
| `/cadastro/etnia` | `5PO/Etnia` | Identificação de cor/etnia | ✅ Implementado |
| `/cadastro/deficiencia` | `6PO/Deficiência` | Identificação de deficiência | ✅ Implementado |
| `/cadastro/concluido` | `7PO/Conclusão` | Finalização do cadastro | ✅ Implementado |

---

## 🏗️ Estrutura de Pastas

```
src/
├── app/
│   ├── page.tsx                    # 1I/Início (Home)
│   ├── quem-somos/
│   │   └── page.tsx                # 2I/Quem Somos
│   ├── profissional/
│   │   └── page.tsx                # Página Profissional
│   ├── seguranca/
│   │   └── page.tsx                # 3I/Segurança
│   ├── acessibilidade/
│   │   └── page.tsx                # 4I/Acessibilidade
│   ├── duvidas-frequentes/
│   │   └── page.tsx                # 5I/Dúvidas Frequentes
│   ├── ajuda/
│   │   └── page.tsx                # Ajuda Geral
│   ├── entrar/
│   │   └── page.tsx                # Login
│   ├── criar-conta/
│   │   └── page.tsx                # Cadastro
│   ├── esqueci-senha/
│   │   └── page.tsx                # Recuperação
│   ├── cadastro/
│   │   ├── onboarding/
│   │   │   └── page.tsx            # 1PO/Onboarding
│   │   ├── pronome/
│   │   │   └── page.tsx            # 2PO/Pronome
│   │   ├── genero/
│   │   │   └── page.tsx            # 3PO/Gênero
│   │   ├── sexualidade/
│   │   │   └── page.tsx            # 4PO/Sexualidade
│   │   ├── etnia/
│   │   │   └── page.tsx            # 5PO/Etnia
│   │   ├── deficiencia/
│   │   │   └── page.tsx            # 6PO/Deficiência
│   │   └── concluido/
│   │       └── page.tsx            # 7PO/Conclusão
│   └── assets/
│       └── (imagens e ícones)
│
├── components/
│   ├── Button/
│   │   ├── index.tsx
│   │   ├── Button.test.tsx
│   │   └── README.md
│   ├── Header/
│   │   ├── index.tsx
│   │   ├── Header.test.tsx
│   │   └── README.md
│   ├── Footer/
│   │   ├── index.tsx
│   │   ├── Footer.test.tsx
│   │   └── README.md
│   ├── RadioGroup/
│   │   └── index.tsx
│   └── Stepper/
│       └── index.tsx
│
├── providers/
│   ├── index.tsx
│   ├── AuthContext.tsx
│   └── OnboardingContext.tsx
│
├── services/
│   └── api.ts
│
├── styles/
│   ├── GlobalStyle.ts
│   ├── theme.ts
│   └── styled.d.ts
│
└── types/
    └── (tipos TypeScript)
```

---

## 🎯 Convenções de Nomenclatura

### Componentes

- **PascalCase** para nomes de componentes: `Button`, `Header`, `Footer`
- Arquivos: `index.tsx` para exportação, `ComponentName.tsx` para implementação
- Testes: `ComponentName.test.tsx`

### Páginas/Rotas

- **kebab-case** para URLs: `/quem-somos`, `/cadastro/onboarding`
- **Nomenclatura semântica**: rotas devem refletir conteúdo (`/seguranca` não `/security`)
- **Organização hierárquica**: usar pastas para fluxos (`/cadastro/...`)

### Variáveis e Funções

- **camelCase** para variáveis e funções: `handleSubmit`, `userData`
- **UPPERCASE** para constantes: `API_BASE_URL`, `STORAGE_KEY`

### Estilos

- **$prefixo** para styled-props transientes (evitam avisos): `$variant`, `$isActive`
- **Componentes nomeados semanticamente**: `MainContainer`, `HeroSection`, `CardWrapper`

---

## 📏 Breakpoints Padrão

```typescript
const theme = {
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
};
```

**Uso em Media Queries:**

```typescript
const Content = styled.div`
  padding: 4rem 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 2rem 1rem;
  }
`;
```

---

## 🎨 Paleta de Cores

```typescript
const colors = {
  primary: '#018762',        // Verde (CTA, links)
  secondary: '#1F2937',      // Cinza escuro (títulos)
  text: '#485467',           // Cinza médio (corpo de texto)
  white: '#FFFFFF',          // Branco
  background: '#F3F4F6',     // Cinza claro (fundo)
  surface: '#E8E4EF',        // Roxo claro (cards)
  border: '#D5DBE3',         // Cinza borderline
  error: '#DC2626',          // Vermelho (erros)
};
```

---

## ✅ Checklist de Nomenclatura para Nova Rota

Ao adicionar uma nova página/rota, certifique-se de:

- [ ] Nome da rota em **kebab-case**: `/minha-nova-rota`
- [ ] Pasta organizada hierarquicamente se parte de um fluxo
- [ ] Arquivo `page.tsx` dentro da pasta
- [ ] Exportação default de um componente React
- [ ] Componente "use client" se usar hooks
- [ ] Inclui `Header` e `Footer`
- [ ] Estilos com `styled-components`
- [ ] Props tipadas com TypeScript
- [ ] Responsivo (testado em mobile, tablet, desktop)
- [ ] Acessível (contraste, navegação por teclado, ARIA)
- [ ] Atualizar este documento com a nova rota
- [ ] Atualizar links no Footer/Header se necessário
- [ ] Adicionar entrada no CHANGELOG.md

---

## 🔗 Fluxos de Navegação

### Fluxo de Usuário Paciente

```
Home (1I) → Criar Conta → Onboarding (1PO) 
→ Pronome (2PO) → Gênero (3PO) → Sexualidade (4PO) 
→ Etnia (5PO) → Deficiência (6PO) → Conclusão (7PO)
```

### Fluxo de Informação

```
Home (1I) 
├─ Quem Somos (2I)
├─ Segurança (3I)
├─ Acessibilidade (4I)
├─ Dúvidas Frequentes (5I)
└─ Ajuda
```

### Fluxo de Autenticação

```
Entrar → [Login bem-sucedido?]
├─ Sim → Home autenticado
└─ Não → Criar Conta → Onboarding
```

---

## 🌈 Paleta de Cores - Identidade Visual LGBTQ+

A Lacrei Saúde adota uma paleta de cores que reflete a identidade visual LGBTQ+, promovendo inclusão e representatividade através do design.

### Cores Primárias

| Cor | Código | Uso |
| --- | ------ | --- |
| Verde (Primária) | `#018762` | Ações, links, elementos principais |
| Cinza Escuro (Secundária) | `#1F2937` | Títulos e textos destacados |

### Cores do Arco-Íris (Rainbow)

| Cor | Código | Elemento | Uso |
| --- | ------ | -------- | --- |
| 🔴 Vermelho | `#E40303` | Primeira cor do arco-íris | Gradientes, ênfase |
| 🟠 Laranja | `#FF8C00` | Segunda cor | Gradientes, ênfase |
| 🟡 Amarelo | `#FFFF00` | Terceira cor | Gradientes, ênfase |
| 🟢 Verde | `#008026` | Quarta cor | Gradientes, ênfase |
| 🔵 Azul | `#004CFF` | Quinta cor | Gradientes, ênfase |
| 🟣 Roxo | `#750787` | Sexta cor | Gradientes, ênfase |

### Gradientes Implementados

- **Rainbow**: Gradiente horizontal de todas as cores (bordas, divisores)
- **Rainbow Vertical**: Para layouts com direcionamento vertical
- **Rainbow Subtle**: Versão com baixa opacidade para fundos

### Elementos Visuais com Identidade LGBTQ+

| Elemento | Estilo | Localização |
| -------- | ------ | ----------- |
| Borda Superior do Header | Degradê arco-íris | `src/components/Header` |
| Borda Superior do Footer | Degradê arco-íris | `src/components/Footer` |
| Divisores de Seção | Gradiente rainbow | Página Home |
| Ícones de Recursos | Fundo gradient + ícone | Cards de recursos |
| Círculos de Passos | Fundo gradient + número | Seção de passos |
| Fundos de Seção | Gradientes subtis | Áreas alternadas |
| Cards Finais | Linha superior rainbow | FinalCard (Home) |

### Uso na Prática

```typescript
// Accessar cores LGBTQ+ no tema
theme.colors.rainbow.red      // #E40303
theme.colors.rainbow.orange   // #FF8C00
theme.colors.rainbow.yellow   // #FFFF00
theme.colors.rainbow.green    // #008026
theme.colors.rainbow.blue     // #004CFF
theme.colors.rainbow.purple   // #750787

// Usar gradientes
theme.gradients.rainbow        // Horizontal
theme.gradients.rainbowVertical // Vertical
theme.gradients.rainbowSubtle   // Subtle background
```

---

## 📖 Próximos Passos

- [ ] Implementar fluxo de profissional (1PP/Onboarding Profissional, etc.)
- [ ] Adicionar páginas de erro (404, 500)
- [ ] Criar rota de dashboard para usuários autenticados
- [ ] Implementar fluxos alternativos (variações de cadastro)
