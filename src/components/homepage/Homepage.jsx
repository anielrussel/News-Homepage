import React from 'react'
import './homepage.css'
import headerimage from '../../images/image-web-3-desktop.jpg'
import comps1 from '../../images/image-retro-pcs.jpg'
import comps2 from '../../images/image-top-laptops.jpg'
import comps3 from '../../images/image-gaming-growth.jpg'

const Homepage = () => {
  return (
    <div className='home'>
      <div className='home-first'>
        <div className='home-first-left'>
          <img src={headerimage} alt="" />  
          <div className='home-first-text'>
            <h1>The Bright Future of Web 3.0?</h1>
            <div className='textandbutton'>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back
              into the hands of the people. But it is really fulfilling it's promise?
            </p>
            <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='home-second-right'>
          <div className='home-second-text'>
            <h1>New</h1>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <br></br><hr></hr><br></br>
            <h2>The Downside of AI Artistry</h2>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            <br></br><hr></hr><br></br>
            <h2>Is VC Funding Drying Up?</h2>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>  
        </div>  
      </div>
      <div className='home-bottom'>
        <div className='home-bottom-comps'>
          <img src={comps1} alt='' />
            <div className='home-bottom-text'>
              <h1>01</h1>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div> 

         <div className='home-bottom-comps'>
          <img src={comps2} alt='' />
            <div className='home-bottom-text'>
              <h1>02</h1>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks of various needs and budgets.</p>
            </div>
        </div>  

         <div className='home-bottom-comps'>
          <img src={comps3} alt='' />
            <div className='home-bottom-text'>
              <h1>03</h1>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>   
      </div> 
    </div>
  )
}

export default Homepage