# Guia de Uso - Performance Services

Este documento explica como usar os serviços de performance disponibilizados em `src/services/performance.ts`.

## 🚀 Quick Start

### 1. Cache de Dados

```typescript
import { cacheData, getCachedData } from '@/services/performance';

// Armazenar dados em cache por 1 hora
const userData = { id: 1, name: 'João', email: 'joao@example.com' };
cacheData('user-data', userData, 3600000); // TTL em ms

// Recuperar dados em cache
const cached = getCachedData('user-data');
if (cached) {
  console.log('Dados em cache:', cached);
} else {
  console.log('Cache expirado ou não encontrado');
}
```

### 2. Medir Performance

```typescript
import { measurePerformance } from '@/services/performance';

// Iniciar medição
const endMeasure = measurePerformance('api-call');

// ... código que quer medir ...
const response = await fetch('/api/data');

// Finalizar medição e logar
endMeasure(); // Output: "api-call: 245.32ms"
```

### 3. Debounce para Input

```typescript
import { debounce } from '@/services/performance';

// Espera 300ms após parar de digitar antes de executar
const handleSearch = debounce((query: string) => {
  fetch(`/api/search?q=${query}`);
}, 300);

// Em um input
<input onChange={(e) => handleSearch(e.target.value)} />
```

### 4. Throttle para Scroll

```typescript
import { throttle } from '@/services/performance';

// Máximo 1 execução a cada 100ms
const handleScroll = throttle(() => {
  const scrollPos = window.scrollY;
  console.log('Scroll position:', scrollPos);
}, 100);

// No event listener
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll);
}
```

### 5. Lazy Loading com Intersection Observer

```typescript
import { createLazyLoadObserver } from '@/services/performance';
import { useEffect } from 'react';

export function LazyImage() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = createLazyLoadObserver((entry) => {
      if (entry.isIntersecting && imageRef.current) {
        const img = imageRef.current;
        img.src = img.dataset.src!;
        img.onload = () => observer?.unobserve(img);
      }
    });

    if (imageRef.current) {
      observer?.observe(imageRef.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <img
      ref={imageRef}
      data-src="/heavy-image.jpg"
      src="/placeholder.jpg"
      alt="Lazy loaded"
    />
  );
}
```

### 6. Prefetch de Links

```typescript
import { prefetchLink } from '@/services/performance';

// Em um componente de navegação
<Link href="/pagina-pesada" onMouseEnter={() => prefetchLink('/pagina-pesada')}>
  Próxima Página
</Link>
```

---

## 📋 API Completa

### `cacheData(key, data, ttl?)`

Armazena dados em localStorage com TTL (time to live).

```typescript
// Parâmetros
- key: string              // Chave única
- data: any                // Dados a armazenar (será serializado)
- ttl: number = 3600000    // TTL em milissegundos (padrão: 1 hora)

// Exemplo
cacheData('preferences', { theme: 'dark' }, 86400000); // 24 horas
```

### `getCachedData(key)`

Recupera dados em cache, verificando expiração.

```typescript
// Parâmetros
- key: string              // Chave armazenada

// Retorno
- any | null               // Dados se válidos, null se expirado

// Exemplo
const theme = getCachedData('preferences')?.theme || 'light';
```

### `measurePerformance(label)`

Mede tempo de execução de uma seção de código.

```typescript
// Parâmetros
- label: string            // Nome da medição

// Retorno
- Function                 // Função para chamar quando terminar

// Exemplo
const end = measurePerformance('heavy-operation');
// ... código pesado ...
end(); // Loga "heavy-operation: XXXms"
```

### `debounce(func, wait)`

Executa função apenas após N ms sem chamadas.

```typescript
// Parâmetros
- func: Function           // Função a executar
- wait: number             // Delay em ms

// Retorno
- Function                 // Função debounced

// Exemplo
const debouncedSearch = debounce((query) => {
  console.log('Searching:', query);
}, 500);

debouncedSearch('a');     // não executa
debouncedSearch('ab');    // não executa
debouncedSearch('abc');   // executa após 500ms
```

### `throttle(func, limit)`

Executa função no máximo a cada N ms.

```typescript
// Parâmetros
- func: Function           // Função a executar
- limit: number            // Intervalo mínimo em ms

// Retorno
- Function                 // Função throttled

// Exemplo
const throttledResize = throttle(() => {
  console.log('Window resized');
}, 200);

window.addEventListener('resize', throttledResize);
// Executa no máximo a cada 200ms
```

