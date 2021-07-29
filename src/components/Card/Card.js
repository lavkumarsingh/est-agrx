import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div class="card">
            <img className='card_img' src={props.src} alt="" />
            <div class="card_container">
                <p class="card_title">{props.heading}</p>
                <p class="card_text">{props.text}</p>
            </div>
        </div>
    )
}

export default Card
