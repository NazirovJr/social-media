import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

const withRedirect = (Component) => {
    class withRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps)(withRedirectComponent)
}

export default withRedirect
