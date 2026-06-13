'use client';

import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import Image from 'next/image';
import Link from 'next/link';
import ImageHome from './assets/lacrei2.png';
import FundoLacrei from './assets/fundolacrei.png';
import PeopleHoding from './assets/peopleHoding.png';
import PacienteImage from './assets/person1.webp';
import ProfissionalImage from './assets/personProfissional.webp';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Hero = styled.section`
    position: relative;
    width: 100%;
    min-height: 680px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        min-height: 560px;
    }
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
    display: flex;
    align-items: center;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 1.5rem 1rem;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

const HeroText = styled.div`
    max-width: 560px;

    h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.colors.primary};
    }

    .hero-card {
        display: contents;
    }

    p {
        font-size: 2rem;
        margin-bottom: 2.4rem;
        color: ${(props) =>
            props.theme.colors.text.default || props.theme.colors.text};
        line-height: 1.45;
    }

    strong {
        color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        text-align: left;
        width: 100%;

        h1 {
            font-size: 2.3rem;
            margin-bottom: 1.5rem;
        }

        .hero-card {
            display: block;
            background: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            margin-top: 1rem;
        }

        p {
            font-size: 1.05rem;
            margin-bottom: 1.5rem;
            color: #485467;
        }
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        width: 100%;

        a {
            width: 100%;
        }

        button {
            width: 100%;
            font-size: 1.125rem;
        }
    }
`;

const HeroImageLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to right,
            #f3f4f6 25%,
            rgba(243, 244, 246, 0.55) 45%,
            rgba(243, 244, 246, 0.12) 68%
        );
    }

    img {
        filter: saturate(1.04);
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        &::after {
            background: rgba(243, 244, 246, 0.6);
        }
    }
`;

const Section = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 4rem 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 3rem 1rem;
    }
`;

const SectionTitle = styled.h2`
    text-align: center;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.secondary};
`;

const SectionLead = styled.p`
    text-align: center;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.95rem;
`;

const Divider = styled.div`
    width: 150px;
    height: 3px;
    background: ${(props) => props.theme.colors.primary};
    margin: 1.4rem auto 0;
`;

const FeatureGrid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.7rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const FeatureCard = styled.article`
    background: ${(props) => props.theme.colors.surface};
    border-radius: 14px;
    padding: 2.2rem 2rem;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
    text-align: center;

    h3 {
        margin-top: 1rem;
        font-size: 2.2rem;
        color: ${(props) => props.theme.colors.primary};
    }

    p {
        margin-top: 0.8rem;
        color: ${(props) => props.theme.colors.text};
        font-size: 1.6rem;
        line-height: 1.45;
    }
`;

const IconBubble = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: transparent;
    color: #015786;
    border: 5px solid #015786;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 48px;
        height: 48px;
    }
`;

const AboutSection = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 4.5rem auto 5.5rem;
    display: grid;
    grid-template-columns: 663px minmax(360px, 470px);
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
        max-width: 100%;
        grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
        gap: 0;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }
`;

const AboutImageContainer = styled.div`
    width: 663px;
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;
    height: 461.59px;
    position: relative;
    justify-self: center;

    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
        width: 100%;
        height: 420px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;
        height: 300px;
        margin-bottom: -2rem;
        z-index: 1;
    }
`;

const AboutCard = styled.article`
    width: min(100%, 470px);
    background: white;
    padding: 2.5rem 2.05rem 1.9rem;
    border-radius: 10px;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
    border: 1px solid #d6d9de;
    margin-left: -7rem;
    z-index: 2;
    position: relative;
    align-self: center;
    justify-self: start;

    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
        width: min(100%, 420px);
        margin-left: -4rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        margin-left: 0;
        width: 90%;
        padding: 2.5rem;
    }

    h2 {
        max-width: 320px;
        font-size: 3.2rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.secondary};
        margin-bottom: 1rem;
        line-height: 1.08;
    }

    .divider {
        width: 124px;
        height: 2px;
        background-color: ${(props) => props.theme.colors.primary};
        margin-bottom: 2rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.text.default};
        margin-bottom: 1.5rem;

        &:last-of-type {
            margin-bottom: 2rem;
        }
    }

    a {
        display: inline-flex;
    }

    button {
        min-width: 188px;
    }
