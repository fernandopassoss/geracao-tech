import React, { useEffect, useState } from 'react';
import '../styles/Slideshow.scss';
import homeslide1 from '../public/home-slide-1.jpeg';
import homeslide2 from '../public/home-slide-2.jpeg';
import homeslide3 from '../public/home-slide-3.jpeg';
import homeslide4 from '../public/home-slide-4.jpeg';
import homeslide5 from '../public/home-slide-5.jpeg';
import homeslide6 from '../public/home-slide-6.jpeg';
import homeslide7 from '../public/home-slide-7.jpeg';
import homeslide8 from '../public/home-slide-8.jpeg';

function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [
        homeslide2, 
        homeslide7, 
        homeslide1, 
        homeslide3, 
        homeslide4, 
        homeslide5, 
        homeslide6, 
        homeslide8
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 10500);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setSlideIndex(index);
    };

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
    };

    return (
        <div className='slide' style={{backgroundColor:'#F9F8FE'}}>
            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div key={index} className={`mySlides fade ${index === slideIndex ? 'active' : ''}`} style={{ display: index === slideIndex ? 'block' : '' }}>

                        <img src={slide} alt={`Slide ${index + 1}`} className="imagens" />


                        <div className="bolas">
                            {slides.map((_, index) => (
                                <span key={index} className={`dot ${index === slideIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
            <br />

            <div className='texto' >
                <p className='melhores'>
                    Melhores ofertas personalizadas
                </p>
                <h1 className='queima'>
                    Queima de <br/> estoque Nike 🔥
                </h1>
                <p className='consequat'>
                    Consequat culpa exercitation mollit nisi excepteur do <br></br>
                    do tempor laboris eiusmod irure consectur.
                </p>
                <button className='botao'>
                    Ver ofertas
                </button>

            </div>
        </div>
    );
}

export default Slideshow;
