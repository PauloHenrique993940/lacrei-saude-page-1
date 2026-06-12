'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../providers/AuthContext';
import Image from 'next/image';
import profissionaisSaude from '../assets/profissionaisSaude.avif';

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
        font-size: 3rem;
        color: ${(props) => props.theme.colors.secondary};
        margin-bottom: 0.9rem;
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
    font-weight: 600;
    width: fit-content;
`;

const Message = styled.p`
    margin: 0;
    color: #b91c1c;
    font-size: 0.95rem;
    min-height: 1.2rem;
`;

const SideCard = styled.div`
    min-height: 520px;
    border-radius: 16px;
    background: #ecf5f2;
    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
        min-height: 300px;
    }
`;

export default function EntrarPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setIsSubmitting(true);

        const success = await login(email, password);

        if (!success) {
            setError('Informe e-mail e senha para continuar.');
            setIsSubmitting(false);
            return;
        }

        router.push('/');
    };

    return (
        <Main>
            <Header />
            <Content>
                <FormCard>
                    <h1>Boas-vindas à Lacrei Saúde</h1>
                    <p>Entre ou crie sua conta Lacrei Saúde.</p>

                    <Form onSubmit={handleSubmit}>
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
                        src={profissionaisSaude}
                        alt="Profissionais de saúde em atendimento"
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized
                        priority
                    />
                </SideCard>
            </Content>
            <Footer />
        </Main>
    );
}
