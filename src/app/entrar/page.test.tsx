'use client';

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import EntrarPage from './page';
import { theme } from '../../styles/theme';

const mockPush = jest.fn();
const mockLogin = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({
        alt,
        src,
        fill: _fill,
        priority: _priority,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement> & {
        src: string;
        fill?: boolean;
        priority?: boolean;
    }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={alt} src={src} {...props} />
    ),
}));

jest.mock('../../components/Header', () => ({
    Header: () => <div>Header</div>,
}));

jest.mock('../../components/Footer', () => ({
    Footer: () => <div>Footer</div>,
}));

jest.mock('../../providers/AuthContext', () => ({
    useAuth: () => ({
        login: mockLogin,
    }),
}));

function renderPage() {
    return render(
        <ThemeProvider theme={theme}>
            <EntrarPage />
        </ThemeProvider>
    );
}

describe('Fluxo 1PR - Login', () => {
    beforeEach(() => {
        mockLogin.mockReset();
        mockPush.mockReset();
    });

    it('1PR - 3 exibe estado de dados obrigatorios', async () => {
        renderPage();

        fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

        expect(
            await screen.findByText('Dados obrigatorios')
        ).toBeInTheDocument();
        expect(
            screen.getAllByText('Por favor, preencha todos os campos.')[0]
        ).toBeInTheDocument();
        expect(mockLogin).not.toHaveBeenCalled();
    });

    it('1PR - 2 exibe estado de e-mail invalido', async () => {
        renderPage();

        fireEvent.change(screen.getByLabelText('E-mail'), {
            target: { value: 'email-invalido' },
        });
        fireEvent.change(screen.getByLabelText('Senha'), {
            target: { value: 'senha123' },
        });

        fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

        expect(
            await screen.findByText('E-mail com formato invalido')
        ).toBeInTheDocument();
        expect(
            screen.getAllByText('Digite um e-mail valido para continuar.')[0]
        ).toBeInTheDocument();
        expect(mockLogin).not.toHaveBeenCalled();
    });

    it('1PR - 1 exibe estado de credenciais invalidas', async () => {
        mockLogin.mockResolvedValue(false);
        renderPage();

        fireEvent.change(screen.getByLabelText('E-mail'), {
            target: { value: 'pessoa@teste.com' },
        });
        fireEvent.change(screen.getByLabelText('Senha'), {
            target: { value: 'senhaerrada' },
        });

        fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith(
                'pessoa@teste.com',
                'senhaerrada'
            );
        });

        expect(
            await screen.findByText('E-mail ou senha invalidos')
        ).toBeInTheDocument();
        expect(
            screen.getAllByText(
                'E-mail ou senha incorretos. Verifique seus dados e tente novamente.'
            )[0]
        ).toBeInTheDocument();
        expect(mockPush).not.toHaveBeenCalled();
    });
});
