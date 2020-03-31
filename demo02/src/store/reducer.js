const defaultState = {
    inputValue: 'hello world',
    list:[]
}

export default (state = defaultState, action)=>{
    if(action.type === 'change_input'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_list'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'get_list'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list
        return newState;
    }
    return state;
}