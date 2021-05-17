import React from 'react'
import style from './MyPost.module.css'
import {reduxForm} from "redux-form";
import {fieldCreator, Input, Textaria} from "../../../FormControl/FormControl";
import {maxLengthCreator, required} from "../../../../utilits/validator/Validator";
const maxLength50 = maxLengthCreator(50)
const maxLength30 = maxLengthCreator(30)
function postForm({handleSubmit}) {
    return <form className={style.form} onSubmit={handleSubmit}>
        {fieldCreator("title", "title", Input, [ required, maxLength30 ])}
        {fieldCreator("text", "Input the post", Textaria, [ required, maxLength50 ])}
        {fieldCreator("Img", "Img url", Input, [])}
        <button type="submit" className={style.btn}>Опубликовать</button>
    </form>;
}

const PostFormRedux = reduxForm({form:"posts"})(postForm)

const MyPost = React.memo(({postsArr, addPost}) =>{

    let arr_post = postsArr.map(el =>
        <div className={style.item}>
            <img className={`${style.logo}`} src={el.photo} alt="#"/>
            <div className={style.text}>
                <span>{el.title}</span><p>{el.text}</p>
            </div>
        </div>
    )

    const onSubmit = (values) => {
        let arr = [values.title,values.text,values.url]
        addPost(arr)
    }
    return (
        <div className={style.post}>
            <PostFormRedux onSubmit={onSubmit}/>
            <div className={style.posts}>
                {arr_post}
            </div>
        </div>
    )
})



export default MyPost
