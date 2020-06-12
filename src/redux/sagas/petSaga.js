import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPets)
}

function* fetchPets(){
    console.log('in fetchPets');
    try{
        const response = yield axios.get('/api/user');
        yield put({ type: 'SET_USER', payload: response.data});
    }catch (error) {
        console.log("Pet GET request failed", error);
        
    }
}




export default petSaga;