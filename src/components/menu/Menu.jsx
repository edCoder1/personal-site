import './menu.scss'

export default function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={'menu ' + (openMenu && 'active')}>
      <ul>
        {/*
        It is not he best practice to repeat elements like this
        you should create a component instead
        */}
        <li key={1} onClick={() => setOpenMenu(false)}>
          <a href="#home">home</a>
        </li>
        <li key={2} onClick={() => setOpenMenu(false)}>
          <a href="#tech-skills">technical skills</a>
        </li>
        <li key={3} onClick={() => setOpenMenu(false)}>
          <a href="#general-skills">general skills</a>
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
