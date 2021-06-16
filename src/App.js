import React from 'react'
import './App.css';
import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import HeaderContainer from "./component/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialized} from "./Redux/appReducer";
import Loader from "./component/common/preLoader/preLoader";
import store from "./Redux/store/store";
import withSuspense from "./HOC/withSuspense";


const DialogsContainer = React.lazy(() => import('./component/content/Messages/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./component/content/Search/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./component/content/Profile/ProfileContainer'))
const LogIn = React.lazy(() => import('./component/LogIn/LogIn'))


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
                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer, Loader)}/>
                <Route path="/dialogs" render={withSuspense(DialogsContainer, Loader)}/>
                <Route path={"/search/users"} render={withSuspense(UsersContainer, Loader)}/>
                <Route path={"/login"} render={withSuspense(LogIn, Loader)}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialize:state.app.initialize
})

const AppContainer = compose(withRouter,connect(mapStateToProps, {initialized}))(App)

const AppMain = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default AppMain
