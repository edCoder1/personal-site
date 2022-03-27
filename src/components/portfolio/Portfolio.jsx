import './portfolio.scss';

export default function Portfolio() {
  return (
    <div id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
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
