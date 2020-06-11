import React, { Component } from 'react';
import { connect } from 'react-redux'

export class AddPet extends Component {

componentDidMount = () => {
    console.log('comp did mount AddPet');
    this.props.dispatch({ type: 'FETCH_PETS' });
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
                <select>
                    <option>"Owner Name"</option>
                </select>
                <button>Check In</button>
                <button>Submit</button>
                </form>
                </div>


            </div>
        )
    }
}

export default connect()(AddPet);
