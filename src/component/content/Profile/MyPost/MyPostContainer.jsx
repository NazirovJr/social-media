import React from "react";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {addPost} from "../../../../Redux/postCreatReducer";

const mapStateToProps = (state) =>{
    return{
        currentPost: state.post.currentPost,
        postsArr: state.post.postsArr
    }
}


export default connect(mapStateToProps,{addPost})(MyPost)
