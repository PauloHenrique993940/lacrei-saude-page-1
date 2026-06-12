export const theme = {
  colors: {
    // Cores Primárias
    primary: '#018762', // Verde (base inclusiva)
    secondary: '#1F2937', // Cinza escuro

    // Identidade Visual LGBTQ+ (Arco-Íris)
    rainbow: {
      red: '#E40303',
      orange: '#FF8C00',
      yellow: '#FFFF00',
      green: '#008026',
      blue: '#004CFF',
      purple: '#750787',
    },

    // Cores de Texto e Superfícies (Marsha Tokens)
    text: {
      default: '#485467',
      title: '#1F2937',
      label: '#485467',
      helper: '#717D96',
      button: '#FFFFFF',
      link: '#018762',
    },

    white: '#FFFFFF',
    background: '#F3F4F6',
    surface: '#E8E4EF',
    border: '#D5DBE3',

    // Estados (Marsha Design System)
    error: '#DC2626',
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
    disabled: '#D1D5DB',

    // Cores de Interação
    hover: {
      primary: '#01664D',
      secondary: '#111827',
    },
    pressed: {
      primary: '#014d3a',
    },

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

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    pill: '9999px',
  },

  shadows: {
    sm: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0px 4px 12px rgba(1, 135, 98, 0.24)',
    lg: '0px 8px 24px rgba(0, 0, 0, 0.12)',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};