import React, { Component } from 'react';
//import { connect } from 'react-redux';


export class AddPet extends Component {


componentDidMount = () => {
    console.log('comp did mount AddPet');
    //this.props.dispatch({ type: 'GET_PETS' });
}

toHome = () => {
    //this.props.history.push(`/`);
}


    render() {
        return (
            <div>


                <div className="addPetForm">
                <h2>Add Pet</h2>
                <form>
                <input placeholder="Pet Name"></input>
                <input placeholder="Pet Color"></input>
                <input placeholder="Pet Breed"></input>
                <select>
                    <option>Owner Name</option>
                    <option></option>
                    <option></option>
                </select>
                <button>Check In</button>
                <button>ADD</button>
                </form>
                </div>


            </div>
        )
    }
}

export default AddPet;
