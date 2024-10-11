import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { signUpWithGmail, login } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const title = 'Login'
  const socialTitle = 'Login with Google'
  const loginBtn = 'Log in'

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    login(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate(from, { replace: true })
      }).catch((error) => {
        const errMsg = error.message
        setErrorMessage('Please provid valid email and password!')
      })
  }

  const handleRegister = (e) => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user
        navigate(from, { replace: true })
      }).catch((error) => {
        const errMsg = error.message
        setErrorMessage('Please provid valid email and password!')
      })
  }


  return (
    <div className='login-section padding-tb section-bg'>
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form onSubmit={handleLogin} className="account-form">
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='Your Email *' required />
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" placeholder='Your Password *' required />
            </div>

            {/* error msg */}
            <div className="">
              {errorMessage && (
                <div className="error-message text-danger mb-1">
                  {errorMessage}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button className="d-block lab-btn">
                <span>{loginBtn}</span>
              </button>
            </div>
          </form>

          {/* //account bottom */}
          <div className="account-bottom">
            <span className='d-block cate pt-10'>
              Do not Have an Account? <Link to='/signup' className='fw-bold'>Sing Up</Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>

            <h5>{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button className='github rounded-circle' onClick={handleRegister}>
                  <i className='icofont-github'></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login