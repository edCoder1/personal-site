import './portfolioCategory.scss'

export default function PortfolioCategory({ id, title, active, setSelected }) {
  return (
    <li
      className={'portfolio-category ' + (active && 'active')}
      id={id}
      onClick={() => setSelected(id)}
    >
      { title }
    </li>
  )
}
