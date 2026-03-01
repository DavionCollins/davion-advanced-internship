'use client'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '@/app/Features/Modal/ModalSlice'
import { logOutUser } from '@/app/Features/Auth/AuthSlice'

const Navbar = () => {
const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user);


  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <Image src={logo} alt='logo' className='nav__img'/>
        </figure>
        <ul className="nav__list--wrapper">
          {user ? <li className="nav__list nav__list--login" onClick={() => dispatch(logOutUser())}>Logout</li> : <li className="nav__list nav__list--login" onClick={() => dispatch(showModal(true))}>Login</li>}
          
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
