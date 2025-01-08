import React from 'react'

import  {Link} from 'react-router-dom'

import './index.css'

 const Header = () => {
  return (
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <a className ="navbar-brand" href="/">
  
  <img src = "/image/chef.png" alt ="Chef Logo" className = "logo"/>
  </a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>
  <div className ="collapse navbar-collapse" id="navbarText">
    <ul className ="navbar-nav mr-auto">
     
     <li className ="nav-item active">
        < Link to = "/" className ="nav-link">Home  </Link>
      </li>
      
      <li className ="nav-item">
        < Link to = "/about" className ="nav-link" >About Us</Link >
      </li>
      
      
      
      <li className ="nav-item">
        < Link to = "/service" className ="nav-link" >Service</Link>
      </li>
      
      
      <li className ="nav-item">
        < Link to = "/contact" className ="nav-link">Contact Us  </Link>
      </li>
     
    </ul>
    <span className ="navbar-text">
     <button className='login'>LOG IN</button>
     <button className='sign-up'>SIGN UP</button>
    </span>
  </div>
</nav>
  )
}

export default Header