import './intro.scss';

export default function Intro() {
  return (
    <div id='intro' className='intro'>
      <div className="left">
        <div className="image-container">
          <img src="assets/web-dev-02.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey There, I'm</h2>
          <h1>Edwin Sánchez</h1>
          <h3>
            Fullstack Web Developer
            <span> Angular</span>
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
