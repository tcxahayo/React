import React, { Component } from 'react';
import store from './store/index';
import {connect} from 'react-redux';
import axios from 'axios';
import './css.scss'




class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render() { 
        // 结构赋值
        let {inputValue, changeInput, addList, list, getList} = this.props;
        return ( 
        <div> 
            <div className="demo">123
            <div className="demo1">456st</div>
            </div>
           <div>
               {/* <input value = {this.props.inputValue}  */}
               <input value = {inputValue} 
               onChange = {changeInput} />
               <button onClick= {addList}>添加</button>
               {/* <button onClick={getList}>数据</button> */}
           </div>
           <ul>
               {
                   list.map((item,index)=>{
                       return(
                           <li key={index}>{item}</li>
                       )
                   })
                }
           </ul>
        </div>
        
        );
    }
    componentDidMount (){
        this.props.getList();
    }
}

 //影射关系,从store里获取默认值
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list: state.list
    }
}
//影射关系，获取输入的值
const dispathToProps = (dispath)=>{
    return{
         //获取输入框的值
            changeInput(e){
               let action = {
                   type: 'change_input',
                   value: e.target.value
               }
               dispath(action);
            },
            addList(){
                let action={
                    type: 'add_list'
                }
                dispath(action);
                // console.log(1);
            },
            getList(){
                axios.get('https://www.easy-mock.com/mock/5d5cadd63421e716c4d7a2b6/xiaojiejie/todolist').then((res)=>{
                    console.log(res)
                    const data = res.data;
                    let action ={
                        type:'get_list',
                        data
                    }
                    dispath(action)
            })      
          
        }
  
     
    }
}

export default connect(stateToProps , dispathToProps)(TodoList);