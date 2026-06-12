'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';
import StyledComponentsRegistry from '../lib/registry';
import { OnboardingProvider } from './OnboardingContext';
import { AuthProvider } from './AuthContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StyledComponentsRegistry>
            <AuthProvider>
                <OnboardingProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        {children}
                    </ThemeProvider>
                </OnboardingProvider>
            </AuthProvider>
        </StyledComponentsRegistry>
    );
}
