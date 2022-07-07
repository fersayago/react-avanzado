import { takeEvery, delay } from 'redux-saga/effects';
import  Actions from '../actions/actions';

function* interceptGainXP(){
  yield console.log("Ganar experiencia");
}

function* interceptTakeDamage(){
  yield console.log("Recibir daño");
}

export default function* sagaMiddlewareMain(){
  yield takeEvery(Actions.GAIN_XP, interceptGainXP);
  yield takeEvery(Actions.TAKE_DAMAGE, interceptTakeDamage);
}

