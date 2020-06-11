import React, { Component } from 'react';

export class AddOwner extends Component {
    render() {
        return (
            <div>
                <h2>Add Owner</h2>
                <input placeholder="Owner name"></input>
                <button>Submit</button>
            </div>
        )
    }
}

export default AddOwner;
