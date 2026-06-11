'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';
import StyledComponentsRegistry from '@/lib/registry';
import { OnboardingProvider } from './OnboardingContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StyledComponentsRegistry>
            <OnboardingProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {children}
                </ThemeProvider>
            </OnboardingProvider>
        </StyledComponentsRegistry>
    );
}
