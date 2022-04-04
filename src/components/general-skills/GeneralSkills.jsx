import './generalSkills.scss';
import { useState } from 'react';

import { generalSkills } from '../../data/general-skills';

export default function GeneralSkills() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction = '') => {

    const totalSlides = generalSkills.length - 1;

    if (direction === 'left') {
      setCurrentSlide( (currentSlide > 0) ? (currentSlide -1) : 2 );
    } else {
      setCurrentSlide( (currentSlide < totalSlides) ? (currentSlide + 1 ) : 0 );
    }

  };

  return (
    <div id='general-skills' className='general-skills'>

      <h1>General Skills</h1>

      <div
        className="slider"
        //  this animation needs to be dinamicaly calculated,
        // that s why it is not in scss file
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >

        {
          generalSkills.map((skill) => (
            <div id={skill.id} className="container">
              <div className="item">
    
                <div className="left">
                  <div className="left-container">
                    {/* Put some igame/icon/bafge here */}
                    {/* <img src="" alt="" className="img-container" /> */}
                    {/* <div className="icon-container">
                      {skill.iconnnnn || <SmartphoneIcon/>}
                    </div> */}
                    <h2>{skill.title}</h2>
                    {/* <p>{skill.desc}</p>
                    <span>Projects</span> */}
                  </div>
                </div>
    
                <div className="right">
                  <img
                    src={skill.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => moveSlide('left')}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => moveSlide('right')}
      />
    </div>
  );
}
