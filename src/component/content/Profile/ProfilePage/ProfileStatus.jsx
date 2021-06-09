import React from 'react'

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status:this.props.status
        }
        this.status = this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus(this.state.status)
    }

    handleChange = e => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return <div>
            {this.state.editMode
                ? <div className="status_input">
                    <input autoFocus={true} onBlur={() => this.toggleEditMode()} type={this.state.status} onChange={this.handleChange} value={this.state.status}/>
                </div>
                : <div className="status">
                    <span onDoubleClick={this.toggleEditMode}  >{this.props.status || '...' }</span>
                </div>
            }
        </div>
    }
}

export default ProfileStatus