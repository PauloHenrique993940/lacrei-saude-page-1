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
    max-width: 1216px;
    margin: 4rem auto;
    padding: 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 0 1rem;
        margin: 2rem auto;
    }
`;

const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    color: #5166b1;
    font-size: 0.9rem;

    a {
        text-decoration: none;
        color: #1f2d44;
        &:hover {
            color: #018762;
        }
    }

    span.separator {
        color: #018762;
        font-weight: 700;
    }

    span.active {
        color: #018762;
        font-weight: 700;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #1f2d44;
    margin-bottom: 1.5rem;
    font-weight: 700;
`;

const TabContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid #f1f5f9;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: 0;
    }
`;

const Tab = styled(Link)<{ $active?: boolean }>`
    padding: 1rem 0;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: ${(props) => (props.$active ? '700' : '500')};
    color: ${(props) => (props.$active ? '#018762' : '#5166b1')};
    border-bottom: 3px solid
        ${(props) => (props.$active ? '#018762' : 'transparent')};

    &:hover {
        color: #018762;
    }
`;

const IntroSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;

    p {
        font-size: 1.15rem;
        line-height: 1.6;
        color: #5166b1;
    }
`;

const PolicyList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PolicyItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #f8fafc;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #f1f5f9;
        transform: translateX(4px);
    }

    span {
        font-size: 1.1rem;
        font-weight: 600;
        color: #1f2d44;
    }

    .arrow {
        color: #018762;
    }
`;

export default function TermosUso() {
    return (
        <Main>
            <Header />
            <Content>
                <Breadcrumb>
                    <Link href="/">Início</Link>
                    <span className="separator">&gt;</span>
                    <Link href="/seguranca">Segurança e Privacidade</Link>
                    <span className="separator">&gt;</span>
                    <span className="active">Termos de Uso</span>
                </Breadcrumb>

                <Title>Termos de uso e política de privacidade</Title>

                <TabContainer>
                    <Tab href="/termos-de-uso" $active>
                        Termos de uso
                    </Tab>
                    <Tab href="/politica-de-privacidade">
                        Política de privacidade
                    </Tab>
                </TabContainer>

                <IntroSection>
                    <p>
                        Na Lacrei Saúde, reconhecemos que você é a única pessoa
                        proprietária de seus dados pessoais.
                    </p>
                    <p>
                        Este Termo de Consentimento e Conhecimento
                        (&quot;Termo&quot;) tem como objetivo registrar a
                        manifestação livre, informada e inequívoca do titular
                        dos dados pessoais, de acordo com o Artigo 5º, XII da
                        legislação brasileira, concordando com o tratamento de
                        seus dados pela Lacrei Saúde.
                    </p>
                    <p>
                        Ao aceitar este Termo, você consente e concorda que a
                        Lacrei Saúde tomará as melhores decisões para o
                        tratamento das informações pessoais. Caso não concorde
                        com este consentimento, você não poderá prosseguir com o
                        cadastro em nossa plataforma.
                    </p>
                    <p>
                        Além disso, você declara possuir capacidade legal e as
                        autorizações e permissões necessárias para se cadastrar
                        e utilizar os serviços disponibilizados pela Lacrei
                        Saúde.
                    </p>
                </IntroSection>

                <PolicyList>
                    <PolicyItem>
                        <span>Termos de uso da pessoa usuária</span>
                        <div className="arrow">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </div>
                    </PolicyItem>
                    <PolicyItem>
                        <span>Termos de uso da pessoa profissional</span>
                        <div className="arrow">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </div>
                    </PolicyItem>
                </PolicyList>
            </Content>
            <Footer />
        </Main>
    );
}
