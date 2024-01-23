import React, { useState, useEffect } from "react";

import '../css/Home.css'
import Header2 from "./Header2";
import Footer2 from "./Footer2";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '../../slideimages/brushes.jpeg',
    '../../slideimages/cans.jpeg',
    '../../slideimages/markers.jpeg',
    '../../slideimages/rocks.jpeg',
    '../../slideimages/dude.jpeg',
    '../../slideimages/painted.jpeg',
    '../../slideimages/person.webp',
    '../../slideimages/faces.jpeg',
    '../../slideimages/info.png',
    '../../slideimages/girl.jpeg',
    '../../slideimages/land.jpeg',
    '../../slideimages/paint.jpeg',
    '../../slideimages/beads.jpeg',
    '../../slideimages/paints.jpeg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div>
      <Header2 />
      <div className="home">
      <main>
        <div className="welcome card">
          <h1>Welcome to Color Splash!</h1>
          <p>
            Color Splash is a curated store for art enthusiasts. We offer a wide range
            of supplies like paints, brushes, and canvases. Whether you're an aspiring
            artist or a seasoned creative, our store is designed to spark your
            imagination and fuel your passion.
          </p>
        </div>

        <div className="about card">
          <h2>About Us</h2>
          <p>
            We are an art store that offers high-quality art supplies to artists
            seeking to elevate their craft. Unlike mass-produced, cheap art supplies,
            we curate a diverse range of premium materials from trusted manufacturers
            worldwide. Each product is meticulously handpicked to meet the highest
            standards of quality, durability, and performance. From professional-grade
            paints and brushes to archival-quality canvases and fine drawing tools,
            Color Splash empowers artists to explore their creativity without
            limitations. We also foster a vibrant artistic community, allowing artists
            of all levels to connect, learn, and grow together. By shopping at Color
            Splash, you're investing in your artistic vision and celebrating the
            beauty of authentic, expressive artistry. Let's create something
            extraordinary together!
          </p>
        </div>

        <div className="slider-container">
          <div className="slider">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`slide ${index + 1}`}
                className={index === currentSlide ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </main>
      </div>
      <Footer2 />
    </div>
  )
}
