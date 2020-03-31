import {takeEvery, put } from 'redux-saga/effects';
import {GET_MY_LIST} from './actionTypes';
import axios from 'axios';
import {getListAction} from './actionCreate'

function* mysaga(){
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    // axios.get('https://www.easy-mock.com/mock/5d5cadd63421e716c4d7a2b6/xiaojiejie/todolist')
    //     .then((res)=>{
    //         const data = res.data;
    //         const action = getListAction(data);
    //         put(action);
    //         })
    const res = yield axios.get('https://www.easy-mock.com/mock/5d5cadd63421e716c4d7a2b6/xiaojiejie/todolist')
    const action = getListAction(res.data)
    yield put(action)

}
export default mysaga