import axios from 'axios';

import { put, takeLatest } from 'redux-saga/effects';

function* addPet(action){
    try{
        console.log(action.payload);
        
        yield axios.post(`/addPet/${action.payload}`);
    } catch(err){
        console.log(err);
    }
}

function* addPetSaga(){
    yield takeLatest("ADD_PET", addPet);
}

export default addPetSaga;