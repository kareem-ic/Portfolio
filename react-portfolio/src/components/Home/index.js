import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/K.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "areem, ".split("")
    const jobArray = "software engineer".split("")

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>

          <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <span className="logo-letter">
            <img src={LogoTitle} alt="developer" />
          </span>
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15}/>
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={22}/>
        </h1>

        <h2>Computer Science & Data Science, 2027 at University of Virginia</h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default Home;
