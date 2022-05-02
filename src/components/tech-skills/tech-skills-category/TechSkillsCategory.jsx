import './techSkillsCategory.scss'

export default function PortfolioCategory({ id, title, active, setSelected }) {
  return (
    <li
      key={id}
      className={'portfolio-category ' + (active && 'active')}
      id={id}
      onClick={() => setSelected(id)}
    >
      { title }
    </li>
  )
}
