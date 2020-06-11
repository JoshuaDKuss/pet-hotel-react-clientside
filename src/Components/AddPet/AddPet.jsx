import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AddPet extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        owner: '',
        checkIn: false
    }

componentDidMount = () => {
    console.log('comp did mount AddPet');
    //this.props.dispatch({ type: 'GET_PETS' });
}

handleChange = (event, prop) => {
    this.setState({
        [prop]: event.target.value
    })
}

addPet = () => {
    this.props.dispatch({type:"POST_PET", payload: this.state});

}

    render() {
        console.log(this.state);
        
        return (
            <div>


                <div className="addForm">
                <h2>Add Pet</h2>
                <form>
                <input onChange={event => this.handleChange(event, "name")} placeholder="Pet Name"></input>
                <input onChange={event => this.handleChange(event, "color")} placeholder="Pet Color"></input>
                <input onChange={event => this.handleChange(event, "breed")} placeholder="Pet Breed"></input>
                        <select onChange={event => this.handleChange(event, "owner")}>
                    <option value="default">"Owner Name"</option>
                </select>
                <button>Check In</button>
                <button onClick={this.addPet}>Submit</button>
                </form>
                </div>


            </div>
        )
    }
}

const propsToRedux = redux => ({redux});

export default connect(propsToRedux)(AddPet);
