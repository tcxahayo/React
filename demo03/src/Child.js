import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'null'
         }
        //  this.childHand = this.childHand.bind(this)
    }
    // childHand(){
    //     console.log(1)
    //     this.props.handClick("love")
    // }
    childHand = () => {
        this.props.handClick("love")
    }
    render() { 
        let {name} = this.props
        return ( 
            <div>
                <div onClick={this.childHand}>
                    我是{name}
                </div>
            </div>
         );
    }
}
 
export default Child;