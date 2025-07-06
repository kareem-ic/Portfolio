import LogoTitle from '../../assets/images/K.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br /> 
          I'm
          <span className="logo-letter">
            <img src={LogoTitle} alt="developer" />
          </span>
          areem,
          <br />
          software engineer
        </h1>

        <h2>FullStack Developer / AI Expert</h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
