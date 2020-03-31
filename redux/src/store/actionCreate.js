import axios from 'axios'
import '../mock/mock'
import {INPUT_VALUE, ADD_LIST, DELETE, GET_DATA} from './actionType'

export const inpuAction = (value)=>({
    type: INPUT_VALUE,
    value
})

export const addAction = ()=>({
    type: ADD_LIST
})

export const deleteAction = (index)=>({
    type: DELETE,
    index
})

export const getDataAction = (data)=>({
    type:GET_DATA,
    data
})

export const getListAcion = ()=>{
    return (dispatch)=>{
        axios('api/list').then((res)=>{
            const data = res.data.list
            const action = getDataAction(data)
            dispatch(action)
        })
    }
}