// import React, { Component } from 'react';
//无状态组件
import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props)=>{
        return (<div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputvalue}
                    style={{ width: '250px', marginRight: '10px' }}
                    //绑定监听事件
                    onChange={props.changeInputValue}

                    //定义了value值，就要采用订阅模式。
                    value={props.inputvalue}
                />
                <Button type='primary' onClick={props.addList}>添加</Button>
                {/* <button type = 'primary'>添加</button> */}

            </div>
            <div style={{ width: '300px', marginTop: '10px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    //点击删除
                    renderItem={(item, index) => (
                        <List.Item onClick={() => { props.deleteList(index) }} >
                            {item}
                        </List.Item>)}


                />
            </div>
        </div>
        );
    }


// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (<div style={{ margin: '10px' }}>
//             <div>
//                 <Input
//                     placeholder={this.props.inputvalue}
//                     style={{ width: '250px', marginRight: '10px' }}
//                     //绑定监听事件
//                     onChange={this.props.changeInputValue}

//                     //定义了value值，就要采用订阅模式。
//                     value={this.props.inputvalue}
//                 />
//                 <Button type='primary' onClick={this.props.addList}>添加</Button>
//                 {/* <button type = 'primary'>添加</button> */}

//             </div>
//             <div style={{ width: '300px', marginTop: '10px' }}>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     //点击删除
//                     renderItem={(item, index) => (
//                         <List.Item onClick={() => { this.props.deleteList(index) }} >
//                             {item}
//                         </List.Item>)}


//                 />
//             </div>
//         </div>
//         );
//     }
// }

export default TodoListUI;