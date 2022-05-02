import './app.scss'

import Topbar from './components/topbar/Topbar';
import Intro from './components/home/Home';
import Portfolio from './components/tech-skills/TechSkills';
import GeneralSkills from './components/general-skills/GeneralSkills';
import Menu from './components/menu/Menu';

import { useState } from 'react';



function App() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="app"> 
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="sections">
        <Intro/>
        <Portfolio/>
        <GeneralSkills/>
        {/* <Testimonials/>
        <Contact/> */}
      </div>
    </div>
  );
}

export default App;
