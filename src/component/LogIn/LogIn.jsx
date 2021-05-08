import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControl/FormControl";
import {maxLengthCreator, required} from "../../utilits/validator/Validator";
import {connect} from "react-redux";
import {loginUser} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "../FormControl/FormControl.module.css"
const maxLength50 = maxLengthCreator(50)
const LogInForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <div className="loginForm">
        {props.error ?
        <div className={styles.error}>
            <span>{props.error}</span>
        </div> : ""}
        <div className="loginForm__input">
            <Field name = "email" placeholder="email" component={Input} validate={[required, maxLength50]}/>
        </div>
        <div className="loginForm__input">
            <Field name = "password" placeholder="password"  type="password" component={Input} validate={[required, maxLength50]}/>
        </div>
        <div className="loginForm__input">
            <Field name = "rememberMe" component="input" type="checkbox"/> Remember me
        </div>
        <div className="loginForm__button">
            <button>Submit</button>
        </div>
    </div>
    </form>
}

const LogInFormRedux = reduxForm({form:"login"})(LogInForm)

const LogIn = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LogIn</h1>
        <LogInFormRedux onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps  ,{loginUser})(LogIn)