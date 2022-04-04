import './intro.scss';

// UNUSED TYPING ANIMATION

// import { init } from "ityped";
// import { useEffect, useRef } from "react";

export default function Intro() {

  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Angular", "React", "NodeJs", "MongoDb", "Postgres"],
  //   });
  // }, []);

  return (
    <div id='intro' className='intro'>
      <div className="left">
        <div className="image-container">
          <img src="assets/web-dev-03.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey There, I'm</h2>
          <h1>Edwin Sánchez</h1>
          <h3>
            Fullstack <span>Web Developer</span>
            {/* Fullstack Web Developer <span ref={textRef}></span> */}
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
