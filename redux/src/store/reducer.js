import {INPUT_VALUE, ADD_LIST, DELETE, GET_DATA} from './actionType'
const defaulState = {
    inputValue:'',
    list:[
        '星期一',
        '星期二',
        '星期三'
    ]
}
export default (state = defaulState, action)=>{
    if(action.type === INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }

    if(action.type === DELETE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState
    }

    if(action.type === GET_DATA){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState
    }
    return state
}