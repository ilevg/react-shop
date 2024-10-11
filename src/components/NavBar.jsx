import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'
import cart from '../assets/images/cart.png'
import { AuthContext } from '../context/AuthProvider'


const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [headerFixed, setHeaderFixed] = useState(false)

  //auth
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY >= 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp": ""}`}>
      {/* header bottom */}
      <div className='header-bottom'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* menu */}
            <div className='menu-area'>
              <div className="menu">
                <ul className={`lab-ul  ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li className='d-none d-lg-block'>
                    <Link to={'/cart-page'}>
                      <img width={30} height={30} src={cart} alt="cart icon" />
                    </Link>
                  </li>
                  
                </ul>
              </div>

              {
                !user 
                ?<div className='header-top-area'>
                  <Link to="login" className='lab-btn'>Log in</Link>
                </div>
                :<div className='header-top-area'>
                  <Link to='/profile' className='lab-btn mx-auto'>Profile</Link>
                </div>
              }
                <Link to={'/cart-page'} className='d-block d-lg-none ps-2'>
                  <img width={30} height={30} src={cart} alt="cart icon" />
                </Link>

              

              {/* menu toggler */}
              <div 
                onClick={() => setMenuToggle(!menuToggle)} 
                className={`ms-2 header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </header>
  )
}

export default NavBar
