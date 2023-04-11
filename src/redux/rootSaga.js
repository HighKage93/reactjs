import { all } from 'redux-saga/effects'
import user from './users/sagas'
import auth from './auth/sagas'
import videos from './videos/sagas'

export default function* rootSaga() {
    yield all([
        user(),
        auth(),
        videos(),
    ])
}