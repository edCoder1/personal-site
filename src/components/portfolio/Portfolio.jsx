import './portfolio.scss';

import PortfolioCategory from './portfolio-category/PortfolioCategory';
import PortfolioItem from './portfolio-item/PortfolioItem';
import { frontend, backend, other } from '../../data/portfolio'

import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [selected, setSelected] = useState('front');
  const [data, setData] = useState(frontend);

  const portfolioCategories = [
    { id: 'front',  title: 'Frontend' },
    { id: 'back',   title: 'Backend' },
    { id: 'other',  title: 'Other' },
  ];

  useEffect(() => {
    switch (selected) {
      case 'front':
        setData(frontend)
        break;
      case 'back':
        setData(backend)
        break;
      case 'other':
        setData(other)
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
