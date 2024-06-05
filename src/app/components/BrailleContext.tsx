'use client';

import type React from 'react';
import { createContext, useContext, useState, type ReactNode } from 'react'

interface BrailleContextProps {
    brailleData: Record<string, string>;
    setBrailleData: (data: Record<string, string>) => void;
}

const BrailleContext = createContext<BrailleContextProps | undefined>(undefined);

export const BrailleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [brailleData, setBrailleData] = useState<Record<string, string>>({});

    return (
        <BrailleContext.Provider value={{ brailleData, setBrailleData }}>
            {children}
        </BrailleContext.Provider>
    );
};

export const useBrailleData = () => {
    const context = useContext(BrailleContext);
    if (!context) {
        throw new Error('useBrailleData must be used within a BrailleProvider');
    }
    return context;
};
