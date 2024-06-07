import type React from 'react';
import { useState } from 'react';
import styles from '../components/BrailleList.module.css';
import { BrailleLetter } from '../components/BrailleLetter';
import { getBrailleLetters } from '../functions/functions';
import Exercise from './components/Exercise';

interface ExerciseProps {
    brailleData: Record<string, string>;
}

const ExercisePage = async () => {
    const brailleData = await getBrailleLetters();

    return (
        <>
            <Exercise brailleData={brailleData} />
        </>
    );
};

export default ExercisePage;
