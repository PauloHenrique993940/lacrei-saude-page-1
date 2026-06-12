export const theme = {
  colors: {
    // Cores Primárias
    primary: '#018762', // Verde (base inclusiva)
    secondary: '#1F2937', // Cinza escuro

    // Identidade Visual LGBTQ+ (Arco-Íris)
    rainbow: {
      red: '#E40303', // Vermelho
      orange: '#FF8C00', // Laranja
      yellow: '#FFFF00', // Amarelo
      green: '#008026', // Verde
      blue: '#004CFF', // Azul
      purple: '#750787', // Roxo
    },

    // Cores de Texto e Superfícies
    text: '#485467',
    white: '#FFFFFF',
    background: '#F3F4F6',
    surface: '#E8E4EF',
    border: '#D5DBE3',

    // Estados
    error: '#DC2626',
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',

    // Sobreposições com Transparência
    overlayLight: 'rgba(255, 255, 255, 0.95)',
    overlayDark: 'rgba(0, 0, 0, 0.7)',
  },

  // Gradientes LGBTQ+
  gradients: {
    rainbow:
      'linear-gradient(90deg, #E40303 0%, #FF8C00 16.67%, #FFFF00 33.33%, #008026 50%, #004CFF 66.67%, #750787 100%)',
    rainbowVertical:
      'linear-gradient(180deg, #E40303 0%, #FF8C00 16.67%, #FFFF00 33.33%, #008026 50%, #004CFF 66.67%, #750787 100%)',
    rainbowSubtle:
      'linear-gradient(90deg, rgba(1, 135, 98, 0.1) 0%, rgba(229, 62, 142, 0.1) 100%)',
  },

  fonts: {
    main: 'Nunito, sans-serif',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};