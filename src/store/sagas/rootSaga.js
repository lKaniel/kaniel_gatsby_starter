import {call, spawn, all} from "redux-saga/effects";
import {appSideSaga} from "./appSideSaga";

export default function* rootSaga() {
    const sagas = [
        appSideSaga
    ]

    const retrySagas = yield sagas.map(saga => (
        spawn(function* () {

            while (true){
                try {
                    yield call(saga)
                    break;
                }catch (e){
                    console.log(e)
                }
            }

        })))

    yield all(retrySagas)
}
