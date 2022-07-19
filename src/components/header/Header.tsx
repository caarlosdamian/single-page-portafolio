import { Button } from '../button/Button'
import logo from '../../assets/logo.svg'
import './Header.scss'

export const Header = () => {
  return (
    <header className='header-container'>
        <img src={logo} alt="logo" className="header-logo" />
        <Button type='primary' label='Free Consultation'/>
    </header>
  )
}
