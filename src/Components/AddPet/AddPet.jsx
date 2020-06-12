import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddPet.css';

export class AddPet extends Component {

    state = {
        newPet: {
            pet_name: '',
            pet_color: '',
            pet_breed: '',
            owner: '',
        }
    }

    componentDidMount = () => {
        console.log('comp did mount AddPet');
        //this.props.dispatch({ type: 'GET_PETS' });
    }

    toHome = () => {
        //this.props.history.push(`/`);
    }

    handleChangeFor = (event) => {
        // event.target.name is coming from name attribute on input field
        let propName = event.target.name;
        console.log('Property:', propName);
        this.setState({
            newPet: {
                ...this.state.newPet,
                // event.target.value has the value (typed in) from the input field
                [propName]: event.target.value,
            }
        })
    }

    handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle submit AddPet', this.state.newPet)
    // this.props.dispatch({type: 'ADD_PET', payload: this.state.newPet})
    // this.setState({
    //   newPet: {
    //     pet_name: '',
    //     pet_color: '',
    //     pet_breed: '',
    //     owner: '',
    //   },
    // })
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


                <div className="addPetForm">
                    <h2>Add Pet</h2>
                    <form>
                        <input placeholder="Pet Name" name="pet_name"
                        onChange={this.handleChangeFor}
                        value={this.state.newPet.pet_name}></input><br/>

                        <input placeholder="Pet Color" name="pet_color"
                        onChange={this.handleChangeFor}
                        value={this.state.newPet.pet_color}></input><br/>

                        <input placeholder="Pet Breed" name="pet_breed"
                        onChange={this.handleChangeFor}
                        value={this.state.newPet.pet_breed}></input><br/>

                        <select name="owner_id"
                        value={this.state.newPet.owner}
                        onChange={this.handleChangeFor}>
                            <option>1 Owner Name</option>
                            <option>2 Owner Name</option>
                            <option>3 Owner Name</option>
                        </select>

                        <br/><button type="submit" onClick={this.handleSubmit}>ADD PET</button>
                    </form>
                </div><br/><br/>


                <h3>History</h3><br/>
                <table>
                    <thead>
                    <tr>
                    <th className='tHead'>Owner Name</th>
                    <th className='tHead'>Pet Name</th>
                    <th className='tHead'>Breed</th>
                    <th className='tHead'>Color</th>
                    <th className='tHead'>Status</th>
                    <th className='tHead'>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {/* {this.props.reduxState.pets.map(pet => <tr key={pet.id} pet={pet}> */}
                    {/* <td className='tData'>{pet.owner}</td>
                    <td className='tData'>{pet.pet_name}</td>
                    <td className='tData'>{pet.pet_breed}</td>
                    <td className='tData'>{pet.pet_color}</td>
                    {pet.checked_in ? <td className='tData'>In</td> : <td className='tData'>Out</td> }
                    <td className='tData'>{}</td> */}
                  {/* /</tr> */}
                  {/* ) */}
                  {/* } */}
                </tbody>
            </table> 

            </div>
        )
    }
}

const propsToRedux = reduxState => ({reduxState});

export default connect(propsToRedux)(AddPet);
