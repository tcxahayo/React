import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Children from './Child';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'parent',
      son:'child',
      value:''
    }
    // this.handClick = this.handClick.bind(this)
  }


  // handClick(data){
  //   this.setState({
  //     value:data
  //   })
  // }
   handClick = (data) =>{
    this.setState({
      value:data
    })
  }
  render() {
    return (
      <div>
        <div>我是{this.state.name}</div>
        <div>
          <Children 
           name={this.state.son}
           handClick={this.handClick}
          />
        </div>
    <div>我是从子组件过来的值：{this.state.value}</div>
      </div>
    );
  }
}

export default App;
