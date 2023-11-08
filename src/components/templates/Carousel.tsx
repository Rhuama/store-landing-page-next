import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import photoOne from '../../assets/images/impressionante-modelo-feminino-encaracolado-pulando-no-roxo-retrato-interior-da-menina-magro-em-vestido-amarelo-brilhante.jpg'
import PhotoTwo from '../../assets/images/jovem-confiante-posando-na-parede-amarela.jpg'
import PhotoThree from '../../assets/images/garota-alegre-em-oculos-elegantes-encara-com-espanto-andando-na-parede-rosa-morena-de-culote-e-blusa-laranja-posando-com-bolsa-vermelha.jpg'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      <div className="relative overflow-hidden rounded-lg" style={{ height: '1640px' }}>
        {/* Item 1 */}
        <div
          className={`${
            currentSlide === 0
              ? 'block'
              : 'hidden duration-700 ease-in-out'
          }`}
          data-carousel-item="active"
        >
          <Image
            src={photoOne}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div
          className={`${
            currentSlide === 1
              ? 'block'
              : 'hidden duration-700 ease-in-out'
          }`}
          data-carousel-item
        >
          <Image
            src={PhotoTwo}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div
          className={`${
            currentSlide === 2
              ? 'block'
              : 'hidden duration-700 ease-in-out'
          }`}
          data-carousel-item
        >
          <Image
            src={PhotoThree}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
    </div>
  );
}
