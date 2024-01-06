import React, { useState } from 'react'

export const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});


    const formatGuess = () => {
        let solutionArr = [...solution];
        let formattedGuess = [...currentGuess].map((letter) => {
            return {
                key: letter,
                color: 'grey'
            }
        });

        formattedGuess.forEach((letter, index) => {
            if (solutionArr[index] === letter.key) {
                formattedGuess[index].color = 'green';
                solutionArr[index] = null;
            }
        });

        formattedGuess.forEach((letter, index) => {
            if (solutionArr.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow';
                solutionArr[solutionArr.indexOf(letter.key)] = null;
            }
        });

        return formattedGuess;
    }

    const newGuess = (formattedGuess) => {
        console.log(formattedGuess);
        let correctGuess = formattedGuess.every((letter) => letter.color === 'green');

        if (correctGuess) {
            setIsCorrect(true);
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });

        setTurn((prevTurn) => {
            return prevTurn + 1;
        });

        setUsedKeys(prevUsedKeys => {
            formattedGuess.forEach((letter) => {
                const currentColor = prevUsedKeys[letter.key]

                if (letter.color === 'green') {
                    prevUsedKeys[letter.key] = 'green'
                    return
                }
                if (letter.color === 'yellow' && currentColor !== 'green') {
                    prevUsedKeys[letter.key] = 'yellow'
                    return
                }
                if (letter.color === 'grey' && currentColor !== ('green' || 'yellow')) {
                    prevUsedKeys[letter.key] = 'grey'
                    return
                }
            })

            return prevUsedKeys
        });
        setCurrentGuess('');

    };


    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            if (turn === 6) {
                return
            }

            if (currentGuess.length !== 5) {
                return
            }

            if (history.includes(currentGuess)) {
                return
            }
            const format = formatGuess();
            newGuess(format);
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1))
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key)
            }
        }
        formatGuess();
    }

    return { turn, setTurn, currentGuess, guesses, isCorrect, setIsCorrect, handleKeyup, usedKeys }
}
