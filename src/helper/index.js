import { call, put } from "redux-saga/effects";
import actions from "../redux/auth/actions";


export function* doApiCall(service, payload, ACTION_SETSTATE) {
    yield put({type: actions.SET_STATE, payload: { string: ' doapi call '}})
    // yield put({ ACTION_SETSTATE, payload: { loading: true } })
    // console.log(service, payload, ACTION_SETSTATE, ' at do api call')
    const response =  yield call(service, payload)
    return response
}