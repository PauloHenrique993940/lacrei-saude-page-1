// Configurações de performance para a aplicação Lacrei Saúde

// 1. Estratégia de Preload para Recursos Críticos
export const preloadResources = () => {
  if (typeof window !== 'undefined') {
    // Preload de imagens críticas
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/critical-image.png';
    document.head.appendChild(link);
  }
};

// 2. Intersection Observer para Lazy Loading
export const createLazyLoadObserver = (
  callback: (entry: IntersectionObserverEntry) => void
) => {
  if (typeof window === 'undefined') return null;

  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, options);
};

// 3. Debounce para Event Listeners
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// 4. Throttle para Event Listeners
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// 5. Prefetch Links para Navegação
export const prefetchLink = (href: string) => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// 6. Cache de Dados com LocalStorage
export const cacheData = (key: string, data: any, ttl: number = 3600000) => {
  const item = {
    value: data,
    expiry: Date.now() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getCachedData = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  const { value, expiry } = JSON.parse(item);
  if (Date.now() > expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return value;
};

// 7. Web Workers para Operações Pesadas
export const runInWebWorker = (
  script: string,
  data: any
): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const worker = new Worker(
        URL.createObjectURL(
          new Blob([script], { type: 'application/javascript' })
        )
      );

      worker.onmessage = (event) => {
        resolve(event.data);
        worker.terminate();
      };

      worker.onerror = reject;
      worker.postMessage(data);
    } catch (error) {
      reject(error);
    }
  });
};

// 8. Medir Performance
export const measurePerformance = (label: string) => {
  if (typeof window !== 'undefined' && window.performance) {
    performance.mark(`${label}-start`);

    return () => {
      performance.mark(`${label}-end`);
      performance.measure(
        label,
        `${label}-start`,
        `${label}-end`
      );

      const measure = performance.getEntriesByName(label)[0];
      if (measure) {
        console.log(`${label}: ${measure.duration.toFixed(2)}ms`);
      }
    };
  }

  return () => {};
};