`;

const StepsSection = styled(Section)`
    background: linear-gradient(
        135deg,
        #f7f8fa 0%,
        rgba(232, 228, 239, 0.4) 50%,
        #f7f8fa 100%
    );
    max-width: none;
    margin: 0;
    padding: 4rem 0;

    > div {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
`;

const StepsGrid = styled.div`
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const StepCard = styled.article`
    background: ${(props) => props.theme.colors.white};
    border-radius: 12px;
    padding: 2rem 1.6rem;
    text-align: center;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);

    p {
        margin-top: 1.1rem;
        color: ${(props) => props.theme.colors.secondary};
        font-size: 1.35rem;
        line-height: 1.55;
    }
`;

const StepCircle = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    background: #015786;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 6px 16px rgba(1, 87, 134, 0.25);

    .number-bubble {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 36px;
        height: 36px;
        background: #015786;
        border: 3px solid #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.125rem;
        font-weight: 700;
        color: #ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    svg {
        width: 48px;
        height: 48px;
    }
`;

const AudienceSection = styled.section`
    padding: 4rem 0;
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;

    > div {
        display: flex;
        flex-direction: column;
        gap: 10rem;
        padding: 0 2rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 2rem 0;
        > div {
            padding: 0 1rem;
            gap: 2rem;
        }
    }
`;

const AudienceCard = styled.article<{ $reverse?: boolean }>`
    background: ${(props) => props.theme.colors.white};
    border-radius: 34px;
    overflow: hidden;
    display: flex;
    flex-direction: ${(props) => (props.$reverse ? 'row-reverse' : 'row')};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    align-items: center;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        border-radius: 16px;
    }
`;

const AudienceImage = styled.div<{ $reverse?: boolean }>`
    position: relative;
    flex: 1;
    height: 360px;
    background: #015786;
    clip-path: ${(props) =>
        props.$reverse ? 'circle(85% at 91% 46%)' : 'circle(85.2% at 11% 49%)'};
    border-radius: ${(props) =>
        props.$reverse ? '0px 34px 34px 0px' : '34px 0px 0px 34px'};
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

const AudienceContent = styled.div`
    flex: 1.2;
    padding: 2.5rem;

    h3 {
        color: ${(props) => props.theme.colors.secondary};
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    p {
        color: ${(props) => props.theme.colors.text.default};
        font-size: 1.125rem;
        line-height: 1.5;
        margin-bottom: 2rem;
        border-left: 2px solid ${(props) => props.theme.colors.primary};
        padding-left: 1rem;
    }

    a {
        display: inline-block;
        width: 100%;
    }

    button {
        width: 100%;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 2rem 1.5rem;
        text-align: left;
    }
`;

const FinalSection = styled(Section)`
    h2 {
        text-align: center;
        font-size: 3rem;
        color: ${(props) => props.theme.colors.secondary};
    }
`;

const FinalGrid = styled.div`
    margin: 2.3rem auto 0;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const FinalCard = styled.article`
    background: ${(props) => props.theme.colors.surface};
    border-radius: 12px;
    padding: 1.8rem 1.2rem;
    text-align: center;
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
    position: relative;
    overflow: hidden;

    h3 {
        margin-top: 0.8rem;
        color: #015786;
        font-size: 18px;
    }

    p {
        margin-top: 0.8rem;
        color: ${(props) => props.theme.colors.text};
        min-height: 66px;
        line-height: 1.45;
        font-size: 16px;
    }

    a {
        display: inline-block;
        margin-top: 1rem;
    }
