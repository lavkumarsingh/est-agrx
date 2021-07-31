import React from 'react'
import './partners.css'

import Subscribe from '../../components/Subscribe/Subscribe'

function partners() {
    return (
        <div className='partners_container'>
            <section className='partners_section-1'>
                <p className='partners_heading'>Better Together</p>
                <p className='partners_decs'>Technology & Information</p>

                <div className='partners'>
                    <div className='partners_card'>
                        <img src='https://static.wixstatic.com/media/0fa92a967c76420a83938ecadb5ba4f2.png/v1/fill/w_205,h_205,al_c,q_85,usm_0.66_1.00_0.01/Client%202.webp' alt='' />
                        <p className='partner_heading'>Hexa</p>
                        <p className='partner_desc'>The Best Machinery Available</p>
                    </div>
                    <div className='partners_card'>
                        <img src='https://static.wixstatic.com/media/8083f7b02b824feaac22f26d88b3f5a8.png/v1/fill/w_205,h_205,al_c,q_85,usm_0.66_1.00_0.01/Client%203.webp' alt='' />
                        <p className='partner_heading'>Targo</p>
                        <p className='partner_desc'>Optimal Integration</p>
                    </div>
                    <div className='partners_card'>
                        <img src='https://static.wixstatic.com/media/34a050f696dc4d18978e83874a0b82bc.png/v1/fill/w_205,h_205,al_c,q_85,usm_0.66_1.00_0.01/Client%205.webp' alt='' />
                        <p className='partner_heading'>Hera</p>
                        <p className='partner_desc'>Tech Partnership</p>
                    </div>
                    <div className='partners_card'>
                        <img src='https://static.wixstatic.com/media/b79c5c268339492891db2d787acafa98.png/v1/fill/w_205,h_205,al_c,q_85,usm_0.66_1.00_0.01/Client%206.webp' alt='' />
                        <p className='partner_heading'>Axes</p>
                        <p className='partner_desc'>The Best Machinery Available</p>
                    </div>
                </div>
            </section>

            <section className=''>
                <Subscribe />
            </section>
        </div>
    )
}

export default partners
