 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
const Login = () => {



  const responseGoogle = (response) => {
    console.log(response);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }
  return ( 
    <div>
    <FacebookLogin
appId="1299059527121228"
autoLoad={true}
fields="name,email,picture"
callback={responseFacebook}
cssClass="my-facebook-button-class"
/>
<GoogleLogin
    clientId="845128863099-2ei5onjnebrm75ojg9693lvg4vipbtlv.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
</div>
   );
}
 
export default Login;