import React from 'react'
import './Section.css'

function Section(props) {
    console.log();
    return (  
        <div className= {`sec-container ${props.index%2 === 0 ? 'invert' : '' }`}>
            <div className='left'>
                <div className='text-container'>
                    <p className='head'>
                        {props.head}
                    </p>
                    <p className='content'>
                    {props.content}
                    </p>
                </div>
            </div>
            <div className='right'>
                <img src={props.src} alt='' />
            </div>
        </div>
    )
}

export default Section