'use client';

import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Image from 'next/image';
import FundoLacrei from '../assets/fundolacrei.png'; // Reusing matching assets if possible
import ProfissionaisSaude from '../assets/profissionaisSaude.avif';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #ffffff;
`;

const HeroSection = styled.section`
    max-width: 1216px;
    margin: 4rem auto;
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        padding: 0 1rem;
        gap: 2rem;
        margin: 2rem auto;
    }
`;

const HeroText = styled.div`
    flex: 1;
    h1 {
        font-size: 3rem;
        line-height: 1.2;
        color: #1f2d44;
        margin-bottom: 2rem;
        font-weight: 700;
    }
    p {
        font-size: 1.15rem;
        line-height: 1.6;
        color: #5166b1;
        margin-bottom: 1.5rem;
    }
    strong {
        color: #018762;
    }
`;

const HeroImageWrapper = styled.div`
    flex: 1;
    position: relative;
    height: 400px;
    border-radius: 24px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;
        height: 300px;
    }
`;

const ResourcesSection = styled.section`
    background: #f8fafc;
    padding: 6rem 2rem;
`;

const ResourcesContainer = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    text-align: center;

    h2 {
        font-size: 2rem;
        color: #1f2d44;
        margin-bottom: 1rem;
        font-weight: 700;
    }
    .subtitle {
        font-size: 1.5rem;
        color: #015786;
        margin-bottom: 4rem;
        font-weight: 700;
    }
`;

const ResourcesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const ResourceCard = styled.div`
    background: white;
    padding: 2.5rem;
    border-radius: 24px;
    text-align: left;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);

    .icon-box {
        width: 56px;
        height: 56px;
        background: #f1f5f9;
        color: #015786;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 1.5rem;
        color: #1f2d44;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    p {
        font-size: 1.1rem;
        color: #5166b1;
        line-height: 1.5;
    }
`;

const InfoSection = styled.section`
    max-width: 1216px;
    margin: 6rem auto;
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column-reverse;
        padding: 0 1rem;
        gap: 2rem;
    }
`;

const InfoText = styled.div`
    flex: 1;
    h2 {
        font-size: 2.5rem;
        color: #1f2d44;
        margin-bottom: 2rem;
        font-weight: 700;
    }
    p {
        font-size: 1.15rem;
        line-height: 1.6;
        color: #5166b1;
        margin-bottom: 1.5rem;
    }
`;

const ImprovementSection = styled.section`
    background-color: #f1f5f9;
    padding: 4rem 2rem;
    text-align: center;

    h2 {
        font-size: 1.75rem;
        color: #1f2d44;
        margin-bottom: 1.5rem;
        font-weight: 700;
    }

    p {
        font-size: 1.15rem;
        color: #5166b1;
        max-width: 800px;
        margin: 0 auto;

        a {
            color: #018762;
            text-decoration: none;
            font-weight: 700;
        }
    }
`;

export default function Acessibilidade() {
    return (
        <Main>
            <Header />

            <HeroSection>
                <HeroText>
                    <h1>A Lacrei Saúde é acessível!</h1>
                    <p>
                        A inclusão é um dos nossos valores fundamentais, por
                        isso construímos a Lacrei Saúde para que seja acessível
                        para o maior número de pessoas.
                    </p>
                    <p>
                        Além do atendimento qualificado e empático na área da
                        saúde, queremos que a comunidade{' '}
                        <strong>LGBTQIAPN+</strong> tenha a melhor experiência
                        digital possível.
                    </p>
                </HeroText>
                <HeroImageWrapper>
                    <Image
                        src={FundoLacrei}
                        alt="Inclusão digital"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </HeroImageWrapper>
            </HeroSection>

            <ResourcesSection>
                <ResourcesContainer>
                    <h2>Nossos recursos de acessibilidade</h2>
                    <p className="subtitle">
                        Conheça as ferramentas que usamos para melhorar sua
                        experiência
                    </p>

                    <ResourcesGrid>
                        <ResourceCard>
                            <div className="icon-box">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                    <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                                    <line x1="12" y1="19" x2="12" y2="22" />
                                </svg>
                            </div>
                            <h3>Leitores de tela</h3>
                            <p>
                                Boa experiência de navegação para o Voice Over
                                no IOS e para o Talkback no Android.
                            </p>
                        </ResourceCard>

                        <ResourceCard>
                            <div className="icon-box">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="20"
                                        height="12"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    />
                                    <line x1="6" y1="12" x2="6" y2="12" />
                                    <line x1="10" y1="12" x2="10" y2="12" />
                                    <line x1="14" y1="12" x2="14" y2="12" />
                                    <line x1="18" y1="12" x2="18" y2="12" />
                                    <line x1="10" y1="16" x2="14" y2="16" />
                                </svg>
                            </div>
                            <h3>Teclado e área de toque</h3>
                            <p>
                                Navegação por teclado com foco ativo e área de
                                toque com tamanho mínimo de 48dp/48dp.
                            </p>
                        </ResourceCard>

                        <ResourceCard>
                            <div className="icon-box">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="4 7 4 4 20 4 20 7" />
                                    <line x1="9" y1="20" x2="15" y2="20" />
                                    <line x1="12" y1="4" x2="12" y2="20" />
                                </svg>
                            </div>
                            <h3>Fontes</h3>
                            <p>
                                Contraste mínimo de 4.5:1 e suporte para fontes
                                até 400% nas versões desktop e mobile.
                            </p>
                        </ResourceCard>
                    </ResourcesGrid>
                </ResourcesContainer>
            </ResourcesSection>

            <InfoSection>
                <HeroImageWrapper>
                    <Image
                        src={ProfissionaisSaude}
                        alt="Propósito da Lacrei"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </HeroImageWrapper>
                <InfoText>
                    <h2>A plataforma Lacrei Saúde</h2>
                    <p>
                        Desenvolvemos nossa plataforma acessível para o maior
                        número de pessoas. Para isso usamos boas práticas de
                        acessibilidade digital e estamos sempre nos aprimorando.
                    </p>
                    <p>
                        Temos o compromisso de contemplar pessoas com
                        deficiência tanto sensoriais quanto físicas e
                        proporcionar uma navegação autônoma e segura.
                    </p>
                </InfoText>
            </InfoSection>

            <ImprovementSection>
                <h2>Nos ajude a melhorar!</h2>
                <p>
                    Se você encontrou problemas de acessibilidade ou teve
                    dificuldade para usar nossa plataforma com tecnologia
                    assistiva, por favor, entre em contato conosco pelo e-mail{' '}
                    <a href="mailto:acessibilidade@lacreisaude.com.br">
                        acessibilidade@lacreisaude.com.br
                    </a>
                    .
                </p>
            </ImprovementSection>

            <Footer />
        </Main>
    );
}
