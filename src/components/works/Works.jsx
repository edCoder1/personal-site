import './works.scss';
import { useState } from 'react';

import SmartphoneIcon from '@material-ui/icons/Smartphone';
import { works } from '../../data/works';

export default function Works() {

  return (
    <div id='works' className='works'>
      <div
        className="slider"
        // style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >

        {
          works.map((work) => (
            <div id={work.id} className="container">
              <div className="item">
    
                <div className="left">
                  <div className="left-container">
                    {/* Put some igame/icon/bafge here */}
                    {/* <img src="" alt="" className="img-container" /> */}
                    <div className="icon-container">
                      {work.iconnnnn || <SmartphoneIcon/>}
                    </div>
                    <h2>{work.title}</h2>
                    <p>{work.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
    
                <div className="right">
                  <img
                    src={work.img}
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
        // onClick={() => moveSlide('left')}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        // onClick={() => moveSlide('right')}
      />
    </div>
  );
}
