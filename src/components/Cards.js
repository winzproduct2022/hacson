import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We provide the following services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/IT-Support.jpg'
              text='IT Support Services'
              label='IT Support'
              path='/services'
            />
            <CardItem
              src='images/softwaredev.jpg'
              text='Software Development & Consultation Services'
              label='Software Development'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/production.jpg'
              text='Products info will be announced later'
              label='Product'
              path='/products'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
