import axios from 'axios';

import { put, takeLatest } from 'redux-saga/effects';

function* addPet(action){
    try{
        yield axios.post('/add_pet', action.payload);
        console.log('In Saga:', action.payload.pet_name);

    } catch(err){
        console.log(err);
    }
}

function* addPetSaga(){
    yield takeLatest("ADD_PET", addPet);
}

export default addPetSaga;