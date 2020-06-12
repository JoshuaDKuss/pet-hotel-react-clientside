import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOwner(){
    console.log('fetchOwner');
    try{
        const response = yield axios.get('/api/owner');
        yield put({ type: 'SET_OWNER', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* ownerGetSaga() {
    yield takeLatest('FETCH_OWNER', fetchOwner);
}

export default ownerGetSaga;