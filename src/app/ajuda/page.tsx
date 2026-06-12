'use client';

import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import Link from 'next/link';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    padding: 4rem 2rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.secondary};
    text-align: center;
`;

const FaqSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const Question = styled.div`
    background: ${(props) => props.theme.colors.surface};
    border-radius: 12px;
    padding: 1.6rem;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: ${(props) => props.theme.colors.primary};
    }

    p {
        font-size: 1.15rem;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.text};
    }
`;

const ContactInfo = styled.div`
    margin-top: 4rem;
    padding: 2.2rem;
    background-color: #ffffff;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);

    h2 {
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    .button-wrapper {
        margin-top: 1.5rem;
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
                    <div className="button-wrapper">
                        <Link href="/">
                            <Button>Voltar para início</Button>
                        </Link>
                    </div>
                </ContactInfo>
            </Content>
            <Footer />
        </Main>
    );
}
