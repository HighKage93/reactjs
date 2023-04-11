import { notification } from 'antd'
import { doApiCall } from '../../helper'
import { put, all, takeEvery } from 'redux-saga/effects'
import AuthServices from '../../services/auth'
import actions from './actions'

const services = new AuthServices()

export function* GETVIDEOS(action) {
  const response = yield doApiCall(services.registerUser, action.payload, actions.SET_STATE)
  if (response) {
    yield put({ type: actions.SET_STATE, payload: { videosData: response.data } })
  }
}

export function* GETSINGLEVIDEOS(action) {
  if (action.payload.id) {
    const response = yield doApiCall(services.getSingleVideos, action.payload, actions.SET_STATE)
    if (response?.success) {
      yield put({ type: actions.SET_STATE, payload: { singleVideoData: response } })
    }
  }
}

export function* UPDATEVIDEOS(action) {
  const response = yield doApiCall(services.updateVideos, action.payload, actions.SET_STATE)
  if (response?.success) {
    notification.success({
      description: 'Successfully Updated',
    })
    yield put({ type: actions.SET_STATE, payload: { updatedVideo: response.data } })
  }
}

export function* SAVEVIDEOS(action) {
  const response = yield doApiCall(services.saveVideos, action.payload, actions.SET_STATE)
  if (response?.success) {
    notification.success({
      description: 'Successfully Created',
    })
    yield put({ type: actions.SET_STATE, payload: { newVideo: response.data } })
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_VIDEOS, GETVIDEOS)])
  yield all([takeEvery(actions.GET_SINGLEVIDEOS, GETSINGLEVIDEOS)])
  yield all([takeEvery(actions.UPDATE_VIDEOS, UPDATEVIDEOS)])
  yield all([takeEvery(actions.SAVE_VIDEOS, SAVEVIDEOS)])
}
