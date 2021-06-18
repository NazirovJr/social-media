import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage} from "../../../../Redux/messagePostReducer";
import withRedirect from "../../../../HOC/withRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        chatMessage:state.dialogsMessage.chat,
        currentMessageText: state.dialogsMessage.currentMessage.text,
        isAuth: state.auth.isAuth
    }
}



export default compose(
    connect(mapStateToProps,{addMessage}),
    withRedirect
)(Dialogs)