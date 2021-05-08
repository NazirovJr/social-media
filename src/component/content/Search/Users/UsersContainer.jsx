import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalPage,
      requestUsers
} from "../../../../Redux/usersReducer";
import Loader from "../../../common/preLoader/preLoader.jsx";
import withRedirect from "../../../../HOC/hoc";
import {compose} from "redux";
import {
    getAmountUser,
    getCurrentPage,
    getFollowInProgress, getIsAuth,
    getIsFetching,
    getTotalPage, getUsers
} from "../../../../Redux/selector";





class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.amountUser)
    }

    onPageChange = (currentPage) => {
        this.props.getUsers(currentPage, this.props.amountUser)
        this.props.setCurrentPage(currentPage)
    }

    render() {
        return<>
            {this.props.isFetching ? <Loader/>:<Users
                totalPage = {this.props.totalPage}
                amountUser = {this.props.amountUser}
                users = {this.props.users}
                follow = {this.props.follow}
                unFollow = {this.props.unFollow}
                currentPage = {this.props.currentPage}
                onPageChange = {this.onPageChange}
                followInProgress = {this.props.followInProgress}
            />}

            </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalPage: getTotalPage(state),
        amountUser: getAmountUser(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalPage,
        getUsers: requestUsers}),
    withRedirect
    )(UsersContainer)