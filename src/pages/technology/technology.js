import React from 'react'
import './technology.css'
import Card from '../../components/Card/Card'

import data from '../../data/data.json'

function technology() {
    return (
        <div>
            <section className='section-2'>
                <div className='techdes'>
                    <p className='decs'>
                    Protect and preserve the natural environment: Without a healthy natural environment where native flora and fauna live productively, long-term sustainable agricultural practices will fail. Farms must be developed in conjunction and cooperation with local ecology.
                    </p>
                </div>
            </section>
            <section className='tech_section-3'>
                    {
                        data[2].map((ele,i) => {
                        return  <Card 
                                key={i}
                                src={ele.src} 
                                heading={ele.head} 
                                text={ele.content} 
                                className='card_ele'
                            /> 
                        })
                    }
            </section>
            <section className='section-4'>
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
            </section>
        </div>
    )
}

export default technology
