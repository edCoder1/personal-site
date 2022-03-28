import './testimonials.scss';

import { people } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <div id='testimonials' className='testimonials'>
      <h1>Testimonials</h1>
      {
        people.map((person) => 
          (
            <div id={person.id} className="container">
              <div className={'card ' + (person.featured && 'featured')}>
                <div className="top">
                  <img
                    src="assets/person.jpg"
                    alt=""
                    className="person"
                  />
                </div>
                <div className="center">
                  {person.desc}
                </div>
                <div className="bottom">
                  <h3>{person.name}</h3>
                  <h4>{person.title}</h4>
                </div>
              </div>
            </div>
          )
        )
      }
    </div>
  )
}
