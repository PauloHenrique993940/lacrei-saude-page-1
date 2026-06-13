'use client';

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import EsqueciSenhaPage from './page';
import { theme } from '../../styles/theme';

const mockRequestPasswordReset = jest.fn();

jest.mock('../../components/Header', () => ({
    Header: () => <div>Header</div>,
}));

jest.mock('../../components/Footer', () => ({
    Footer: () => <div>Footer</div>,
}));

jest.mock('../../providers/AuthContext', () => ({
    useAuth: () => ({
        requestPasswordReset: mockRequestPasswordReset,
    }),
}));

function renderPage() {
    return render(
        <ThemeProvider theme={theme}>
            <EsqueciSenhaPage />
        </ThemeProvider>
    );
}

describe('Fluxo 1.2L - Recuperar senha', () => {
    beforeEach(() => {
        mockRequestPasswordReset.mockReset();
    });

    it('1.2L - 2 exibe estado de e-mail fora do formato', async () => {
        renderPage();

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'email-invalido' },
        });
        fireEvent.click(screen.getByRole('button', { name: 'Enviar link' }));

        expect(
            await screen.findByText('E-mail fora do formato esperado')
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Digite um e-mail em formato valido para receber as instrucoes.'
            )
        ).toBeInTheDocument();
        expect(mockRequestPasswordReset).not.toHaveBeenCalled();
    });

    it('1.2L - 1 exibe estado de conta nao cadastrada', async () => {
        mockRequestPasswordReset.mockResolvedValue('not_found');
        renderPage();

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'naoexiste@teste.com' },
        });
        fireEvent.click(screen.getByRole('button', { name: 'Enviar link' }));

        await waitFor(() => {
            expect(mockRequestPasswordReset).toHaveBeenCalledWith(
                'naoexiste@teste.com'
            );
        });

        expect(
            await screen.findByText('Conta nao cadastrada')
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Nao encontramos uma conta cadastrada com este e-mail.'
            )
        ).toBeInTheDocument();
    });

    it('1.2L - 3 exibe confirmacao de envio para e-mail', async () => {
        mockRequestPasswordReset.mockResolvedValue('sent');
        renderPage();

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'pessoa@teste.com' },
        });
        fireEvent.click(screen.getByRole('button', { name: 'Enviar link' }));

        await waitFor(() => {
            expect(mockRequestPasswordReset).toHaveBeenCalledWith(
                'pessoa@teste.com'
            );
        });

        expect(
            await screen.findByText('Confirmar envio para e-mail')
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Se este e-mail estiver cadastrado, voce recebera as instrucoes em instantes.'
            )
        ).toBeInTheDocument();
    });
});
