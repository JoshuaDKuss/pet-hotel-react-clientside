import React, { Component } from 'react';

export class AddPet extends Component {
    render() {
        return (
            <div>
                <h2>Add Pet</h2>
                <input placeholder="Pet Name"></input>
                <input placeholder="Pet Color"></input>
                <input placeholder="Pet Breed"></input>
                <select placeholder="Owner Name"></select>
                <button>Submit</button>
            </div>
        )
    }
}

export default AddPet;
