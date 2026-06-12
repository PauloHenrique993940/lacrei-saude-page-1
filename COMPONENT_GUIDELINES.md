# Guia de Componentes - Lacrei Saúde

## Estrutura de Componentes

Todos os componentes devem seguir a estrutura padronizada:

```
src/components/
├── ComponentName/
│   ├── index.tsx          # Exportação principal
│   ├── ComponentName.tsx   # Implementação
│   ├── ComponentName.test.tsx # Testes
│   └── README.md          # Documentação
```

---

## Modo de Uso

### Sobre o Componente

No contexto da informática, um ícone é uma representação gráfica esquemática que se utiliza para identificar programas (software) ou diversas funções que se podem abrir com um computador ou em outro dispositivo ou aparelho. Estes pictogramas digitais facilitam o uso dos equipamentos tecnológicos.

### Quando Usar

Sempre que necessário facilitar o entendimento do usuário e preferencialmente combine os ícones com texto. Mesmo para ícones universais, inclua um texto e geralmente mais seguro.

### Regras de Aplicação

- Escolha utilizar o Material Symbols do Google como ícones padrão para uma maior consistência
- O peso dos ícones deve ser de 400
- Escolha ícones familiares, esquisitos primeiramente e familiarize com o que está sendo usado em todas as plataformas do mesmo segmento

---

## Padrão de Componentes Reutilizáveis

### Button

Componente de botão com variantes de estilo e estados.

**Variantes:**
- `primary` (padrão) - Botão de ação principal
- `secondary` - Botão de ação secundária (outline)
- `disabled` - Estado desabilitado

**Props:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  $variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}
```

### Header

Componente de cabeçalho com navegação e autenticação.

**Características:**
- Link para Home (Lacrei Saúde)
- Navegação com "Quem Somos" e "Ajuda"
- Indicador de autenticação (Login/Logout)
- Responsivo para dispositivos móveis

### Footer

Componente de rodapé com navegação estruturada.

**Seções:**
- Lacrei Saúde (Logo e redes sociais)
- Lacrei Saúde (Links institucionais)
- Saúde (Links de serviços)
- Segurança e Privacidade (Links de políticas e páginas informativas)

---

## Checklist de Implementação

Antes de considerar um componente pronto:

### Design
- [ ] Componente segue a paleta de cores do tema
- [ ] Tipografia aplicada conforme padrão (Nunito com peso 700)
- [ ] Espaçamento e padding consistentes
- [ ] Estados (hover, focus, active, disabled) definidos
- [ ] Responsividade testada

### Código
- [ ] Componente exportado corretamente no index.tsx
- [ ] Props tipadas com TypeScript
- [ ] Sem warnings no console
- [ ] Sem linters errors
- [ ] Segue padrão do projeto

### Acessibilidade
- [ ] Contraste de cores ≥ 4.5:1
- [ ] Navegação por teclado funcional
- [ ] ARIA labels onde necessário
- [ ] Semântica HTML correta

### Testes
- [ ] Teste unitário escrito
- [ ] Snapshot test (se aplicável)
- [ ] Todos os testes passando
- [ ] Cobertura ≥ 80%

### Documentação
- [ ] README.md criado com exemplos
- [ ] Props documentadas
- [ ] Estados documentados
- [ ] Exemplos de uso inclusos

---

## Exemplo de Componente

### Button Component

```typescript
// src/components/Button/index.tsx
'use client';

import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  $variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;

  ${(props) => {
    const colors = props.theme?.colors || {
      white: '#FFFFFF',
      primary: '#018762',
    };

    switch (props.$variant) {
      case 'secondary':
        return `
          background-color: transparent;
          color: ${colors.primary};
          border: 1px solid ${colors.primary};
          
          &:hover:not(:disabled) {
            background-color: ${colors.primary};
            color: ${colors.white};
          }
        `;

      case 'primary':
      default:
        return `
          background-color: ${colors.primary};
          color: ${colors.white};
          box-shadow: 0px 4px 12px rgba(1, 135, 98, 0.24);
          border: 1px solid ${colors.primary};
          
          &:hover:not(:disabled) {
            opacity: 0.9;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme?.colors?.primary || '#018762'};
    outline-offset: 2px;
  }
`;
```

### Button Test

```typescript
// src/components/Button/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from './index';
import { theme } from '@/styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Button Component', () => {
  it('renders button with text', () => {
    renderWithTheme(<Button>Clique aqui</Button>);
    expect(screen.getByText('Clique aqui')).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    const { container } = renderWithTheme(<Button>Primary</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveStyle('background-color: #018762');
  });

  it('applies secondary variant', () => {
    const { container } = renderWithTheme(
      <Button $variant="secondary">Secondary</Button>
    );
    const button = container.querySelector('button');
    expect(button).toHaveStyle('background-color: transparent');
  });

  it('disables button when disabled prop is true', () => {
    renderWithTheme(<Button disabled>Desabilitado</Button>);
    expect(screen.getByText('Desabilitado')).toBeDisabled();
  });
});
```

---

## Boas Práticas

1. **Reutilização** - Sempre procure reutilizar componentes existentes antes de criar novos
2. **Responsividade** - Teste em diferentes tamanhos de tela durante o desenvolvimento
3. **Performance** - Use `React.memo` para componentes que recebem muitas props
4. **Acessibilidade** - Teste com leitores de tela e navegação por teclado
5. **Documentação** - Mantenha a documentação atualizada com o código
6. **Testes** - Escreva testes para novos componentes antes de fazer o merge

---

## Recursos

- [Styled Components Docs](https://styled-components.com/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design](https://m3.material.io/)
