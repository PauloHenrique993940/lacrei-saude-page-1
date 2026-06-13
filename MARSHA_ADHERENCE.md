# Aderência ao Guia de Estilo Marsha P. Johnson

Este documento explica como o projeto aplicou o guia visual Marsha P. Johnson na implementação do desafio front-end.

## Escopo da aderência

A proposta desta entrega foi seguir o guia como **referência de linguagem visual, tokens e comportamento de interface**, sem reproduzir integralmente uma biblioteca oficial de componentes.

Os pontos priorizados foram:

- consistência de cor e contraste;
- tipografia legível e hierarquia clara;
- botões e chamadas principais com destaque visual coerente;
- superfícies, cartões e estados com aparência unificada;
- experiência compatível com acessibilidade e responsividade.

## Como a aderência foi aplicada

| Diretriz | Aplicação no projeto |
| :------- | :------------------- |
| Paleta principal | Tokens centralizados em `src/styles/theme.ts`, com destaque para o verde principal `#018762`, tons neutros e cores de estado. |
| Tipografia | Uso de Nunito via `next/font/google`, aplicada globalmente para manter legibilidade e consistência visual. |
| Estados de interface | Hover, pressed, erro, sucesso, warning e info definidos no tema para reaproveitamento entre componentes. |
| Componentização | Header, Footer, Button, RadioGroup e Stepper foram construídos com Styled Components para reaproveitamento e coerência visual. |
| Superfícies e bordas | Cartões, formulários e seções utilizam bordas arredondadas, sombras leves e contraste alinhado à proposta da marca. |
| Jornada principal | Home, login, recuperação de senha e onboarding mantêm a mesma base de tokens e padrões de interação. |

## Decisão de implementação

Em vez de replicar telas do Figma como imagens estáticas, a implementação traduziu o guia em uma camada de tema reutilizável. Isso facilita manutenção, escala e ajuste fino de acessibilidade.

Os principais arquivos relacionados a essa decisão são:

- `src/styles/theme.ts`
- `src/styles/GlobalStyle.ts`
- `src/components/Button/index.tsx`
- `src/components/Header/index.tsx`
- `src/components/Footer/index.tsx`

## Divergências conscientes

Alguns elementos foram **adaptados ao escopo do desafio** e ao contexto de implementação com Next.js e Styled Components. Portanto, a aderência deve ser entendida como:

- fidelidade aos tokens e à linguagem visual central;
- adaptação de componentes para o fluxo proposto nesta entrega;
- não utilização de uma biblioteca oficial fechada ou espelhamento integral do Figma.

## Conclusão

A aderência ao guia Marsha foi feita por meio de **tokens, tipografia, contraste, estados e padrões visuais reutilizáveis**, com adaptação intencional para os fluxos entregues no desafio.