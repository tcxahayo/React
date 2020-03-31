import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd' 
import store from './store/index'
import {inpuAction, addAction, deleteAction, getListAcion} from './store/actionCreate'
import './mock/mock'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.inputchange = this.inputchange.bind(this);
        this.addlist = this.addlist.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange) 
    }
   componentDidMount(){
           const action = getListAcion();
           store.dispatch(action)
   }
    render() { 
        return ( 
            <Fragment>
                <div className="box">
            <div className="top">
                <Input value={this.state.inputValue}  placeholder='write something' onChange={this.inputchange} />
                <Button onClick={this.addlist}>确定</Button>
            </div>
            <div className="footer">
                <List 
                bordered
                dataSource={this.state.list}
                renderItem={(item, index)=>(<List.Item onClick={this.delete.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
            </div>
            </Fragment>
         );
    }
    inputchange(e){
        const action = inpuAction(e.target.value)
        store.dispatch(action);
    }
    addlist(){
        const action = addAction()
        store.dispatch(action)
    }
    delete(index){
        const action = deleteAction(index)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }
}
 
export default App;