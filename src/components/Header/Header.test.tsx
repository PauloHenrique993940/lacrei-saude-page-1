'use client';

import { theme } from '../../styles/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from './index';

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

jest.mock('@/providers/AuthContext', () => ({
    useAuth: () => ({
        isAuthenticated: false,
        user: null,
        logout: jest.fn(),
        isReady: true,
    }),
}));

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Header Component', () => {
    it('renders the logo correctly', () => {
        renderWithTheme(<Header />);
        expect(screen.getByText('Lacrei Saúde')).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        renderWithTheme(<Header />);
        expect(screen.getByText('Quem Somos')).toBeInTheDocument();
        expect(screen.getByText('Ajuda')).toBeInTheDocument();
    });

    it('renders login button', () => {
        renderWithTheme(<Header />);
        expect(screen.getByText('Entrar')).toBeInTheDocument();
    });
});
