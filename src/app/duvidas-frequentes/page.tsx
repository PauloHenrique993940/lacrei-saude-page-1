'use client';

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
    color: #5166b1;
    font-size: 1rem;
    margin-bottom: 2rem;

    a {
        color: #1f2d44;
        text-decoration: none;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 0.4rem;

        svg {
            color: #018762;
        }

        &:hover {
            color: #018762;
        }
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #1f2d44;
    margin-bottom: 1rem;
    font-weight: 700;
`;

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: #5166b1;
    margin-bottom: 3rem;
`;

const QuestionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const QuestionItem = styled.details`
    border: 1px solid #dbe5e1;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    transition: all 0.2s ease-in-out;

    &[open] {
        border-color: #018762;
        background-color: #f8fafc;
    }

    summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        list-style: none;
        font-size: 1.15rem;
        color: #1f2d44;
        font-weight: 600;

        &::-webkit-details-marker {
            display: none;
        }

        .icon {
            color: #018762;
            transition: transform 0.2s;
        }
    }

    &[open] summary .icon {
        transform: rotate(180deg);
    }

    .answer {
        margin-top: 1rem;
        font-size: 1.1rem;
        color: #5166b1;
        line-height: 1.6;
    }
`;

export default function DuvidasFrequentes() {
    const questions = [
        {
            q: 'Como criar uma conta na Lacrei Saúde?',
            a: "Para criar sua conta, clique no botão 'Entrar' no canto superior direito e selecione se você é Paciente ou Profissional de Saúde. Em seguida, preencha seus dados básicos e siga as instruções enviadas por e-mail.",
        },
        {
            q: 'É seguro compartilhar meus dados na plataforma?',
            a: 'Sim. A Lacrei Saúde utiliza criptografia de ponta a ponta e segue rigorosamente a LGPD. Seus dados de saúde são sigilosos e nunca compartilhados sem sua autorização explícita.',
        },
        {
            q: 'Como os profissionais são validados?',
            a: 'Nossa equipe verifica manualmente o registro profissional (CRM, CRP, etc.) e a identidade de cada profissional antes de sua ativação na plataforma.',
        },
        {
            q: 'O atendimento é gratuito?',
            a: 'O cadastro e a busca por profissionais na plataforma são gratuitos. O valor das consultas é definido individualmente por cada profissional.',
        },
    ];

    return (
        <Main>
            <Header />
            <Content>
                <Breadcrumb>
                    <Link href="/">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Início
                    </Link>
                </Breadcrumb>

                <Title>Dúvidas frequentes</Title>
                <Subtitle>
                    Reunimos as principais perguntas para ajudar você a navegar
                    na Lacrei Saúde com tranquilidade.
                </Subtitle>

                <QuestionList>
                    {questions.map((item, index) => (
                        <QuestionItem key={index}>
                            <summary>
                                {item.q}
                                <div className="icon">
                                    <svg
                                        width="24"
                                        height="24"
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
                            </summary>
                            <div className="answer">{item.a}</div>
                        </QuestionItem>
                    ))}
                </QuestionList>
            </Content>
            <Footer />
        </Main>
    );
}
