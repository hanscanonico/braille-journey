
import type React from 'react';
import { getBrailleLetters } from '@functions/functions';
import Exercise from './components/Exercise';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface ExerciseProps {
    brailleData: Record<string, string>;
}

const ExercisePage = async () => {
    const brailleData = await getBrailleLetters();

    return (
        <>
            <div className="flex flex-col items-center justify-between p-24 bg-gray-100">
                <div className="mt-10 text-center">
                    <Exercise brailleData={brailleData} />
                </div>
            </div>
        </>
    );
};

export default ExercisePage;