### `createLazyLoadObserver(callback)`

Cria Intersection Observer para lazy loading.

```typescript
// Parâmetros
- callback: Function       // Chamado quando element entra em view

// Retorno
- IntersectionObserver    // Observer para usar com observe/unobserve

// Configuração padrão
- root: null               // Viewport
- rootMargin: '50px'       // Começa a carregar 50px antes de ficar visível
- threshold: 0.1           // Executa quando 10% está visível

// Exemplo
const observer = createLazyLoadObserver((entry) => {
  if (entry.isIntersecting) {
    loadHeavyContent(entry.target);
  }
});
```

### `prefetchLink(href)`

Prefetch de URL para carregamento rápido.

```typescript
// Parâmetros
- href: string             // URL a prefetch

// Exemplo
prefetchLink('/heavy-page');
// Navegador começa a baixar a página em background
```

---

## 💡 Casos de Uso Recomendados

### ✅ Use Cache Para:
- Dados de usuário (perfil, preferências)
- Resultados de busca
- Configurações da aplicação
- Dados de API que não mudam frequentemente

### ✅ Use Debounce Para:
- Busca (input type="text")
- Redimensionamento de editor
- Auto-save de documentos
- Validação de formulário em tempo real

### ✅ Use Throttle Para:
- Eventos de scroll
- Redimensionamento de janela (resize)
- Mouse move
- Animações customizadas

### ✅ Use Lazy Load Para:
- Imagens abaixo da dobra
- Componentes pesados
- Vídeos
- Gráficos complexos

### ✅ Use Prefetch Para:
- Links em hover
- Rotas prováveis de navegação
- Assets críticos para próxima página

---

## 🔍 Monitoramento

### Web Vitals em Tempo Real

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Adicione ao seu layout.tsx ou app.tsx
getCLS(console.log);  // Cumulative Layout Shift
getFID(console.log);  // First Input Delay
getFCP(console.log);  // First Contentful Paint
getLCP(console.log);  // Largest Contentful Paint
getTTFB(console.log); // Time to First Byte
```

### Performance API Nativa

```typescript
// Marcar pontos no tempo
performance.mark('inicio');
// ... código ...
performance.mark('fim');

// Medir diferença
performance.measure('minha-operacao', 'inicio', 'fim');

// Obter medições
const measures = performance.getEntriesByName('minha-operacao');
console.log(measures[0].duration); // Tempo em ms
```

---

## ⚠️ Cuidados

### Não Abusar de Cache
```typescript
// ❌ RUIM - Cache muito longo para dados que mudam
cacheData('user-status', status, 86400000); // 24h

// ✅ BOM - Cache curto para dados dinâmicos
cacheData('user-status', status, 300000); // 5 minutos
```

### Debounce com Fallback
```typescript
// ❌ RUIM - Pode perder última chamada
const debouncedSubmit = debounce(() => submit(), 500);

// ✅ BOM - Executar no blur também
<form onSubmit={(e) => {
  e.preventDefault();
  debouncedSubmit();
}} onBlur={debouncedSubmit}>
```

### Limpar Observers
```typescript
// ❌ RUIM - Memory leak
const observer = createLazyLoadObserver(...);
observer.observe(element);
// Sem cleanup

// ✅ BOM - Cleanup em useEffect
useEffect(() => {
  const observer = createLazyLoadObserver(...);
  observer.observe(element);
  return () => observer.disconnect();
}, []);
```

---

## 📈 Ganhos de Performance

Usando esses serviços adequadamente:

| Serviço | Aplicação | Ganho |
|---------|-----------|-------|
| Cache | Repetidas requisições mesmos dados | 70-80% |
| Debounce | Input com validação | 90-95% |
| Throttle | Evento scroll frequente | 80-90% |
| Lazy Load | Imagens abaixo da dobra | 40-60% |
| Prefetch | Navegação para página pesada | 30-50% |

---

## 🚀 Próximos Passos

1. Aplicar cache em dados de API que não mudam frequentemente
2. Usar debounce em todos os inputs de busca
3. Lazy load de imagens em lists/cards
4. Prefetch em botões de navegação importante
5. Monitorar Core Web Vitals com Web Vitals library

Para mais detalhes, consulte [PERFORMANCE.md](../PERFORMANCE.md).
