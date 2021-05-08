import React from 'react'
import './App.css';
import NavBar from "./component/NavBar/NavBar";
import {Route, withRouter} from 'react-router-dom'
import DialogsContainer from "./component/content/Messages/Dialogs/DialogsContainer";
import UsersContainer from "./component/content/Search/Users/UsersContainer";
import ProfileContainer from "./component/content/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import LogIn from "./component/LogIn/LogIn";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialized} from "./Redux/appReducer";
import Loader from "./component/common/preLoader/preLoader";


class App extends React.Component {
    componentDidMount() {
        this.props.initialized()
    }

    render() {
        if (!this.props.initialize) {
            return <Loader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <NavBar/>
                <Route path="/profile/:userId?" component={ProfileContainer}/>
                <Route path="/dialogs" component={DialogsContainer}/>
                <Route path={"/search/users"} component={UsersContainer}/>
                <Route path={"/login"} component={LogIn}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialize:state.app.initialize
})
export default compose(withRouter,connect(mapStateToProps, {initialized}))(App);
