import './portfolioItem.scss'

export default function PortfolioItem({ id, title, img }) {
  return (
    <div id={id} className="portfolio-item">
      <img src={img} alt=''/>
      <h3>{title}</h3>
    </div>
  )
}
