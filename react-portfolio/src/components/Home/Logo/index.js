import './index.scss'
import LogoK from '../../../assets/images/K.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo animate" src={LogoK} alt="K" />
    </div>
  )
}

export default Logo
