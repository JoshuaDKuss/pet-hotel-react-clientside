import axios from 'axios';

import { put, takeLatest } from 'redux-saga/effects';

function* addOwnerSaga() {
    yield takeLatest('ADD_OWNER', addOwner);
}

function* addOwner(action) {
    try {
        console.log('get this owner from client', action.payload.name)
        yield axios.post('/owner', {name:action.payload.name});
        console.log('send this onwer to client', action.payload.name);
        yield put({
          type: 'FETCH_OWNER',
        });
    } catch (error) {
        console.log('Error with add owner:', error);
    }
}



export default addOwnerSaga;
