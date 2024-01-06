import React from 'react'
import './modal.scss'

export default function Modal({ isCorrect, solution, turn }) {
    return (
        <div className="modal">
            {isCorrect && (
                <div className='popup-container'>
                    <div className='popup'>
                        <h1 className='modal-title'>Ganaste!</h1>
                        <p className='modal-p'>Encontraste la solucion en el turno {turn}</p>
                        <button className='modal-btn' onClick={() => location.reload()}>Volver a Jugar</button>
                    </div>
                </div>
            )}
            {!isCorrect && (
                <div className='popup-container'>
                    <div className='popup'>
                        <h1 className='modal-title'>Lastima!</h1>
                        <p className='modal-p'>Mejor suerte para la proxima!</p>
                        <button className='modal-btn' onClick={() => location.reload()}>Volver a Jugar</button>
                    </div>
                </div>
            )}
        </div>
    )
}