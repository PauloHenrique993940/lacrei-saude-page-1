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

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
`;

const Lead = styled.p`
    max-width: 820px;
    margin: 0 auto 2.2rem;
    text-align: center;
    line-height: 1.65;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
`;

const Checklist = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const Item = styled.article`
    background: ${(props) => props.theme.colors.surface};
    border-radius: 12px;
    border: 1px solid #dce6e2;
    padding: 1.5rem;

    h2 {
        font-size: 1.55rem;
        margin-bottom: 0.65rem;
        color: ${(props) => props.theme.colors.primary};
    }

    p {
        color: ${(props) => props.theme.colors.text};
        font-size: 1.08rem;
        line-height: 1.6;
    }
`;

const Cta = styled.div`
    margin-top: 2rem;
    text-align: center;

    p {
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: ${(props) => props.theme.colors.text};
    }
`;

export default function AcessibilidadePage() {
    return (
        <Main>
            <Header />
            <Content>
                <Title>Acessibilidade</Title>
                <Lead>
                    Estamos comprometidos com uma experiência inclusiva para
                    todas as pessoas. Evoluímos continuamente nossos fluxos,
                    componentes e conteúdos para ampliar autonomia e
                    acessibilidade digital.
                </Lead>

                <Checklist>
                    <Item>
                        <h2>Navegação por teclado</h2>
                        <p>
                            Priorizamos navegação por foco visível, ordem lógica
                            de elementos e atalhos compatíveis com uso sem
                            mouse.
                        </p>
                    </Item>

                    <Item>
                        <h2>Conteúdo legível</h2>
                        <p>
                            Utilizamos contraste adequado, textos descritivos e
                            linguagem clara para facilitar leitura e
                            compreensão.
                        </p>
                    </Item>

                    <Item>
                        <h2>Semântica e tecnologias assistivas</h2>
                        <p>
                            Estruturamos páginas com elementos semânticos e
                            atributos de apoio para leitores de tela.
                        </p>
                    </Item>

                    <Item>
                        <h2>Melhoria contínua</h2>
                        <p>
                            Avaliamos feedbacks e ajustamos a plataforma com
                            base em boas práticas e critérios de acessibilidade.
                        </p>
                    </Item>
                </Checklist>

                <Cta>
                    <p>Encontrou uma barreira de acesso?</p>
                    <Link href="/ajuda">
                        <Button>Reportar acessibilidade</Button>
                    </Link>
                </Cta>
            </Content>
            <Footer />
        </Main>
    );
}
