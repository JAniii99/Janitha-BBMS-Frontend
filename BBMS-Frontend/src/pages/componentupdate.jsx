import React from 'react';
import Cardd from '../component/cardd';
import p1 from '../assets/card background.png';
import image from '../assets/background.png';

function Home() {
  const carddata = ["RCC Update", "Platelet Update", "FFP Update", "BuffyCaot Update"];
  const images = [p1, p1, p1, p1, p1, p1];
  const links = ["/update/rccupd", "/update/plateletupd", "/update/ffprupd", "/update/buffycoatupd"];

  return (
    <div className='h-screen bg-green-400 sm:grid-cols-1' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="grid gap-4 pt-5 sm:grid-cols-3 sm:gap-6">
        {carddata.map((carddata, index) => (
          <Cardd
            key={index}
            carddata={carddata}
            image={images[index]}
            link={links[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
