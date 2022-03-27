import './portfolio.scss';

import PortfolioList from './portfolio-list/PortfolioList'
import { useState } from 'react';


export default function Portfolio() {
  const [slected, setSelected] = useState('featured');

  const portfolioList = [
    { id: 'featured', title: 'Featured' },
    { id: 'web',      title: 'Web Application' },
    { id: 'mobile',   title: 'Moblie Application' },
  ];

  return (
    <div id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {portfolioList.map((item) =>
          <PortfolioList
            id={item.id}
            title={item.title}
            active={slected === item.id}
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
