import {INPUT_CHANGE, ADD_LIST, DELETE_LIST, GET_LIST} from './actionTypes'

const defaultStore = {
    inputvalue :'write something',
    list: []
}
export default (state = defaultStore, action)=>{
    console.log(state,action);
    //获取输入的值
    //reducer只能接收state，不能改变state
    if(action.type === INPUT_CHANGE){
        //深度拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputvalue = action.value;
        //将数据返回仓库
        return newState;
    }
    //添加
    if(action.type === ADD_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputvalue);
        newState.inputvalue = '';
        return newState;
    }
    //删除
    if(action.type === DELETE_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    //axios获值
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list;
        return newState;
    }
    
    return state
}