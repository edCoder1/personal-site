import './works.scss';

import SmartphoneIcon from '@material-ui/icons/Smartphone';

export default function Works() {
  return (
    <div id='works' className='works'>
      <div className="slider">
        <div className="container">
          <div className="item">

            <div className="left">
              <div className="left-container">
                {/* Put some igame/icon/bafge here */}
                {/* <img src="" alt="" className="img-container" /> */}
                <div className="icon-container">
                  <SmartphoneIcon/>
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, iste minima facere molestiae illum magni!
                </p>
                <span>Projects</span>
              </div>
            </div>

            <div className="right">
              <img
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
