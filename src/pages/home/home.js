import React from 'react'
import './home.css'

import Carousel from '../../components/Carousel/Carousel'
import Section from '../../components/Section/Section'

import data from '../../data/data.json'

function home() {
    return (
        <div className='home'>
            <section className='section-1'>
                <Carousel />
            </section>
            
            <section className='section-2'>
                <div className='techdes'>
                    <p className='heading'>
                    Technology Designed With You in Mind
                    </p>
                    <p className='tech'>
                    Artificial Intelligence |  Digital on-boarding | Supply Chain | Blockchain| Micro Finance
                    </p>
                    <p className='disc'>
                    Our products are designed for farmers & non farmers who are associated with agriculture industry and looking for modern and efficient ways to take better care of their farmland. Agrx delivers exactly what you need with quality and accuracy.
                    </p>
                    <button className='btn-c'>Contact Us</button>
                </div>
            </section>

            <section className='section-3'>
                    {
                        data.map((ele,i) => {
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
 
            <section className='section-4'>
                <div className='contact_us'>
                    <p className='contact_head'>Contact With Us</p>
                    <p className='address'>MIT, Cambridge Innovation Center, Sloan Business School, Cambridge, MA 02139, United States</p>
                    <p className='email'>info@estagrx.com</p>
                    <p className='phone'>+1 786-554-0579</p>
                </div>
                <div className='contact_form'>
                    <form className='form' action='' method='post'>
                        <div className='form_ele'>
                            <div>
                            <label>Name *</label><br/>
                            <input type='text' placeholder='Enter your name' />
                            </div>
                            <div>
                            <label>Email *</label><br/>
                            <input type='text' placeholder='Enter your name' />
                            </div>
                        </div>

                        <div className='form_ele'>
                            <div>
                            <label>Phone number</label><br/>
                            <input type='text' placeholder='Enter your name' />
                            </div>
                            <div>
                            <label>Address</label><br/>
                            <input type='text' placeholder='Enter your name' />
                            </div>
                        </div>
                        
                        <div className='subject'>
                            <label>Subject</label><br/>
                            <input type='text' placeholder='Enter your name' />
                        </div>        

                        <div className='message'>
                            <label>Message</label><br/>
                            <textarea rows="10" cols="50" placeholder='Type your message here...' />
                        </div>     
                        <input type='submit' value='Submit' />         
                    </form>
                </div>
            </section>

            <section className='section-5'>
                <img src='https://static.wixstatic.com/media/229c5fec466b4150a2a89ce7d1344475.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/229c5fec466b4150a2a89ce7d1344475.jpg' alt='' />
            </section>

            <section className='section-6'>
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

export default home
