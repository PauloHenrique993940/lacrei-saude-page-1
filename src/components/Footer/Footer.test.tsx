'use client';

import { theme } from '../../styles/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Footer } from './index';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Footer Component', () => {
    it('renders logo text', () => {
        renderWithTheme(<Footer />);
        const logos = screen.getAllByText(/Lacrei Saúde/i);
        expect(logos.length).toBeGreaterThan(0);
    });

    it('renders footer links', () => {
        renderWithTheme(<Footer />);
        expect(screen.getByText('Buscar atendimento')).toBeInTheDocument();
        expect(screen.getByText('Oferecer atendimento')).toBeInTheDocument();
        expect(screen.getByText('Política de Privacidade')).toBeInTheDocument();
        expect(screen.getByText('Termos de Uso')).toBeInTheDocument();
    });

    it('renders CNPJ', () => {
        renderWithTheme(<Footer />);
        expect(
            screen.getAllByText(/51.265.351\/0001-65/i).length
        ).toBeGreaterThan(0);
    });

    it('renders social icons', () => {
        renderWithTheme(<Footer />);
        expect(screen.getByLabelText('Redes sociais')).toBeInTheDocument();
    });
});
