"use client";
import React, { useState, useEffect } from "react";
import "@/components/carousel.css";
import Image from "next/image";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentImageIndex ? "active" : ""
          }`}
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