`;

const FinalCardButton = styled(Button)`
    && {
        min-width: 224px;
        min-height: 48px;
        padding: 0.875rem 2rem;
        border-radius: 10px;
        background-color: #ffffff;
        color: #018762;
        border-color: #018762;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    }

    &&:hover {
        background-color: #018762;
        color: #ffffff;
        border-color: #018762;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    }

    &&:active {
        background-color: #01664d;
        color: #ffffff;
        border-color: #018762;
        transform: none;
    }
`;

/** Screen: 1I / Início */
export default function Home() {
    return (
        <Main>
            <Header />

            <Hero>
                <HeroImageLayer>
                    <Image
                        src={ImageHome}
                        alt="Background Lacrei"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="100vw"
                    />
                </HeroImageLayer>

                <HeroContent>
                    <HeroText>
                        <h1>Olá, você está na Lacrei Saúde!</h1>
                        <div className="hero-card">
                            <p>
                                Conectamos pessoas <strong>LGBTQIAPN+</strong>{' '}
                                com profissionais de saúde qualificados,
                                proporcionando experiências de cuidado seguras e
                                inclusivas.
                            </p>
                            <ButtonGroup>
                                <Button as={Link} href="/entrar">
                                    Para pacientes
                                </Button>
                                <Button as={Link} href="/profissional">
                                    Para profissionais
                                </Button>
                            </ButtonGroup>
                        </div>
                    </HeroText>
                </HeroContent>
            </Hero>

            <Section>
                <SectionTitle>
                    Conheça o jeito Lacrei Saúde de cuidar
                </SectionTitle>
                <Divider />
                <SectionLead>Atendimento de qualidade e inclusivo</SectionLead>
                <FeatureGrid>
                    <FeatureCard>
                        <IconBubble>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M11 12h2a2 2 0 1 0 0-4h-3c-1.1 0-2 .9-2 2v5h3l3 3V12" />
                                <path d="M18 11V6a2 2 0 1 0-4 0v4" />
                            </svg>
                        </IconBubble>
                        <h3>Inclusão</h3>
                        <p>
                            Nossa plataforma digital é acessível e atende toda a
                            comunidade LGBTQIAPN+.
                        </p>
                    </FeatureCard>

                    <FeatureCard>
                        <IconBubble>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                        </IconBubble>
                        <h3>Acolhimento</h3>
                        <p>
                            As pessoas profissionais da saúde entendem as
                            necessidades da comunidade LGBTQIAPN+.
                        </p>
                    </FeatureCard>

                    <FeatureCard>
                        <IconBubble>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                            </svg>
                        </IconBubble>
                        <h3>Segurança</h3>
                        <p>
                            Protegemos seus dados e validamos pacientes e
                            profissionais da saúde.
                        </p>
                    </FeatureCard>
                </FeatureGrid>
            </Section>

            <AboutSection>
                <AboutImageContainer>
                    <Image
                        src={PeopleHoding}
                        alt="O papel da Lacrei Saúde na conexão entre pessoas LGBTQIAPN+ e profissionais de saúde."
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </AboutImageContainer>

                <AboutCard>
                    <h2>O que é a Lacrei Saúde?</h2>
                    <div className="divider" />
                    <p>
                        O nosso papel é construir a conexão entre as pessoas da
                        comunidade LGBTQIAPN+ que precisam de atendimento
                        clínico com profissionais da saúde.
                    </p>
                    <p>
                        Tudo isso com segurança, inclusão e representatividade.
                        Surgimos da esperança de ter um atendimento clínico
                        qualificado, seguro e empático para todas as pessoas.
                    </p>
                    <Button
                        as={Link}
                        href="/quem-somos"
                        $variant="outline"
                        style={{ padding: '0.875rem 3rem' }}
                    >
                        Conhecer
                    </Button>
                </AboutCard>
            </AboutSection>

            <StepsSection>
                <div>
                    <SectionTitle>
                        Encontre profissionais da saúde com facilidade e
                        segurança
                    </SectionTitle>
                    <Divider />

                    <StepsGrid>
                        <StepCard>
                            <StepCircle>
                                <div className="number-bubble">1</div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </StepCircle>
                            <p>
                                Cadastre-se gratuitamente em nossa plataforma.
                            </p>
                        </StepCard>
                        <StepCard>
                            <StepCircle>
                                <div className="number-bubble">2</div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </StepCircle>
                            <p>
                                Encontre profissionais da saúde qualificados
                                através de uma busca descomplicada.
                            </p>
                        </StepCard>
                        <StepCard>
                            <StepCircle>
                                <div className="number-bubble">3</div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <path d="m9 11 3 3L22 4" />
                                </svg>
                            </StepCircle>
                            <p>
                                Valide seu contato por SMS, para segurança no
                                atendimento.
                            </p>
                        </StepCard>
                        <StepCard>
                            <StepCircle>
                                <div className="number-bubble">4</div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </StepCircle>
                            <p>
                                Entre em contato com a pessoa profissional
                                escolhida e marque sua consulta.
                            </p>
                        </StepCard>
                    </StepsGrid>
                </div>
            </StepsSection>

            <AudienceSection>
                <div>
                    <AudienceCard>
                        <AudienceImage>
                            <Image
                                src={PacienteImage}
                                alt="Paciente sorridente representando a comunidade LGBTQIAPN+."
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </AudienceImage>
                        <AudienceContent>
                            <h3>Pacientes</h3>
                            <p>
                                Conecte-se a profissionais da saúde que estudam
                                as necessidades da comunidade LGBTQIAPN+.
                            </p>
                            <Button as={Link} href="/entrar">
                                Buscar atendimento
                            </Button>
                        </AudienceContent>
                    </AudienceCard>

                    <AudienceCard $reverse>
                        <AudienceImage $reverse>
                            <Image
                                src={ProfissionalImage}
                                alt="Profissional da saúde especializado no atendimento à comunidade LGBTQIAPN+."
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </AudienceImage>
                        <AudienceContent>
                            <h3>Profissionais da saúde</h3>
                            <p>
                                Buscamos profissionais da saúde qualificados que
                                priorizam o bem-estar físico e mental de pessoas
                                LGBTQIAPN+.
                            </p>
                            <Button as={Link} href="/profissional">
                                Oferecer atendimento
                            </Button>
                        </AudienceContent>
                    </AudienceCard>
                </div>
            </AudienceSection>

            <FinalSection>
                <h2>Nos preocupamos com cada detalhe de sua experiência</h2>
                <Divider />

                <FinalGrid>
                    <FinalCard>
                        <IconBubble>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 21s7-3.6 7-9V6l-7-3-7 3v6c0 5.4 7 9 7 9Z" />
                                <path d="m9.5 12.2 1.7 1.7 3.6-3.8" />
                            </svg>
                        </IconBubble>
                        <h3>Segurança</h3>
                        <p>
                            Entenda como validamos pacientes e profissionais da
                            saúde.
                        </p>
                        <FinalCardButton
                            as={Link}
                            href="/seguranca"
                            $variant="outline"
                        >
                            Entenda
                        </FinalCardButton>
                    </FinalCard>

                    <FinalCard>
                        <IconBubble>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M8 12V7.5a1.5 1.5 0 0 1 3 0V11" />
                                <path d="M11 11V6.5a1.5 1.5 0 0 1 3 0V11" />
                                <path d="M14 11V8a1.5 1.5 0 0 1 3 0v4" />
                                <path d="M8 11V9.5a1.5 1.5 0 0 0-3 0V15" />
                                <path d="M5 15H4a1.5 1.5 0 0 0 0 3h2l2.4 2.4a2 2 0 0 0 1.4.6H15a4 4 0 0 0 4-4v-2.5a1.5 1.5 0 0 0-3 0V15" />
                            </svg>
                        </IconBubble>
                        <h3>Acessibilidade</h3>
                        <p>
                            Conheça nossos recursos que tornam a plataforma
                            Lacrei Saúde acessível.
                        </p>
                        <FinalCardButton
                            as={Link}
                            href="/acessibilidade"
                            $variant="outline"
                        >
                            Conheça
                        </FinalCardButton>
                    </FinalCard>

                    <FinalCard>
                        <IconBubble>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M10.5 18.5A7.5 7.5 0 1 1 15.6 5l.4.2" />
                                <path d="M16 7.5a6.5 6.5 0 0 1 1 8.9L18 20l-3.5-1.2" />
                                <path d="M10.3 9.3a2.6 2.6 0 0 1 5 1c0 1.9-2.3 2.6-2.8 3.7" />
                                <path d="M12.5 16.8h.01" />
                            </svg>
                        </IconBubble>
                        <h3>Dúvidas Frequentes</h3>
                        <p>
                            Acesse nossa lista de perguntas frequentes e tire
                            suas dúvidas.
                        </p>
                        <FinalCardButton
                            as={Link}
                            href="/duvidas-frequentes"
                            $variant="outline"
                        >
                            Acesse
                        </FinalCardButton>
                    </FinalCard>
                </FinalGrid>
            </FinalSection>

            <Footer />
        </Main>
    );
}
