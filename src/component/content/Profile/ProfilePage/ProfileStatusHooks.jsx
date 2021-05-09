import React, {useEffect, useState} from 'react'

const ProfileStatusHooks = (props) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const toggleEditMode = () => {
        setEditMode(!editMode)
        props.updateStatus(status)
    }

    const handleChange = e => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
            {editMode
                ? <div className="status_input">
                    <input autoFocus={true} onBlur={() => toggleEditMode()}  onChange={handleChange} value={status}/>
                </div>
                : <div className="status">
                    <span onDoubleClick={toggleEditMode}  >{status || '...' }</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatusHooks