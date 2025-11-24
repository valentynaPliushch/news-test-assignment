// src/theme.ts
export const colors = {
  background: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceAlt: '#F5F5F7',      // світло-сірий фон
  textPrimary: '#111111',
  textSecondary: '#666666',
  textMuted: '#9E9E9E',

  secondary: '#6D6F73',
  secondaryLight: '#F2F2F2',
  danger: '#FF4C4C',
  primaryBlue: '#2563FF',
  primaryLight: '#B8C8FF',
};

export const typography = {
  // заголовки
  h1: {
    fontSize: 24,
    fontWeight: '700' as const,
  },
  h2: {
    fontSize: 20,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 17,
    fontWeight: '400' as const, 
  },
  bodySmall: {
    fontSize: 16,
    fontWeight: '300' as const, 
  },
  caption: {
    fontSize: 12,
    fontWeight: '300' as const,
  },
  fontFamily: 'Roboto',
};
