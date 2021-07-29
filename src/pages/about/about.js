import React from 'react'
import './about.css'

import Section from '../../components/Section/Section'
import data from '../../data/data.json'

function about() {
    return (
        <div className='about_container'>
            <section className='about_section-1'>
                <p className='about_heading'>The Link Between Tradition and Modernity</p>
                <p className='about_decs'>Agrx is here to transform the agro world. We are 
                building the future of farming by designing our products for producers, growers, 
                consumers, suppliers and all involved in supply chain of the agriculture industry. 
                Agrx delivers what you need with quantity and accuracy. Agrx is a mobile application 
                aiming to improve the agro world with following features:
                </p>
            </section>

            <section className='about_section-2'>
                    {
                        data[2].map((ele,i) => {
                        return  <Section 
                                key={i}
                                index={i}
                                src={ele.src} 
                                head={ele.head} 
                                content={ele.content} 
                            /> 
                        })
                    }
            </section>

            <section className='about_section-3'>
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

export default about
