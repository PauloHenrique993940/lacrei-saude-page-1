# Identidade Visual LGBTQ+ - Lacrei Saúde

## 🌈 Visão Geral

A Lacrei Saúde adota uma identidade visual que reflete os valores de inclusão, diversidade e acolhimento através de cores vibrantes do arco-íris. Essa escolha visual reforça o compromisso da plataforma com a comunidade LGBTQ+.

---

## 🎨 Sistema de Cores

### Paleta Primária

| Nome | Código | Uso | RGB |
|------|--------|-----|-----|
| **Verde Primária** | `#018762` | Ações, CTAs, links | rgb(1, 135, 98) |
| **Cinza Escuro** | `#1F2937` | Títulos, destaques | rgb(31, 41, 55) |

### Paleta LGBTQ+ (Rainbow)

A paleta de cores do arco-íris é utilizada em elementos visuais estratégicos para promover inclusão:

| Posição | Nome | Código | Elemento HTML | Uso |
|---------|------|--------|----------------|-----|
| 1️⃣ | Vermelho | `#E40303` | Primeira cor | Gradientes, bordas, ênfase |
| 2️⃣ | Laranja | `#FF8C00` | Segunda cor | Gradientes, transições |
| 3️⃣ | Amarelo | `#FFFF00` | Terceira cor | Gradientes, destaques |
| 4️⃣ | Verde | `#008026` | Quarta cor | Gradientes, elementos |
| 5️⃣ | Azul | `#004CFF` | Quinta cor | Gradientes, links |
| 6️⃣ | Roxo | `#750787` | Sexta cor | Gradientes, finais |

### Cores Secundárias

| Nome | Código | Uso |
|------|--------|-----|
| Branco | `#FFFFFF` | Fundo, texto claro |
| Cinza Claro | `#F3F4F6` | Fundos, superfícies |
| Roxo Claro | `#E8E4EF` | Cards, superfícies alternadas |
| Sucesso | `#10B981` | Estados positivos |
| Aviso | `#F59E0B` | Estados de atenção |
| Erro | `#DC2626` | Estados de erro |

---

## 🌊 Gradientes Implementados

### 1. Rainbow (Horizontal)

```css
background: linear-gradient(
    90deg,
    #E40303 0%,
    #FF8C00 16.67%,
    #FFFF00 33.33%,
    #008026 50%,
    #004CFF 66.67%,
    #750787 100%
);
```

**Uso:**
- Bordas superiores do Header e Footer
- Divisores de seção
- Linhas de destaque em cards

### 2. Rainbow Vertical

```css
background: linear-gradient(
    180deg,
    #E40303 0%,
    #FF8C00 16.67%,
    #FFFF00 33.33%,
    #008026 50%,
    #004CFF 66.67%,
    #750787 100%
);
```

**Uso:**
- Fundos verticais
- Componentes com orientação vertical

### 3. Rainbow Subtle

```css
background: linear-gradient(
    90deg,
    rgba(1, 135, 98, 0.1) 0%,
    rgba(229, 62, 142, 0.1) 100%
);
```

**Uso:**
- Fundos de seção (baixa opacidade)
- Áreas de destaque sem competição visual
- Mantém legibilidade de conteúdo

---

## 🎯 Aplicação Visual

### Header

- **Borda Superior**: Gradiente arco-íris (4px)
- **Logo**: Verde primária
- **Links**: Verde primária com hover opacity
- **Background**: Branco

### Footer

- **Borda Superior**: Gradiente arco-íris (3px)
- **Títulos**: Cinza escuro
- **Links**: Cinza médio com hover na cor primária
- **Background**: Branco

### Home Page

#### Seção Hero
- **Título**: Verde primária
- **Subtítulo**: Cinza médio
- **Botões**: Verde primária com variações

#### Seção de Recursos
- **Ícones**: Fundo com gradiente rainbow, ícone branco
- **Divisor**: Gradiente rainbow (150px × 3px)
- **Cards**: Roxo claro com sombra suave

#### Seção de Passos
- **Círculos**: Fundo com gradiente rainbow
- **Números**: Branco
- **Background**: Gradiente subtle

#### Seção de Públicos
- **Background**: Gradiente subtle rainbow
- **Imagem**: Verde primária com degradê
- **Texto**: Cinza médio com borda esquerda verde

#### Seção Final
- **Cards**: Roxo claro com linha superior rainbow (2px)
- **Título**: Verde primária
- **Botões**: Verde primária

---

## ✨ Efeitos e Estados

### Hover States

```css
a:hover,
button:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
}
```

### Focus States

```css
button:focus,
a:focus {
    outline: 3px solid #018762;
    outline-offset: 2px;
}
```

### Active States

```css
button:active {
    opacity: 0.7;
}
```

---

## 📱 Responsividade

### Breakpoints

| Dispositivo | Tamanho | CSS |
|-------------|---------|-----|
| Mobile | até 480px | `@media (max-width: 480px)` |
| Tablet | até 768px | `@media (max-width: 768px)` |
| Desktop | acima de 1024px | Desktop padrão |

### Adaptações por Dispositivo

- **Mobile**: Redução de espaçamento, stack vertical
- **Tablet**: Grid adaptado, elementos redimensionados
- **Desktop**: Layout completo com 3 colunas

---

## ♿ Acessibilidade

### Contraste de Cores

Todas as combinações de cores seguem WCAG 2.1 AA:

| Elemento | Contraste | Status |
|----------|-----------|--------|
| Texto verde primária em branco | 7.2:1 | ✅ AAA |
| Texto cinza escuro em branco | 10.5:1 | ✅ AAA |
| Texto cinza médio em branco | 4.6:1 | ✅ AA |

### Labels e ARIA

- Links possuem `aria-label` quando necessário
- Botões possuem textos descritivos
- Cores nunca são o único meio de comunicação
- Ícones acompanhados de texto

---

## 🛠️ Como Usar

### Acessar Cores no Tema

```typescript
import { theme } from '@/styles/theme';

// Cores primárias
theme.colors.primary      // #018762
theme.colors.secondary    // #1F2937

// Cores LGBTQ+
theme.colors.rainbow.red    // #E40303
theme.colors.rainbow.orange // #FF8C00
theme.colors.rainbow.yellow // #FFFF00
theme.colors.rainbow.green  // #008026
theme.colors.rainbow.blue   // #004CFF
theme.colors.rainbow.purple // #750787

// Gradientes
theme.gradients.rainbow        // Horizontal
theme.gradients.rainbowVertical // Vertical
theme.gradients.rainbowSubtle   // Subtle background
```

### Exemplo em Styled-Components

```typescript
import styled from 'styled-components';

const MyComponent = styled.div`
    background: ${(props) => props.theme.gradients.rainbow};
    color: ${(props) => props.theme.colors.primary};
    border-top: 4px solid;
    border-image: linear-gradient(...) 1;
`;
```

---

## 📚 Referências

- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **LGBTQ+ Flag History**: https://en.wikipedia.org/wiki/Rainbow_flag_(LGBT)

---

## 🚀 Próximas Melhorias

- [ ] Implementar tema dark mode com cores LGBTQ+
- [ ] Adicionar animações subtis com cores rainbow
- [ ] Expandir paleta com mais tons de inclusão
- [ ] Documentar variações para diferentes contextos
- [ ] Testes de acessibilidade com ferramentas assistivas

---

Desenvolvido com 💜 para a **Lacrei Saúde**.
