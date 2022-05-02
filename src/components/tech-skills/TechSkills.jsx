import './techSkill.scss';

import PortfolioCategory from './tech-skills-category/TechSkillsCategory';
import PortfolioItem from './tech-skill/TechSkillItem';
import { frontend, backend, other } from '../../data/tech-skills'

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
    <div id='tech-skills' className='portfolio'>
      <h1>Technical Skills</h1>
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