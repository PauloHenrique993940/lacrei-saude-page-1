'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../providers/AuthContext';

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Content = styled.section`
    flex: 1;
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem 1rem 3.5rem;
`;

const Card = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 16px;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 2rem;

    h1 {
        font-size: 2.1rem;
        margin-bottom: 0.8rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    p {
        color: ${(props) => props.theme.colors.text};
        margin-bottom: 1.6rem;
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
    gap: 0.45rem;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;

    input {
        border: 1px solid ${(props) => props.theme.colors.border};
        border-radius: 8px;
        padding: 0.8rem 0.9rem;
        font-size: 1rem;
    }
`;

const Actions = styled.div`
    margin-top: 0.8rem;
    display: flex;
    gap: 0.9rem;
    flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    padding: 0.8rem 1.2rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
`;

const SecondaryLink = styled(Link)`
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    padding: 0.8rem 1.2rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
`;

const ErrorText = styled.p`
    margin: 0;
    color: #b91c1c;
    min-height: 1.2rem;
    font-size: 0.92rem;
`;

export default function CriarContaPage() {
    const { register } = useAuth();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        if (password.length < 6) {
            setError('A senha deve ter ao menos 6 caracteres.');
            return;
        }

        setIsSubmitting(true);
        const success = await register(name, email, password);

        if (!success) {
            setError('Preencha todos os dados para criar a conta.');
            setIsSubmitting(false);
            return;
        }

        router.push('/cadastro/onboarding');
    };

    return (
        <Main>
            <Header />
            <Content>
                <Card>
                    <h1>Criar conta</h1>
                    <p>
                        Preencha seus dados para começar sua jornada na Lacrei
                        Saúde.
                    </p>

                    <Form onSubmit={handleSubmit}>
                        <Field>
                            Nome completo
                            <input
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                placeholder="Seu nome"
                                autoComplete="name"
                                required
                            />
                        </Field>

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
                                placeholder="Minimo de 6 caracteres"
                                autoComplete="new-password"
                                required
                            />
                        </Field>

                        <ErrorText>{error}</ErrorText>

                        <Actions>
                            <PrimaryButton
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Criando...' : 'Criar conta'}
                            </PrimaryButton>
                            <SecondaryLink href="/entrar">
                                Ja tenho conta
                            </SecondaryLink>
                        </Actions>
                    </Form>
                </Card>
            </Content>
            <Footer />
        </Main>
    );
}
