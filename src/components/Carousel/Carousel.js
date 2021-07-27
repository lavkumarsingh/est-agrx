import React from 'react'
import './Carousel.css'

function Carousel() {
    
    function slider() {  
    }setInterval(slider, 1000);

    return (
            <div className='carousel_container'>
                <div className='text_container'>
                    <p className='name'>AGRX</p>
                    <p className='tag'>Innovative High Technology</p>
                </div>
                {/* BOOTSTRAP CAROUSEL */}
                <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item  active">
                    <img className="d-block w-100 img" src="https://static.wixstatic.com/media/11062b_22aec8595f784a679f03fe4145286f86~mv2.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/11062b_22aec8595f784a679f03fe4145286f86~mv2.jpg" alt='farmer' />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 img" src="https://static.wixstatic.com/media/11062b_088dbac983e7436a80640f1bcfd0b402~mv2.jpeg/v1/fill/w_1903,h_1270,al_c,q_90,usm_0.66_1.00_0.01/11062b_088dbac983e7436a80640f1bcfd0b402~mv2.jpeg" alt='farmer' />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 img" src="https://static.wixstatic.com/media/bdf5c0be508d4bfb8f9ff957d387156a.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/bdf5c0be508d4bfb8f9ff957d387156a.jpg" alt='farmer' />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 img" src="https://static.wixstatic.com/media/11062b_89d64fe6a4e346ee80847d38a9e4c991~mv2.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/11062b_89d64fe6a4e346ee80847d38a9e4c991~mv2.jpg" alt='farmer' />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 img" src="https://static.wixstatic.com/media/229c5fec466b4150a2a89ce7d1344475.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/229c5fec466b4150a2a89ce7d1344475.jpg" alt='farmer' />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
    )
}

export default Carousel


/* 
https://static.wixstatic.com/media/11062b_22aec8595f784a679f03fe4145286f86~mv2.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/11062b_22aec8595f784a679f03fe4145286f86~mv2.jpg


https://static.wixstatic.com/media/11062b_088dbac983e7436a80640f1bcfd0b402~mv2.jpeg/v1/fill/w_1903,h_1270,al_c,q_90,usm_0.66_1.00_0.01/11062b_088dbac983e7436a80640f1bcfd0b402~mv2.jpeg
https://static.wixstatic.com/media/bdf5c0be508d4bfb8f9ff957d387156a.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/bdf5c0be508d4bfb8f9ff957d387156a.jpg
https://static.wixstatic.com/media/229c5fec466b4150a2a89ce7d1344475.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/229c5fec466b4150a2a89ce7d1344475.jpg
https://static.wixstatic.com/media/11062b_89d64fe6a4e346ee80847d38a9e4c991~mv2.jpg/v1/fill/w_1903,h_1268,al_c,q_90,usm_0.66_1.00_0.01/11062b_89d64fe6a4e346ee80847d38a9e4c991~mv2.jpg


*/