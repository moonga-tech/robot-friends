import React from 'react';
import img from './img/2.png'

const Card = ({ name, email,}) => {
    return (
        <div className='tc bg-light-green dib ma3 grow pointer shadow-5 card' style={{/* width: "20%" */ padding: ""}}>
            <section className="card">
            <img src={img} alt='robots' />
            <section>
                <h2>{name}</h2>
                <p>{email}</p>
            </section>
            </section>
        </div>
    )    
}

export default Card;