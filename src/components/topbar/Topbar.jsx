import './topbar.scss';

import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar() {
  return (
    <div id='topbar' className='top-bar'>
      <div className="wrapper">

        <div className="left">
          <a href='#intro' className='logo'>
              hello!
          </a>
        </div>

        <div className="right">
          <div className="item-container">
            <GitHubIcon className='icon'/>
            <span className='text'></span>
          </div>
          <div className="item-container">
            <LinkedInIcon className='icon'/>
            <span className='text'></span>
          </div>
          <div className="item-container">
            <MailOutlineIcon className='icon'/>
            <span className='text'>edwin.lsb@live.com</span>
          </div>
          <div className="item-container">
            <SmartphoneIcon className='icon'/>
            <span className='text'>+52 3312324974</span>
          </div>
        </div>

      </div>
    </div>
  )
}
