# Guia de Contribuição - Lacrei Saúde

## Checklist de Qualidade

Antes de fazer um commit, certifique-se de que todos os itens foram atendidos:

### 1. Design

- [ ] Componente criado ou tela foi baseada em um já existente na Marishi
- [ ] Equipamentos foram aplicados conforme o definido no guia
- [ ] A paleta de cores foi utilizada corretamente
- [ ] Tamanhos e fontes do texto foram aplicados conforme padrão
- [ ] Efeitos como sombra e borda estruturada foram aplicados conforme os padrões definidos
- [ ] Ícones presentes e atributos com os disponíveis na Marishi quando houver
- [ ] Componente construído com Auto Layout
- [ ] Componente com variações de estado aplicadas (quando houver)

### 2. Documentação

- [ ] Nomear em inglês e descrever a função, incluindo se é desktop ou mobile
- [ ] Componente publicado na biblioteca da Marishi
- [ ] Organização do frame segue um padrão, com wireframe e acessibilidade conforme feito
- [ ] Componente atualizado no telas desktop e mobile (quando necessário)
- [ ] Criação/utilização da anatomia dos componentes e atualização da página correspondente

### 3. Acessibilidade

- [ ] Verificar o contraste entre texto e fundo é de no mínimo 4.5:1
- [ ] Garantir que todos os elementos interativos são acessíveis via teclado
- [ ] Verificar o foco visual (possuí borda de no mínimo 2px de largura)
- [ ] Garantir que não há instruções baseadas apenas em cor ("clique no botão azul")
- [ ] Adicionar atributos `aria-label`, `aria-describedby` e `role` quando necessário
- [ ] Estrutura da interface (blocos, seções e relações entre elementos) seja compreensível tanto visual quanto auditivamente

### 4. Testes

- [ ] Verificar se os testes da biblioteca de protótipação foram criados conforme correto
- [ ] Garantir que ao utilizá um padrão de telas permanece o que é correto (esquecido correto)
- [ ] Validar a ligação entre o User Flow e a prototipação
- [ ] Testar a prototipação em telas menores para garantir a devida responsividade

---

## Padrão de Nomenclatura de Telas

### Telas Principais

As telas principais são nomeadas por **número** + **primeira letra do nome da página** + **"I"** (de Início):

**Exemplos:**
- `1I/Início` - Jornada Institucional
- `2I/Escolha da pessoa` - Decisão entre Paciente ou Profissional
- `3I/Quem somos` - Informações sobre a Lacrei Saúde

### Telas de Fluxo de Cadastro

O fluxo de cadastro para Pacientes segue o padrão **número** + **"PO"** (de Pessoa/Onboarding):

**Exemplos:**
- `1PO/Onboarding` - Boas-vindas ao cadastro
- `2PO/Pronome` - Seleção de pronome
- `3PO/Etnia` - Identificação de etnidade
- `4PO/Gênero` - Identificação de gênero
- `5PO/Sexualidade` - Identificação de sexualidade
- `6PO/Deficiência` - Identificação de deficiência
- `7PO/Conclusão` - Finalização do cadastro

### Fluxos Alternativos

Para fluxos alternativos (ex: "termo de uso fluxo", "termos de uso fluxo"), a nomenclatura inclui a variação:

**Exemplo:** `1.1A / termo de fluxo alternativo - versão de lista de fluxo`

---

## Estrutura de Releases

### Versionamento Semântico

Utilizamos o padrão **v1.x.x**:

- **v1.2.2** - Release atual com correções
- **v1.2.1** - Ajustes anteriores
- **v1.2.0** - Release com novas funcionalidades
- **v1.1.0** - Tokens - edição do token font-line-height e alteração do token text

### Release Notes

Cada release deve incluir:

- **O que é novo** - Novas funcionalidades e componentes adicionados
- **Cadência** - Frequência de atualizações (BI, semanal, ou conforme necessário)
- **Descrição detalhada** - Documentação de mudanças, deprecações e melhorias

---

## Critérios de Qualidade

### Primeiro Passo (Design & Prototipação)

- [ ] Definir caso de uso e necessidades do usuário
- [ ] Criar wireframe e componente no design system
- [ ] Validar acessibilidade e responsividade
- [ ] Revisar com a equipe de design

### Segundo Passo (Implementação & Testes)

- [ ] Implementar componente em código
- [ ] Escrever testes unitários e de integração
- [ ] Validar acessibilidade com ferramentas (axe, WAVE, etc.)
- [ ] Testar em múltiplos navegadores e dispositivos
- [ ] Documentar decisões de implementação

---

## Recursos Úteis

- [Google Material Symbols](https://fonts.google.com/icons) - Ícones padrão
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Padrões de acessibilidade
- [CSS-in-JS com Styled Components](https://styled-components.com/) - Documentação do framework usado
- [Next.js Documentation](https://nextjs.org/docs) - Documentação do framework
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Documentação de tipagem
