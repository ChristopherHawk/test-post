
import React from 'react';
import { useNavigate } from 'react-router-dom'
 import {FacebookIcon} from '../../assets/index'
import FacebookLogin from 'react-facebook-login';
import './index.css'
const Login = () => {

  const goTo = useNavigate() 

  const responseFacebook = (response) => {   
      localStorage.setItem('access_token', response.accessToken)
      localStorage.setItem('name_user', response.name)
      localStorage.setItem('email_user', response.email)
      goTo('/')
  }
  return (
    <div className='div-login'>
      <div className='div-content'>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon={<img width='18px' src={FacebookIcon} alt='facebook icon'/>}
        />
      </div>

    </div>
  );
}

export default Login;