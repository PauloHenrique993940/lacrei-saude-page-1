'use client';

import { theme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from './index';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Button Component', () => {
    it('renders children correctly', () => {
        renderWithTheme(<Button>Clique aqui</Button>);
        expect(screen.getByText('Clique aqui')).toBeInTheDocument();
    });

    it('applies styles based on variant', () => {
        const { rerender } = renderWithTheme(
            <Button $variant="secondary">Botão</Button>
        );
        const button = screen.getByRole('button');
        expect(button).toHaveStyle(`color: ${theme.colors.primary}`);

        rerender(
            <ThemeProvider theme={theme}>
                <Button>Primário</Button>
            </ThemeProvider>
        );
        expect(screen.getByRole('button')).toHaveStyle(
            `background-color: ${theme.colors.primary}`
        );
    });
});
