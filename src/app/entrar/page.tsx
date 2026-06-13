'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../providers/AuthContext';
import Image from 'next/image';

const LOGIN_ILLUSTRATION_URL =
    'https://paciente.lacreisaude.com.br/_next/static/media/illustration-login.17db3f05.svg';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Content = styled.section`
    flex: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem 2rem 3.5rem;
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    gap: 2rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 2rem 1rem 3rem;
    }
`;

const FormCard = styled.div`
    padding: 1rem 0;

    h1 {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.secondary};
        margin-bottom: 0.9rem;
        position: relative;
    }
    h1::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 200px; /* ajuste o tamanho da linha */
        height: 2px;
        background-color: #007756;
    }

    p {
        color: ${(props) => props.theme.colors.text};
        margin-bottom: 2rem;
        font-size: 1.15rem;
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 2.2rem;
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Field = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;

    input {
        border: 1px solid ${(props) => props.theme.colors.border};
        border-radius: 8px;
        padding: 0.85rem 0.9rem;
        font-size: 1rem;
        background: #f8fafc;
        color: ${(props) => props.theme.colors.secondary};
    }
`;

const SubmitButton = styled.button`
    margin-top: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    padding: 0.85rem 1.25rem;
    border-radius: 8px;
    font-size: 1.15rem;
    font-weight: 700;
`;

const OutlineButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    background: transparent;
    padding: 0.85rem 1.25rem;
    border-radius: 8px;
    font-size: 1.15rem;
    font-weight: 700;
`;

const ForgetLink = styled(Link)`
    margin-top: 0.6rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
    width: fit-content;
    text-decoration: underline;
`;

const Message = styled.p`
    margin: 0;
    color: #b91c1c;
    font-size: 0.95rem;
    min-height: 1.2rem;
`;

const StatusCard = styled.div<{ $tone: 'error' | 'success' | 'neutral' }>`
    border-radius: 12px;
    padding: 1rem 1.1rem;
    margin-bottom: 1.25rem;
    border: 1px solid
        ${(props) =>
            props.$tone === 'error'
                ? '#f3b2b2'
                : props.$tone === 'success'
                    ? '#8fd3c3'
                    : props.theme.colors.border};
    background: ${(props) =>
        props.$tone === 'error'
            ? '#fff7f7'
            : props.$tone === 'success'
                ? '#f1fcf8'
                : '#f8fafc'};

    strong {
        display: block;
        color: ${(props) => props.theme.colors.secondary};
        margin-bottom: 0.35rem;
    }

    span {
        color: ${(props) => props.theme.colors.text};
        font-size: 0.95rem;
        line-height: 1.45;
    }
`;

const SideCard = styled.div`
    min-height: 520px;
    border-radius: 16px;
    background: #ecf5f2;
    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
        min-height: 300px;
        order: -1;
    }
`;

export default function EntrarPage() {
    const { login } = useAuth();
    const router = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [statusTitle, setStatusTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (formRef.current) {
            formRef.current.noValidate = true;
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const normalizedEmail = email.trim();
        const normalizedPassword = password.trim();

        setError('');
        setStatusTitle('');

        if (!normalizedEmail || !normalizedPassword) {
            setStatusTitle('Dados obrigatorios');
            setError('Por favor, preencha todos os campos.');
            return;
        }

        if (!EMAIL_REGEX.test(normalizedEmail)) {
            setStatusTitle('E-mail com formato invalido');
            setError('Digite um e-mail valido para continuar.');
            return;
        }

        setIsSubmitting(true);

        try {
            const isAuthenticated = await login(
                normalizedEmail,
                normalizedPassword
            );

            if (!isAuthenticated) {
                setStatusTitle('E-mail ou senha invalidos');
                setError(
                    'E-mail ou senha incorretos. Verifique seus dados e tente novamente.'
                );
                return;
            }

            router.push('/');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Main>
            <Header />
            <Content>
                <FormCard>
                    <h1>Boas-vindas à Lacrei Saúde</h1>
                    <p>Entre ou crie sua conta Lacrei Saúde.</p>

                    {(statusTitle || error) && (
                        <StatusCard
                            $tone="error"
                            role="alert"
                            aria-live="polite"
                        >
                            <strong>
                                {statusTitle || 'Nao foi possivel entrar'}
                            </strong>
                            <span>{error}</span>
                        </StatusCard>
                    )}

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Field>
                            E-mail
                            <input
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="voce@email.com"
                                autoComplete="email"
                                required
                            />
                        </Field>

                        <Field>
                            Senha
                            <input
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="Digite sua senha"
                                autoComplete="current-password"
                                required
                            />
                        </Field>

                        <Message>{error}</Message>

                        <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Entrando...' : 'Entrar'}
                        </SubmitButton>
                        <OutlineButton href="/criar-conta">
                            Criar conta
                        </OutlineButton>
                        <ForgetLink href="/esqueci-senha">
                            Esqueci minha senha
                        </ForgetLink>
                    </Form>
                </FormCard>

                <SideCard aria-hidden="true">
                    <Image
                        src={LOGIN_ILLUSTRATION_URL}
                        alt="Profissionais de saúde em atendimento"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="(max-width: 1024px) 0vw, 50vw"
                    />
                </SideCard>
            </Content>
            <Footer />
        </Main>
    );
}
