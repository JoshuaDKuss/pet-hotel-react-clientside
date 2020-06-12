import axios from 'axios';

import { put, takeLatest } from 'redux-saga/effects';

function* addOwnerSaga() {
    yield takeLatest('ADD_OWNER', addOwner);
}

function* addOwner(action) {
    try {
        console.log('get this owner from client', action.payload.addOwner)
    } catch (error) {
        console.log('Error with add new item:', error);
    }
}



export default addOwnerSaga;
