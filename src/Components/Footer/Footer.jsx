import {
  faLine,
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
  faArrowRight
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='box-container'>
        <div className='Box'>
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <h3>TechZone</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done</p>
          <div className='share'>
            <Link className='social' to='/'>
              <i>
                <FontAwesomeIcon className='fa-icon' icon={faSquareFacebook} />
              </i>
            </Link>
            <Link className='social' to='/'>
              <i>
                <FontAwesomeIcon className='fa-icon' icon={faSquareInstagram} />
              </i>
            </Link>
            <Link className='social' to='/'>
              <i>
                <FontAwesomeIcon className='fa-icon' icon={faSquareXTwitter} />
              </i>
            </Link>
            <Link className='social' to='/'>
              <i>
                <FontAwesomeIcon className='fa-icon' icon={faLine} />
              </i>
            </Link>
          </div>
        </div>
        <div className='box'>
          <h3>Contact Info</h3>
          <Link to='/' className='links'>
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +840 000 0000
          </Link>
          <Link to='/' className='links'>
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            Name@email.com
          </Link>
          <Link to='/' className='links'>
            <i>
              <FontAwesomeIcon icon={faLocationDot} />
            </i>
            DaNang, VietNam
          </Link>
        </div>
        <div className='box'>
          <h3>Quick Info</h3>
          <Link to='#Home' className='links'>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Home
          </Link>
          <Link to='#features' className='links'>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Shop
          </Link>
          <Link to='#categories' className='links'>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Blog
          </Link>
          <Link to='#reviews' className='links'>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Review
          </Link>
          <Link to='#blogs' className='links'>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Contact
          </Link>
          <Link to='#products' className='links'>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            About
          </Link>
        </div>
        <div className='box'>
          <h3>newsletter</h3>
          <p>Subscribe For Latest Updates</p>
          <input type='text' placeholder='your email' />
          <button type='button' className='btn'>
            subscribe
          </button>
          <img src='image/payment.png' alt='' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
