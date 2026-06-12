'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Link from 'next/link';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #ffffff;
`;

const Content = styled.section`
    max-width: 800px;
    margin: 4rem auto;
    width: 100%;
    padding: 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 0 1rem;
        margin: 2rem auto;
    }
`;

const Breadcrumb = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: #1f2d44;
    font-size: 1rem;
    margin-bottom: 3.5rem;

    span.separator {
        color: #018762;
        font-weight: 700;
    }

    .home-link {
        color: #1f2d44;
        text-decoration: none;
        font-weight: 400;
    }

    .current-page {
        color: #018762;
        font-weight: 700;
    }
`;

const Title = styled.h1`
    font-size: 3.5rem;
    color: #018762;
    margin-bottom: 2rem;
    font-weight: 700;
    line-height: 1.1;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        font-size: 2.5rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #1b2128;
    margin-bottom: 4rem;
    font-weight: 400;
`;

const QuestionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const QuestionItem = styled.div`
    border: none;
    margin-bottom: 2rem;
    overflow: hidden;

    .question-header {
        border: 1px solid #018762;
        border-radius: 8px;
        padding: 1.25rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        background-color: #ffffff;
        transition: all 0.2s;

        &:hover {
            background-color: #f8fafc;
        }

        p {
            font-size: 1.15rem;
            color: #1b2128;
            font-weight: 400;
        }

        .icon {
            color: #018762;
            cursor: pointer;
            transition: transform 0.3s ease;

            &.open {
                transform: rotate(180deg);
            }
        }
    }

    .answer {
        margin-top: 0.75rem;
        padding: 1.5rem 1.5rem 2rem 1.5rem;
        background-color: #ffffff;
        border: 1px solid #018762;
        border-radius: 8px;
        color: #1b2128;
        font-size: 1.15rem;
        line-height: 1.6;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
`;

const questions = [
    {
        q: 'Como faço para me cadastrar na Lacrei Saúde?',
        a: 'Na página inicial, clique em “Para pacientes” ou “Buscar atendimento” caso você seja um paciente. Caso você seja um profissional da saúde, clique em “Para profissionais” ou “Oferecer atendimento”.',
    },
    {
        q: 'Como faço para alterar o meu cadastro?',
        a: 'Você pode alterar seus dados acessando seu perfil após fazer o login.',
    },
    {
        q: 'Como faço para excluir meu cadastro na Lacrei Saúde?',
        a: 'Para excluir seu cadastro, entre em contato com nosso suporte através do e-mail disponível no rodapé.',
    },
    {
        q: 'Esqueci minha senha. Como faço para acessar minha conta?',
        a: 'Clique em "Esqueci minha senha" na página de login e siga as instruções enviadas por e-mail.',
    },
    {
        q: 'Não estou recebendo o e-mail de validação. O que faço?',
        a: 'Verifique sua caixa de spam ou lixo eletrônico. Se não encontrar, solicite um novo envio.',
    },
];

export default function Ajuda() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Main>
            <Header />
            <Content>
                <Breadcrumb>
                    <Link href="/" className="home-link">
                        Início
                    </Link>
                    <span className="separator">&gt;</span>
                    <span className="current-page">Dúvidas Frequentes</span>
                </Breadcrumb>

                <Title>Dúvidas Frequentes</Title>
                <Subtitle>
                    Aqui, você encontra as dúvidas mais frequentes!
                </Subtitle>

                <QuestionList>
                    {questions.map((item, i) => (
                        <QuestionItem key={i}>
                            <div
                                className="question-header"
                                onClick={() => toggleQuestion(i)}
                            >
                                <p>{item.q}</p>
                                <div
                                    className={`icon ${
                                        openIndex === i ? 'open' : ''
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleQuestion(i);
                                    }}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                            {openIndex === i && (
                                <div className="answer">
                                    <p>{item.a}</p>
                                </div>
                            )}
                        </QuestionItem>
                    ))}
                </QuestionList>
            </Content>
            <Footer />
        </Main>
    );
}
