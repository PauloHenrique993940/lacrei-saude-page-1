'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserData } from '@/services/api';

interface OnboardingContextType {
    userData: UserData;
    updateData: (data: Partial<UserData>) => void;
    resetData: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
    const [userData, setUserData] = useState<UserData>({});

    const updateData = (data: Partial<UserData>) => {
        setUserData((prev) => ({ ...prev, ...data }));
    };

    const resetData = () => {
        setUserData({});
    };

    return (
        <OnboardingContext.Provider value={{ userData, updateData, resetData }}>
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);
    if (context === undefined) {
        throw new Error('useOnboarding must be used within an OnboardingProvider');
    }
    return context;
}
