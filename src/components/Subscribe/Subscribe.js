import React from 'react'
import './Subscribe.css'

function Subscribe() {
    return (
        <div className='subscribe_container'>
            <div className='subscribe'>
                <p>Subscribe</p>
                <input type='email' placeholder='Email Address' />
                <input type='submit' value='Submit' />  

                <div className='social_handles'>
                    <div><img src='https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/Facebook.webp' alt='' /></div>
                    <div><img src='https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/Twitter.webp' alt='' /></div>
                    <div><img src='https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/LinkedIn.webp' alt='' /></div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
