import React, { Component } from 'react';
import './List.css'

 class List extends Component{
     constructor(props){
        super();
        this.state = {
            sudah: false,
        }
     }

     sudah = () =>{
         this.setState({ selesai: true})
     }

     render(){
         return <li className='list-li' onClick={this.sudah}>{this.props.todo}{this.state.sudah? 'Selesai' : null}</li>
     }
 }

//  List.propTypes = {
//     strObj: PropTypes.exact({
//         todo: PropTypes.string,
//         test: PropTypes.number.isRequired
//     })
// }

 export default List;