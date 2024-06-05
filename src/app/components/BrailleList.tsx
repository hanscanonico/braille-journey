'use client';

import type React from 'react';
import { useEffect } from 'react';
import styles from './BrailleList.module.css';
import { BrailleLetter } from './BrailleLetter';

interface BrailleListProps {
    brailleData: Record<string, string>;
}

const BrailleList = ({ brailleData }: BrailleListProps) => {
    useEffect(() => {
        console.log('Rendering BrailleList Component with Braille Data (Client-side):', brailleData);
    }, [brailleData]);

    return (
        <ul className={styles.brailleList}>
            {Object.entries(brailleData).map(([letter, binary]) => (
                <li key={letter} className={styles.brailleItem}>
                    <span className={styles.letter}>{letter.toUpperCase()}:</span>
                    {<BrailleLetter binary={binary} />}
                </li>
            ))}
        </ul>
    );
};

export default BrailleList;
