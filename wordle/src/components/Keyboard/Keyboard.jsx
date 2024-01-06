import React, { useEffect } from 'react'
import letters from '../../letters.json'
import './keyboard.scss'
import { useWordle } from '../../hooks/useWordle'

const Keyboard = ({ usedKeys }) => {

    return (
        <>
            <div className='keyboard'>
                {letters && letters.map((l) => {
                    const color = usedKeys[l];
                    return (
                        <div key={l} className={`${color} letters`}>
                            {l}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Keyboard