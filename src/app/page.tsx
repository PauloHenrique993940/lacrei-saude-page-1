'use client';

import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import Image from 'next/image';
import Link from 'next/link';
import ImageHome from './assets/lacrei2.png';
import FundoLacrei from './assets/fundolacrei.png';
import PacienteImage from './assets/paciente.png';
import ProfissionalImage from './assets/profissiona.png';

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
        padding: 1rem;
        flex-direction: column;
        justify-content: center;
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

    p {
        font-size: 2rem;
        margin-bottom: 2.4rem;
        color: ${(props) => props.theme.colors.text};
        line-height: 1.45;
    }

    strong {
        color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        text-align: left;

        h1 {
            font-size: 2.3rem;
        }

        p {
            font-size: 1.3rem;
        }
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;

        a {
            flex: 1;
        }

        button {
            width: 100%;
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
    background: ${(props) => props.theme.gradients.rainbow};
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
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: ${(props) => props.theme.gradients.rainbow};
    color: #ffffff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    box-shadow: 0 4px 12px rgba(1, 135, 98, 0.2);
`;

const AboutSection = styled(Section)`
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 1.5rem;
    align-items: center;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const AboutImage = styled.div`
    min-height: 430px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background: #dcebe6;
`;

const AboutCard = styled.article`
    background: ${(props) => props.theme.colors.white};
    border-radius: 12px;
    border: 1px solid #dbe1e8;
    padding: 2rem;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);

    h3 {
        font-size: 3rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    p {
        margin-top: 1rem;
        color: ${(props) => props.theme.colors.text};
        font-size: 1.5rem;
        line-height: 1.6;
    }

    a {
        display: inline-block;
        margin-top: 1.7rem;
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
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 50%;
    background: ${(props) => props.theme.gradients.rainbow};
    color: #ffffff;
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 16px rgba(1, 135, 98, 0.25);
`;

const AudienceSection = styled(Section)`
    background: ${(props) => props.theme.gradients.rainbowSubtle};
    max-width: none;
    margin: 0;
    padding: 4rem 0;

    > div {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`;

const AudienceCard = styled.article`
    background: ${(props) => props.theme.colors.white};
    border-radius: 24px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const AudienceImage = styled.div`
    position: relative;
    min-height: 260px;
    background: linear-gradient(135deg, #018762 0%, #008026 100%);

    img {
        opacity: 0.88;
    }
`;

const AudienceContent = styled.div`
    padding: 2.1rem;

    h3 {
        color: ${(props) => props.theme.colors.secondary};
        font-size: 3rem;
    }

    p {
        margin-top: 0.8rem;
        color: ${(props) => props.theme.colors.text};
        font-size: 1.5rem;
        line-height: 1.55;
        border-left: 3px solid ${(props) => props.theme.colors.primary};
        padding-left: 0.85rem;
    }

    a {
        margin-top: 1.4rem;
        display: inline-block;
        width: 100%;
    }

    button {
        width: 100%;
        font-size: 1.45rem;
        padding: 0.95rem 1.2rem;
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

    &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: ${(props) => props.theme.gradients.rainbow};
    }

    h3 {
        margin-top: 0.8rem;
        color: ${(props) => props.theme.colors.primary};
        font-size: 2.1rem;
    }

    p {
        margin-top: 0.8rem;
        color: ${(props) => props.theme.colors.text};
        min-height: 66px;
        line-height: 1.45;
        font-size: 1.3rem;
    }

    a {
        display: inline-block;
        margin-top: 1rem;
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
                        unoptimized
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </HeroImageLayer>

                <HeroContent>
                    <HeroText>
                        <h1>Olá, você está na Lacrei Saúde!</h1>
                        <p>
                            Conectamos pessoas <strong>LGBTQIAPN+</strong> com
                            profissionais de saúde qualificados, proporcionando
                            experiências de cuidado seguras e inclusivas.
                        </p>
                        <ButtonGroup>
                            <Link href="/entrar">
                                <Button>Para pacientes</Button>
                            </Link>
                            <Link href="/profissional">
                                <Button>Para profissionais</Button>
                            </Link>
                        </ButtonGroup>
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
                        <IconBubble>🤝</IconBubble>
                        <h3>Inclusão</h3>
                        <p>
                            Nossa plataforma digital é acessível e atende toda a
                            comunidade LGBTQIAPN+.
                        </p>
                    </FeatureCard>

                    <FeatureCard>
                        <IconBubble>♡</IconBubble>
                        <h3>Acolhimento</h3>
                        <p>
                            As pessoas profissionais da saúde entendem as
                            necessidades da comunidade LGBTQIAPN+.
                        </p>
                    </FeatureCard>

                    <FeatureCard>
                        <IconBubble>🛡️</IconBubble>
                        <h3>Segurança</h3>
                        <p>
                            Protegemos seus dados e validamos pacientes e
                            profissionais da saúde.
                        </p>
                    </FeatureCard>
                </FeatureGrid>
            </Section>

            <AboutSection>
                <AboutImage>
                    <Image
                        src={FundoLacrei}
                        alt="Duas pessoas segurando uma bandeira arco-íris representando inclusão e diversidade"
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized
                    />
                </AboutImage>

                <AboutCard>
                    <h3>O que é a Lacrei Saúde?</h3>
                    <p>
                        A Lacrei Saúde conecta pessoas da comunidade LGBTQIAPN+
                        com profissionais de saúde comprometidos em oferecer um
                        atendimento seguro, inclusivo e respeitoso.
                    </p>
                    <p>
                        Nosso propósito é garantir representatividade, empatia e
                        acolhimento em cada consulta promovendo acesso
                        igualitário à saúde para todas as pessoas.
                    </p>
                    <Link href="/quem-somos">
                        <Button $variant="outline">Conhecer</Button>
                    </Link>
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
                            <StepCircle>✉</StepCircle>
                            <p>
                                Cadastre-se gratuitamente em nossa plataforma.
                            </p>
                        </StepCard>
                        <StepCard>
                            <StepCircle>⌕</StepCircle>
                            <p>
                                Encontre profissionais da saúde qualificados
                                através de uma busca descomplicada.
                            </p>
                        </StepCard>
                        <StepCard>
                            <StepCircle>✓</StepCircle>
                            <p>
                                Valide seu contato por SMS para garantir
                                segurança no atendimento.
                            </p>
                        </StepCard>
                        <StepCard>
                            <StepCircle>☎</StepCircle>
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
                                alt="Pessoa sorrindo com cabelo colorido e bandeira LGBTQIAPN+ sobre os ombros"
                                fill
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                        </AudienceImage>
                        <AudienceContent>
                            <h3>Pacientes</h3>
                            <p>
                                Conecte-se a profissionais da saúde que entendem
                                e estudam as necessidades da comunidade
                                LGBTQIAPN+.
                            </p>
                            <Link href="/entrar">
                                <Button>Buscar atendimento</Button>
                            </Link>
                        </AudienceContent>
                    </AudienceCard>

                    <AudienceCard>
                        <AudienceImage>
                            <Image
                                src={ProfissionalImage}
                                alt="Profissional da saúde conversando com empatia simbolizando acolhimento e diversidade"
                                fill
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                        </AudienceImage>
                        <AudienceContent>
                            <h3>Sou Profissional</h3>
                            <p>
                                Amplie sua rede de pacientes e ofereça um
                                atendimento que valoriza a diversidade.
                            </p>
                            <Link href="/profissional">
                                <Button>Cadastrar como Profissional</Button>
                            </Link>
                        </AudienceContent>
                    </AudienceCard>
                </div>
            </AudienceSection>

            <FinalSection>
                <h2>Nos preocupamos com cada detalhe de sua experiência</h2>

                <FinalGrid>
                    <FinalCard>
                        <IconBubble>🛡️</IconBubble>
                        <h3>Segurança</h3>
                        <p>
                            Entenda como validamos pacientes e profissionais da
                            saúde.
                        </p>
                        <Link href="/seguranca">
                            <Button>Entenda</Button>
                        </Link>
                    </FinalCard>

                    <FinalCard>
                        <IconBubble>🤟</IconBubble>
                        <h3>Acessibilidade</h3>
                        <p>
                            Conheça nossos recursos que tornam a plataforma
                            Lacrei Saúde acessível.
                        </p>
                        <Link href="/acessibilidade">
                            <Button>Conheça</Button>
                        </Link>
                    </FinalCard>

                    <FinalCard>
                        <IconBubble>❓</IconBubble>
                        <h3>Dúvidas Frequentes</h3>
                        <p>
                            Acesse nossa lista de perguntas frequentes e tire
                            suas dúvidas.
                        </p>
                        <Link href="/duvidas-frequentes">
                            <Button>Acesse</Button>
                        </Link>
                    </FinalCard>
                </FinalGrid>
            </FinalSection>

            <Footer />
        </Main>
    );
}
