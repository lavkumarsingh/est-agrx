import React from 'react'
import './about.css'

import data from '../../data/data.json'

import Section from '../../components/Section/Section'
import Subscribe from '../../components/Subscribe/Subscribe'

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
                        data[1].map((ele,i) => {
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
                <Subscribe />
            </section>
        </div>
    )
}

export default about
