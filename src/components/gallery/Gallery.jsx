import React from 'react';
import HeroSec from './landing'
function Gallery({ images }) {
  const renderedImages = images.map((image) => {
    return (
      <div className="flex justify-center items-center" key={image.label}>
        <img className="h-[300px] max-w-full transform hover:scale-105  transition-transform duration-200" src={image.url} alt={image.label} />
      </div>
    );
  });

  return (
    <div> 
      <HeroSec/>
    <div className="grid max-w-[1200px] px-16 my-24 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {renderedImages}
    </div>
    </div>
  );
}

export default Gallery;
