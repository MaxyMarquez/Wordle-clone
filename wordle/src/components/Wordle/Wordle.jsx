import React, { useEffect, useState } from 'react';
import { useWordle } from '../../hooks/useWordle';
import Grid from '../Grid/Grid';
import Modal from '../Modal/Modal';
import Keyboard from '../Keyboard/Keyboard';
import './wordle.scss';

const Wordle = ({ solution }) => {
    const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys, handleLetterClick } = useWordle(solution);
    const [showModal, setShowModal] = useState(false);
    console.log(currentGuess);
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect || turn > 5) {
            setTimeout(() => setShowModal(true), 1500);
            window.removeEventListener('keyup', handleKeyup);
        }

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <>
            <div className='wordle-container'>
                <h1 className='wordle-title'>Wordle Clone</h1>
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
                <Keyboard usedKeys={usedKeys} />
                {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
            </div>
        </>
    );
}

export default Wordle;

