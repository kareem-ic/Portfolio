import Loader from 'react-loaders'
import "./index.scss"
import AnimatedLetters from '../AnimatedLetters'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            const timerId = setTimeout(() => {
              setLetterClass('text-animate-hover');
            }, 3000);
          
            return () => {
              clearTimeout(timerId);
            };
          }, []);
    return (
         <>
            <div className='container contact-page'> 
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray = {"Contact me".split("")} idx = {15}></AnimatedLetters>
                    </h1>
                    <p>
                        <br/>
                                    Thank you for your interest in getting in touch! 
                                    <br/>
                                    <br/>I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
                                    <br/>
                                    <br/>
                                    {/* <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/kareem-ic/">
                                        <FontAwesomeIcon icon={faLinkedin}  class = "icon" color = "#4d4d4e" />
                                    </a>
                                    <a target = "_blank" rel = "noreferrer" href = "mailto:kclarke11506@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} class = "icon" color = "#4d4d4e" />
                                    </a> */}
                    </p>
                </div>
            </div>
         <Loader type='pacman'/>
        </>
    )
}

export default Contact