import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='w-100 justify-content-center align-items-center d-flex flex-column'>
      <div className="w-100 justify-content-evenly d-flex">
        <div className="website" style={{width:'400px'}}>
          <h4>
          <FontAwesomeIcon icon={faVideo} style={{color:'orange', fontSize:'30px'}}/>
            <span style={{fontSize:'30px',color:'white'}} className='ms-3'> Video Player</span>
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda quasi nostrum quaerat eligendi iusto accusantium minima expedita, mollitia rerum at atque quis eius ratione dolorem nobis maxime sed quidem!</p>
        </div>

        <div className="links">
          <h4>Links</h4>
          <p className='mt-3'><Link to={'/'}>Landing Page</Link> </p>
          <p><Link to={'/home'}>Home</Link></p>
          <p><Link to={'/watchHistory'}>Watch History</Link></p>
        </div> 
        <div className="guides">
          <h4>Guides</h4>
          <p className='mt-3'>React</p>
          <p>React-Boostrap</p>
          <p>Bootswatch</p>

        </div>
        <div className="contacts">
          <h4>Contacts</h4>
          <div className='d-flex mt-3'>
            <input type="text" className='form-control' placeholder='Enter your email ID' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>

          <div className='d-flex justify-content-around mt-3 pt-2'>
          <FontAwesomeIcon icon={faInstagram} size='2xl'/>
          <FontAwesomeIcon icon={faFacebook} size='2xl' />
          <FontAwesomeIcon icon={faXTwitter} size='2xl'/>
          <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
          </div>
        </div> 

        </div>  
    </div>
  )
}
export default Footer