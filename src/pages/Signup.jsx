import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { signUpWithGmail, createUser } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const title = 'Register'
  const socialTitle = 'Login with Google'
  const loginBtn = 'Sign up'

  const from = location.state?.from?.pathname || '/'

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
  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value

    console.log(email,password,confirmPassword)
    if(password !== confirmPassword) {
      setErrorMessage('Password does not match!S')
    } else {
      setErrorMessage('')
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user
          navigate(from, {replace: true})
        }).catch((error) => {
          console.log(error.message)
        })
    }
  }

  return (
    <div className='login-section padding-tb section-bg'>
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form onSubmit={handleSignUp} className="account-form">
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder='Full name *' required />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='Your Email *' required />
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" placeholder='Password *' required />
            </div>
            <div className="form-group">
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password *' required />
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
              <button className="d-block lab-btn">
                <span>{loginBtn}</span>
              </button>
            </div>
          </form>

          {/* //account bottom */}
          <div className="account-bottom">
            <span className='d-block cate pt-10'>
              Do You Have an Account? <Link to='/login' className='fw-bold'>Log in</Link>
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

export default Signup
