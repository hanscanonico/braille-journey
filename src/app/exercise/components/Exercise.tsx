'use client';

import type React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { BrailleLetter } from '@components/BrailleLetter';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface ExerciseProps {
    brailleData: Record<string, string>;
}

const Exercise = ({ brailleData }: ExerciseProps) => {
    const letters = Object.keys(brailleData);
    const [testLetter, setTestLetter] = useState<string | null>(letters[Math.floor(Math.random() * letters.length)]);
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');

    const handleTestButtonClick = useCallback(() => {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        setTestLetter(randomLetter);
        setUserAnswer('');
        setFeedback('');
    }, [letters]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const handleCheckAnswer = useCallback(() => {
        if (userAnswer.toLowerCase() === testLetter) {
            setFeedback('Correct!');
        } else {
            setFeedback(`Incorrect. The correct answer was ${testLetter}.`);
        }
    }, [userAnswer, testLetter]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                handleCheckAnswer();
            }
            else if (event.key === ' ') {
                handleTestButtonClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCheckAnswer, handleTestButtonClick]);

    return (
        <>
            <button
                type='button'
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleTestButtonClick}
            >
                Next
            </button>
            {testLetter && (
                <div className="mt-5">
                    <div className="text-2xl mb-3">
                        What letter is this? {<BrailleLetter binary={brailleData[testLetter]} />}
                    </div>
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={handleInputChange}
                        className="border px-2 py-1"
                    />
                    <button
                        type='button'
                        className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
                        onClick={handleCheckAnswer}
                    >
                        Check Answer
                    </button>
                    {feedback && <div className="mt-3">{feedback}</div>}
                </div>
            )}
        </>
    );
};

export default Exercise;
