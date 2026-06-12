'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 2rem 1rem;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme.colors.secondary};
`;

const Subtitle = styled.p`
    text-align: center;
    margin: 0 auto 2rem;
    max-width: 760px;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.15rem;
    line-height: 1.6;
`;

const List = styled.div`
    display: grid;
    gap: 0.9rem;
`;

const FaqItem = styled.details`
    background: ${(props) => props.theme.colors.surface};
    border: 1px solid #dbe5e1;
    border-radius: 12px;
    padding: 1rem 1.2rem;

    summary {
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.primary};
        list-style: none;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    p {
        margin-top: 0.8rem;
        color: ${(props) => props.theme.colors.text};
        line-height: 1.6;
        font-size: 1.08rem;
    }
`;

const Cta = styled.div`
    margin-top: 2rem;
    text-align: center;

    p {
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.text};
        font-size: 1.1rem;
    }
`;

export default function DuvidasFrequentesPage() {
    return (
        <Main>
            <Header />
            <Content>
                <Title>Dúvidas frequentes</Title>
                <Subtitle>
                    Reunimos respostas para as perguntas mais comuns sobre
                    cadastro, segurança e uso da plataforma.
                </Subtitle>

                <List>
                    <FaqItem>
                        <summary>Como criar uma conta na Lacrei Saúde?</summary>
                        <p>
                            Clique em Entrar no topo da página e siga as etapas
                            de cadastro. Você poderá completar seu perfil em
                            poucos minutos.
                        </p>
                    </FaqItem>

                    <FaqItem>
                        <summary>
                            Posso buscar profissionais com atendimento online?
                        </summary>
                        <p>
                            Sim. Após entrar na plataforma, você pode filtrar
                            por modalidade de atendimento e especialidade.
                        </p>
                    </FaqItem>

                    <FaqItem>
                        <summary>Como a plataforma protege meus dados?</summary>
                        <p>
                            Aplicamos medidas de segurança e seguimos diretrizes
                            de privacidade para reduzir riscos e proteger
                            informações pessoais.
                        </p>
                    </FaqItem>

                    <FaqItem>
                        <summary>O que faço se esquecer minha senha?</summary>
                        <p>
                            Acesse a página Esqueci senha, informe seu e-mail e
                            siga o processo de redefinição enviado para sua
                            caixa de entrada.
                        </p>
                    </FaqItem>
                </List>

                <Cta>
                    <p>Não encontrou sua resposta?</p>
                    <Link href="/ajuda">
                        <Button>Entrar em contato</Button>
                    </Link>
                </Cta>
            </Content>
            <Footer />
        </Main>
    );
}
