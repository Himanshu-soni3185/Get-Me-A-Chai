"use client";
import { useEffect, useRef, useState } from "react";
import Card from "./card";

const Carousel = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = [
    { id: 1, text: '"Love the content! Keep building and I\'ll keep buying chai 🫖"', community: "-Coffee Lovers"},
    { id: 2, text: '"Great quality and fast delivery! Highly recommend!"', community: "-Tea Enthusiasts"},
    { id: 3, text: '"This creator\'s tutorials changed my career. Happy to buy a chai!"', community: "-Chai Aficionados"},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
 
      
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl">
      <div
        ref={trackRef}
        className="flex transition-transform duration-800 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${index * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} style={{ width: `${100 / slides.length}%` }} className="shrink-0 flex justify-center px-2">
            <Card
              text={slide.text}
              community={slide.community}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
