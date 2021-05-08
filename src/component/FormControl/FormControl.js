import React from "react";
import styles from  './FormControl.module.css'
const FieldCreator = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl}>
            <div>
                {props.children}
            </div>
            {hasError && <span >{meta.error}</span>}
        </div>
    )
}

export const Textaria = (props) => {
    const {input, meta, element, ...restProps} = props
    return <FieldCreator {...props}><textarea {...input} {...restProps} /></FieldCreator>
}

export const Input = (props) => {
    const {input, meta, element, ...restProps} = props
    return <FieldCreator {...props}><input {...input} {...restProps} /></FieldCreator>
}