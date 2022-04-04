import './menu.scss'

export default function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={'menu ' + (openMenu && 'active')}>
      <ul>
        {/*
        It is not he best practice to repeat elements like this
        you should create a component instead
        */}
        <li onClick={() => setOpenMenu(false)}>
          <a href="#intro">home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#portfolio">technical skills</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#works">general skills</a>
        </li>
        {/* <li onClick={() => setOpenMenu(false)}>
          <a href="#testimonials">testimonials</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#contact">contact</a>
        </li> */}
      </ul>
    </div>
  )
}
