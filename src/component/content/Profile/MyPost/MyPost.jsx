import React from 'react'
import style from './MyPost.module.css'
import {Field, reduxForm} from "redux-form";
import {Input, Textaria} from "../../../FormControl/FormControl";
import {maxLengthCreator, required} from "../../../../utilits/validator/Validator";
const maxLength50 = maxLengthCreator(50)
const maxLength30 = maxLengthCreator(30)
function postForm(props) {
    return <form className={style.form} onSubmit={props.handleSubmit}>
        <Field name="title" component={Input} validate={[ required, maxLength30 ]}
               placeholder="Title"/>
        <Field name="text" component={Textaria} validate={[ required, maxLength50 ]} placeholder="Input the post"/>
        <Field component='input' name="url" placeholder="Img url"/>
        <button type="submit" className={style.btn}>Опубликовать</button>
    </form>;
}

const PostFormRedux = reduxForm({form:"posts"})(postForm)

const MyPost = React.memo((props) =>{

    let arr_post = props.postsArr.map(el =>
        <div className={style.item}>
            <img className={`${style.logo}`} src={el.photo} alt="#"/>
            <div className={style.text}>
                <span>{el.title}</span><p>{el.text}</p>
            </div>
        </div>
    )

    const onSubmit = (values) => {
        let arr = [values.title,values.text,values.url]
        props.addPost(arr)
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
