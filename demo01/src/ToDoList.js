import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store'
// import { INPUT_CHANGE, ADD_LIST, DELETE_LIST } from './store/actionTypes'
import {getTodoList,getMyListAction, inputChangeAction, addListAction, deleteListAction} from './store/actionCreate'
import TodoListUI  from "./TodoListUI";


// const data =['一','二','三']
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        //reducer订阅模式，对input的默认value值做改变
        this.storeChange = this.storeChange.bind(this);
        this.addList = this.addList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        store.subscribe(this.storeChange);

    }
    render() {
        return (
         <TodoListUI 
            inputvalue = {this.state.inputvalue}
            changeInputValue = {this.changeInputValue}
            addList = {this.addList}
            list = {this.state.list}
            deleteList = {this.deleteList}
         />
        );
    }
    //生命周期
    componentDidMount(){
            // const action = getTodoList()
            // store.dispatch(action)
            const action = getMyListAction()
            store.dispatch(action)
            console.log(action)
        }
    


    //获取输入框输入的值
    changeInputValue(e) {
        //打印出写入的值
        console.log(e.target.value);
        const action = inputChangeAction(e.target.value)
        // const action = {
        //     type: INPUT_CHANGE,
        //     value: e.target.value
        // }

        //store自动将获取的值交给reducer
        store.dispatch(action)
    }

    //点击添加
    addList() {
        const action = addListAction()
        // const action = {
        //     type: ADD_LIST
        // }
        store.dispatch(action)
    }
    //点击删除
    deleteList(index) {
        console.log(index);
        const action =deleteListAction(index)
        // const action = {
        //     type: DELETE_LIST,
        //     index
        // }
        store.dispatch(action)
    }

    //函数声明，改变组件状态
    storeChange() {
        this.setState(store.getState())
    }

}

export default ToDoList;