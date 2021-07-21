import React from 'react'
import './about.css'

function about() {
    return (
        <div className='about_container'>
            <section className='about_section-1'>
                <p className='about_heading'>The Link Between Tradition & Modernity</p>
                <p className='about_decs'>At agrx, we’re invested in building the future of farming, and we want to make 
                            life for farmers as easy and comfortable as possible, regardless of the size of productions 
                            that they manage.
                            <br/><br/>
                            Giving you full control of your production is our goal, and we will do 
                            our best to make your crops or herds as productive as possible. To that end, we’ve developed 
                            hi-tech systems and services that help you connect with every step of your production. With 
                            our products, you’ll know exactly what you need to do and when.
                </p>
            </section>

            <section className='about_section-2'>
                <section className='section-5'>
                    <img src='https://static.wixstatic.com/media/229c5fec466b4150a2a89ce7d1344475.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/229c5fec466b4150a2a89ce7d1344475.jpg' alt='' />
                </section>
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
