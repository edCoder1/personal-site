import './portfolio.scss';

import PortfolioCategory from './portfolio-category/PortfolioCategory';

import { useState } from 'react';

export default function Portfolio() {
  const [slected, setSelected] = useState('featured');

  const portfolioCategories = [
    { id: 'featured', title: 'Featured' },
    { id: 'web',      title: 'Web Application' },
    { id: 'mobile',   title: 'Moblie Application' },
  ];

  return (
    <div id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {portfolioCategories.map((category) =>
          <PortfolioCategory
            id={category.id}
            title={category.title}
            active={slected === category.id}
            setSelected={setSelected}
          />
        )}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/coding.jpg"/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/coding.jpg"/>
          <h3>Web App</h3>
        </div>
        <div className="item">
          <img src="assets/coding.jpg"/>
          <h3>Mobile App</h3>
        </div>
      </div>
    </div>
  )
}
