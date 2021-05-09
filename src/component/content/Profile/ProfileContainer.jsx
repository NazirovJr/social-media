import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage/ProfilePage";

import {connect} from "react-redux";
import {getProfile, setUsersProfile} from "../../../Redux/postCreatReducer";
import {Redirect, withRouter} from "react-router-dom";
import withRedirect from "../../../HOC/hoc";
import {compose} from "redux";
import {getStatus, updateStatus} from "../../../Redux/postCreatReducer";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <>
            <MyPostContainer/>
            <ProfilePage profile = {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </>
    }
}

let mapStateToProps = (state) =>({
    state:state.post,
    profile:state.post.profile,
    status:state.post.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

ProfileContainer = withRedirect(withRouter(ProfileContainer))

export default compose(
    connect(mapStateToProps,{setUsersProfile, getProfile,getStatus,updateStatus}),
    withRouter,
    withRedirect
)(ProfileContainer)
