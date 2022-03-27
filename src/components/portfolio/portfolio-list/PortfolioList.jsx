import './portfolioList.scss'

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={'portfolio-list ' + (active && 'active')}
      id={id}
      onClick={() => setSelected(id)}
    >
      { title }
    </li>
  )
}
