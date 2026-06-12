'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

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

export default function EsqueciSenhaPage() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSent(Boolean(email));
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

                    <Form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="voce@email.com"
                            required
                        />
                        <SubmitButton type="submit">Enviar link</SubmitButton>
                        {sent && (
                            <Success>
                                Se este e-mail estiver cadastrado, voce recebera
                                as instrucoes em instantes.
                            </Success>
                        )}
                    </Form>

                    <ReturnLink href="/entrar">Voltar para entrar</ReturnLink>
                </Card>
            </Content>
            <Footer />
        </Main>
    );
}
