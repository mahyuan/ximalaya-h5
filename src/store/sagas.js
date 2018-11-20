import { takeEvery, put } from 'redux-saga/effects';

function* getHomeData() {

}

function* sagas() {
    yield takeEvery('get_home_data', getHomeData)
}

export default sagas;