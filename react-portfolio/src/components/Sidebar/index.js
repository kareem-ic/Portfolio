import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoK from '../../assets/images/K.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



const Sidebar =  () => (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoK} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="Kareem"/>
        </Link>
        <nav>
            <NavLink 
            exact="true" 
            activeClassName="active" className="home-link" to="/">
            <FontAwesomeIcon icon={faHome} 
            color="#4d4d4e"/>
            </NavLink>
            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} 
            color="#4d4d4e"/>
            </NavLink>
            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} 
            color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kareem-ic/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/kareem-ic'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
    )

export default Sidebar