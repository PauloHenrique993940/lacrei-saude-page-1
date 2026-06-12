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
    max-width: 1100px;
    margin: 0 auto;
    padding: 4rem 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 2rem 1rem;
    }
`;

const Hero = styled.div`
    text-align: center;
    margin-bottom: 2.5rem;

    h1 {
        font-size: 3rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    p {
        margin: 1rem auto 0;
        max-width: 760px;
        line-height: 1.65;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.text};
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.article`
    background: ${(props) => props.theme.colors.surface};
    border-radius: 12px;
    padding: 1.8rem;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);

    h2 {
        font-size: 1.7rem;
        margin-bottom: 0.8rem;
        color: ${(props) => props.theme.colors.primary};
    }

    p,
    li {
        color: ${(props) => props.theme.colors.text};
        font-size: 1.1rem;
        line-height: 1.6;
    }

    ul {
        margin-top: 0.5rem;
        padding-left: 1.25rem;
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

export default function SegurancaPage() {
    return (
        <Main>
            <Header />
            <Content>
                <Hero>
                    <h1>Segurança e privacidade</h1>
                    <p>
                        Cuidar da sua saúde exige confiança. Por isso, adotamos
                        práticas de segurança para proteger dados pessoais,
                        comunicações e informações sensíveis em toda a jornada
                        da Lacrei Saúde.
                    </p>
                </Hero>

                <Grid>
                    <Card>
                        <h2>Proteção de dados</h2>
                        <p>
                            Tratamos dados pessoais de acordo com a LGPD,
                            aplicando medidas administrativas e técnicas para
                            reduzir riscos de acesso indevido.
                        </p>
                    </Card>

                    <Card>
                        <h2>Conta e autenticação</h2>
                        <ul>
                            <li>Use uma senha forte e exclusiva.</li>
                            <li>Não compartilhe seus dados de acesso.</li>
                            <li>
                                Encerre sua sessão em dispositivos públicos.
                            </li>
                        </ul>
                    </Card>

                    <Card>
                        <h2>Boas práticas digitais</h2>
                        <ul>
                            <li>Desconfie de links enviados por terceiros.</li>
                            <li>Confira sempre o endereço oficial do site.</li>
                            <li>
                                Não informe dados sensíveis fora da plataforma.
                            </li>
                        </ul>
                    </Card>

                    <Card>
                        <h2>Relato de incidente</h2>
                        <p>
                            Se notar comportamento suspeito, entre em contato
                            pelo canal de suporte para análise e orientação da
                            nossa equipe.
                        </p>
                    </Card>
                </Grid>

                <Cta>
                    <p>Precisa de ajuda com a sua conta ou segurança?</p>
                    <Link href="/ajuda">
                        <Button>Falar com suporte</Button>
                    </Link>
                </Cta>
            </Content>
            <Footer />
        </Main>
    );
}
