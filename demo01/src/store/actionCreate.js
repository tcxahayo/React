import {GET_MY_LIST, INPUT_CHANGE, ADD_LIST, DELETE_LIST, GET_LIST } from './actionTypes'
import axios from 'axios';
//获取输入值
export const inputChangeAction = (value) =>({
    type:INPUT_CHANGE,
    value
})
//点击添加
export const addListAction = () =>({
    type:ADD_LIST
})
//删除
export const deleteListAction = (index) =>({
    type:DELETE_LIST,
    index
})
//ajson获取数据
export const getListAction = (data) =>({
    type:GET_LIST,
    data
})
//中间件异步获取数据thunk,返回函数
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d5cadd63421e716c4d7a2b6/xiaojiejie/todolist')
        .then((res)=>{
            const data = res.data;
            const action = getListAction(data);
            dispatch(action);
            })
    }
}
//saga，返回对象
export const getMyListAction = ()=>({
    type: GET_MY_LIST
})