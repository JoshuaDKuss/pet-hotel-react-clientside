import React, { Component } from 'react';
import { connect } from 'react-redux';



export class AddOwner extends Component {
    state = {
        ownerName : ''
    }
    handleChangeFor = (event) => {
        console.log('changing',event.target.value)
        this.setState({
            ownerName: event.target.value,
        })
    }

    handleAddOwner = () =>{
        console.log('clicked!',this.state.ownerName)
        this.props.dispatch({
            type: 'ADD_OWNER',
            payload: {
                ownerName: this.state.ownerName
            }
        })
    }


    render() {
        
       
        return (
            <div>
                <h2>Add Owner</h2>
                <input placeholder="Owner name" onChange = {this.handleChangeFor}></input>
                <button onClick = {this.handleAddOwner}>Submit</button>
            </div>
        )
    }
}

export default connect()(AddOwner);

