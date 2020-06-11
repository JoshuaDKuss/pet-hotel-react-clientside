import React, { Component } from 'react';

export class AddPet extends Component {

componentDidMount = () => {
    console.log('comp did mount AddPet');
    //this.props.dispatch({ type: 'GET_PETS' });
}


    render() {
        return (
            <div>


                <div className="addForm">
                <h2>Add Pet</h2>
                <form>
                <input placeholder="Pet Name"></input>
                <input placeholder="Pet Color"></input>
                <input placeholder="Pet Breed"></input>
                <select placeholder="Owner Name"></select>
                <button>Submit</button>
                </form>
                </div>


            </div>
        )
    }
}

export default AddPet;
