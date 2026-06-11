'use client';

import React from 'react';
import styled from 'styled-components';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import Link from 'next/link';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding: 4rem 2rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${(props) => props.theme?.colors?.secondary || '#2D2D2D'};
`;

const FaqSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Question = styled.div`
    h3 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: ${(props) => props.theme?.colors?.primary || '#018762'};
    }
    p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${(props) => props.theme?.colors?.text || '#515151'};
    }
`;

const ContactInfo = styled.div`
    margin-top: 4rem;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
        color: ${(props) => props.theme?.colors?.secondary || '#2D2D2D'};
    }
`;

export default function Ajuda() {
    return (
        <Main>
            <Header />
            <Content>
                <Title>Como podemos ajudar?</Title>

                <FaqSection>
                    <Question>
                        <h3>Como faço meu cadastro?</h3>
                        <p>
                            Para se cadastrar, basta clicar no botão "Entrar" no
                            topo da página e seguir os passos da nossa jornada
                            inclusiva de onboarding.
                        </p>
                    </Question>

                    <Question>
                        <h3>Como encontro um profissional?</h3>
                        <p>
                            Após finalizar seu cadastro, você poderá buscar por
                            especialistas filtrando por atendimento presencial
                            ou online, garantindo um cuidado seguro.
                        </p>
                    </Question>

                    <Question>
                        <h3>A Lacrei Saúde é gratuita?</h3>
                        <p>
                            Nossa plataforma de conexão é gratuita para
                            pacientes. O valor da consulta é acordado
                            diretamente com o profissional escolhido.
                        </p>
                    </Question>
                </FaqSection>

                <ContactInfo>
                    <h2>Ainda tem dúvidas?</h2>
                    <p>
                        Entre em contato pelo e-mail: contato@lacreisaude.com.br
                    </p>
                    <Link href="/">
                        <Button style={{ marginTop: '1.5rem' }}>
                            Voltar para início
                        </Button>
                    </Link>
                </ContactInfo>
            </Content>
            <Footer />
        </Main>
    );
}
