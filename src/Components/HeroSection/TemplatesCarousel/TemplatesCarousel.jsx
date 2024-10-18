import React, { useState } from 'react';
import { CarouselContainer, CarouselItem } from './TemplatesCarousel.styled';

const items = [
  
  { id: 1, content: 'Portfólio', image: 'portfolio.png' },
  { id: 2, content: 'E-commerce', image: 'ecommerce.png' },
  { id: 3, content: 'Landing Page', image: 'landingpage.png' },
];

const Carousel = () => {
  const [currentItems, setCurrentItems] = useState(items);
  const [hiddenIndex, setHiddenIndex] = useState(null);

  const handleClick = (index) => {
    if (index === 1) return; // Não faz nada se o item do meio for clicado

    const newItems = [...currentItems];
    const middleIndex = 1;

    // Adiciona a classe 'hidden' ao item que está sendo movido
    setHiddenIndex(index);

    // Faz o swap após um pequeno atraso para permitir a animação de saída
    setTimeout(() => {
      const temp = newItems[middleIndex];
      newItems[middleIndex] = newItems[index];
      newItems[index] = temp;

      setCurrentItems(newItems);
      setHiddenIndex(null); // Remove a classe 'hidden' após o swap
    }, 200); // Tempo deve corresponder à duração da transição
  };

  return (
    <CarouselContainer>
      {currentItems.map((item, index) => (
        <CarouselItem
          key={item.id}
          className={`${index === 1 ? 'active' : ''} ${hiddenIndex === index ? 'hidden' : ''}`}
          onClick={() => handleClick(index)}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <span>{item.content}</span>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
