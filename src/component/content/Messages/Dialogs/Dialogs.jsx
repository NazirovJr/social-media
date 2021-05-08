import React from 'react'
import style from './Dialogs.module.css'
import {NavLink} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {Textaria} from "../../../FormControl/FormControl";
import {maxLengthCreator, required} from "../../../../utilits/validator/Validator";


const Dialogs = (props) => {
    let messages = props.chatMessage.map(el => <p className={style.message}>{el.message}</p>)
    let name_arr = props.chatMessage.map(el => <NavLink tp={'#'}>{el.person_name}</NavLink>)


    const onSubmit = (values) =>{
        debugger
        props.addMessage(values.dialogForm)
    }
    return (
        <div className={`${style.dialogs} cont`}>
            <div className="info_dialogs">
                <div className={style.friend_nick}>
                    {name_arr}
                </div>
                <div className={style.messages}>
                    {messages}
                </div>
            </div>
            <DialogsFormRedux onSubmit={onSubmit}/>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100)
const DialogsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field  id="" name="dialogForm" component={Textaria} validate={[ required, maxLength100 ]}/>
            <button type="submit" className={style.btn} >Отправить</button>
        </form>
    )
}


const DialogsFormRedux = reduxForm({form:"dialogsForm"})(DialogsForm)
export default Dialogs

