import React from 'react'
import Row from '../Row/Row'

const Grid = ({ currentGuess, guesses, turn }) => {
    return (
        <>
            {
                guesses.map((guess, i) => {
                    if (turn === i) {
                        return <Row key={i} currentGuess={currentGuess} />
                    }
                    return <Row key={i} guess={guess} />
                })
            }
        </>
    )
}

export default Grid