'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../providers/AuthContext';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Content = styled.section`
    flex: 1;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem 1rem 3.5rem;
`;

const Card = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.colors.border};
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
    padding: 2rem;

    h1 {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.secondary};
        margin-bottom: 0.8rem;
    }

    p {
        color: ${(props) => props.theme.colors.text};
        margin-bottom: 1.4rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        border: 1px solid ${(props) => props.theme.colors.border};
        border-radius: 8px;
        padding: 0.85rem;
        font-size: 1rem;
    }
`;

const SubmitButton = styled.button`
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    padding: 0.85rem 1.2rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
`;

const ReturnLink = styled(Link)`
    margin-top: 1rem;
    display: inline-block;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
`;

const Success = styled.p`
    color: #0f766e;
    margin: 0;
`;

const Error = styled.p`
    color: #b91c1c;
    margin: 0;
`;

const StatusCard = styled.div<{ $tone: 'error' | 'success' }>`
    border-radius: 12px;
    padding: 1rem 1.1rem;
    margin-top: 1rem;
    border: 1px solid
        ${(props) => (props.$tone === 'error' ? '#f3b2b2' : '#8fd3c3')};
    background: ${(props) => (props.$tone === 'error' ? '#fff7f7' : '#f1fcf8')};

    strong {
        display: block;
        color: ${(props) => props.theme.colors.secondary};
        margin-bottom: 0.35rem;
    }
`;

export default function EsqueciSenhaPage() {
    const { requestPasswordReset } = useAuth();
    const formRef = useRef<HTMLFormElement | null>(null);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<
        'idle' | 'invalid_email' | 'not_found' | 'sent'
    >('idle');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (formRef.current) {
            formRef.current.noValidate = true;
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedEmail = email.trim();

        setStatus('idle');
        setMessage('');

        if (!EMAIL_REGEX.test(trimmedEmail)) {
            setStatus('invalid_email');
            setMessage(
                'Digite um e-mail em formato valido para receber as instrucoes.'
            );
            return;
        }

        setIsSubmitting(true);
        const result = await requestPasswordReset(trimmedEmail);
        setIsSubmitting(false);

        if (result === 'not_found') {
            setStatus('not_found');
            setMessage('Nao encontramos uma conta cadastrada com este e-mail.');
            return;
        }

        setStatus('sent');
        setMessage(
            'Se este e-mail estiver cadastrado, voce recebera as instrucoes em instantes.'
        );
    };

    return (
        <Main>
            <Header />
            <Content>
                <Card>
                    <h1>Recuperar senha</h1>
                    <p>
                        Informe seu e-mail para receber um link de redefinicao
                        de senha.
                    </p>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="voce@email.com"
                            required
                        />
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar link'}
                        </SubmitButton>
                        {status === 'invalid_email' && (
                            <StatusCard
                                $tone="error"
                                role="alert"
                                aria-live="polite"
                            >
                                <strong>E-mail fora do formato esperado</strong>
                                <Error>{message}</Error>
                            </StatusCard>
                        )}
                        {status === 'not_found' && (
                            <StatusCard
                                $tone="error"
                                role="alert"
                                aria-live="polite"
                            >
                                <strong>Conta nao cadastrada</strong>
                                <Error>{message}</Error>
                            </StatusCard>
                        )}
                        {status === 'sent' && (
                            <StatusCard
                                $tone="success"
                                role="status"
                                aria-live="polite"
                            >
                                <strong>Confirmar envio para e-mail</strong>
                                <Success>{message}</Success>
                            </StatusCard>
                        )}
                    </Form>

                    <ReturnLink href="/entrar">Voltar para entrar</ReturnLink>
                </Card>
            </Content>
            <Footer />
        </Main>
    );
}
