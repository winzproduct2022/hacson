import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/network.mp4' autoPlay loop muted />
      <h1>Go tech. We act.</h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Consultation
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
