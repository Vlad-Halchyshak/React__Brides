import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../FormValidator/validator'
import { Input } from '../../FormValidator/formControl'
import {loginpage} from './loginpage.scss'
import girl from '../../assets/girl.jpg'
import { login } from '../../redux/Auth_Reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'





const LoginForm = ( {handleSubmit,error, captcha, }) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="Login_field"><Field placeholder={"Email"} component={Input} name={"email"} validate={[required]} /></div>
      <div className="Login_pass"><Field placeholder={"Password"} type={"password"} component={Input} name={"password"} validate={[required]} /></div>
      {error && <div className="FormError">{error}</div>
      }
      {captcha && <img src={captcha} />}
      <div className="Captcha_field">{captcha && <Field placeholder={"type symbols here"} type={"captcha"} component={Input} name={"captcha"} validate={[required]} />}</div>
      <div className="Remember_proceed"><Field component={"input"} type={"checkbox"} name={"rememberMe"} />remember me

      <button>Proceed</button></div>
      <a href="#"><p style={{ color: "#383838" }}>Forgot your password?</p></a>
    </form>
  )
}
const LoginRxForm = reduxForm({ form: "login" })(LoginForm)

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  
  return (
    <div className="login_container">
      <div className="login_box">
        <div><h1>Login</h1>
          <p>Please enter your information below</p>
          <div className="login_fields"></div>
          <LoginRxForm onSubmit={onSubmit} captcha={props.captcha} />
        </div>
      </div>
      <div className="Welcome">
        <h1>Welcome to Brides.dating</h1>
        <div className="girl_block">
          <LoginPageGirl />
          <LoginPageGirl />
          <LoginPageGirl />
          <LoginPageGirl />
        </div>
      </div>
    </div>
  )
}

const LoginPageGirl = () => {
  return (
    <div>
      <div className="girl_img">
        <a href="#"> <img src={girl} /></a>
        <a href="#0" className="online_girl">online</a>
      </div>
      <div className="girl_name">
        <h3>Margarita</h3>
        <div>24 years from Kyiv</div>
      </div>
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha
})

export default connect (mapStateToProps, {login})(LoginPage)