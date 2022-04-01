import './portfolio.scss';

import PortfolioCategory from './portfolio-category/PortfolioCategory';
import PortfolioItem from './portfolio-item/PortfolioItem';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio
} from '../../data/portfolio'

import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState(featuredPortfolio);

  const portfolioCategories = [
    { id: 'featured', title: 'Featured' },
    { id: 'web',      title: 'Web Application' },
    { id: 'mobile',   title: 'Mobile Application' },
  ];

  useEffect(() => {
    switch (selected) {
      case 'web':
        setData(webPortfolio)
        break;
      case 'mobile':
        setData(mobilePortfolio)
        break;
      case 'featured':
        setData(featuredPortfolio)
        break;
      default:
        break;
    }
  }, [selected])

  return (
    <div id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {
          portfolioCategories.map((category) =>
            <PortfolioCategory
              id={category.id}
              title={category.title}
              active={selected === category.id}
              setSelected={setSelected}
            />
          )
        }
      </ul>
      <div className="container">
          {
            data.map((item) =>
              <PortfolioItem
                id={item.id}
                title={item.title}
                img={item.img}
              />
            )
          }
      </div>
    </div>
  )
}
