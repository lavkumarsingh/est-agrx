import React from 'react'
import './technology.css'
import Card from '../../components/Card/Card'
import Subscribe from '../../components/Subscribe/Subscribe'

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
            <section className=''>
                <Subscribe />
            </section>
        </div>
    )
}

export default technology
