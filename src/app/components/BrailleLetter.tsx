
import styles from './BrailleLetter.module.css';

interface BrailleLetterProps {
    binary: string;
}

export const BrailleLetter = ({ binary }: BrailleLetterProps) => {
    const dots = binary.split('').map((bit, index) => {
        return (
            <div
                key={index}
                className={`${styles.dot} ${bit === '1' ? styles.raised : ''}`}
            />
        );
    });

    return <div className={styles.brailleCell}>{dots}</div>;
};