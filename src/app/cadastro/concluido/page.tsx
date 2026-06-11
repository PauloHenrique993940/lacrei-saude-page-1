'use client';

import React from 'react';
import styled from 'styled-components';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { saveUserOnboarding } from '@/services/api';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    padding: 3rem 2rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
`;

const Text = styled.p`
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    color: ${(props) => props.theme?.colors?.text || '#515151'};
    line-height: 1.5;
`;

const SuccessIcon = styled.div`
    width: 120px;
    height: 120px;
    background-color: ${(props) => props.theme?.colors?.primary || '#018762'};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    box-shadow: 0 4px 12px rgba(1, 135, 98, 0.2);
`;

const LoadingText = styled.p`
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
`;

export default function Concluido() {
    const [isSaving, setIsSaving] = useState(true);

    useEffect(() => {
        // Simula o salvamento dos dados ao chegar na tela final
        saveUserOnboarding({}).then(() => {
            setIsSaving(false);
        });
    }, []);

    return (
        <Main>
            <Header />
            <Content>
                {isSaving ? (
                    <>
                        <LoadingText>Finalizando seu cadastro...</LoadingText>
                    </>
                ) : (
                    <>
                        <SuccessIcon>✓</SuccessIcon>
                        <Title>Cadastro finalizado!</Title>
                        <Text>
                            Obrigado por completar o seu perfil. Agora você já
                            pode buscar profissionais de saúde que atendam às
                            suas necessidades específicas de forma segura e
                            inclusiva.
                        </Text>
                        <Link href="/">
                            <Button>Ir para a página inicial</Button>
                        </Link>
                    </>
                )}
            </Content>
            <Footer />
        </Main>
    );
}
