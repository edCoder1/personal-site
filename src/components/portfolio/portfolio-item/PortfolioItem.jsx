import './portfolioItem.scss'

export default function PortfolioItem({ id, title, img }) {
  return (
    <div key={id} id={id} className="portfolio-item">
      <div>
        <img src={img} alt=''/>
        {/* <h3>{title}</h3> */}
      </div>
      <div className="title-container">
        <h2>{title}</h2>
      </div>
    </div>
  )
}
