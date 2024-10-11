import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthProvider'
export const Profile = () => {
    const { logout } = useContext(AuthContext)
      const navigate = useNavigate(); // Перемещаем useNavigate сюда

    const handleLogout = () => {
        logout().then(() => {
          navigate('/login'); // Переход после успешного логаута
        });
      };
    return (

    <div className='login-section padding-tb section-bg'>
      <div className="container">
        <div className="margin-y account-wrapper ">
          <h3 className="title">Thank you for registering on our website!</h3>
          <div className="account-bottom">
            <Link className='lab-btn me-3 text-white' to='/shop'>Enjoy your shopping!</Link>
            <button type='button' onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}
