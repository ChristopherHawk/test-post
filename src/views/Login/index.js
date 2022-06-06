
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './index.css'
const Login = () => {

 

  const responseFacebook = (response) => {
    console.log(response.name);
    localStorage.setItem('access_token', response.accessToken)
    localStorage.setItem('name_user', response.name)
    localStorage.setItem('email_user', response.email)
  }
  return (
    <div className='div-login'>
      <div className='div-content'>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
        />
      </div>

    </div>
  );
}

export default Login;