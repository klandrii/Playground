import React, { Component} from 'react';
import ToDoItems from './ToDoItems';
import './style.css';

var TodoList = React.createClass({
  getInitialState: function(){
    return {
      items: []
    };
  },
  addItem: function (e){
    var itemArray = this.state.item;
    itemArray.push(
      {
        text: this.inputElement.value,
        key: Date.now()
      }
    );
    console.log('+1');
    this.setState({
      items: itemArray
    });
    this.inputElement.value="";
    e.preventDefault();
  },
  render: function (){
    return (
      <div className="todoListMain">
                <div className ="header" >
                <form onSubmit = {this.addItem}>
                    <input ref={(a) => this.inputElement = a}
                      placeholder = "enter task"></input>
                    <button type= "submit"> add</button>
                </form>
                </div>
                <ToDoItems entries={this.state.items} />
            </div>
    );
  }
});
// class TodoList extends Component {
//   constructor() {
//     super()
//       this.state = { items: [] };
//   };
//   addItem (e){
//     var itemArray = this.state.items;
//     itemArray.push(
//       {
//         text:this.inputElement.value,
//         key: Date.now()
//       }
//     );
//     console.log('+1');
//     this.setState({
//       items: itemArray
//     });
//     this.inputElement.value = null;
//     e.preventDefault();
//   };
    // render () {
    //     return (
    //         <div className="todoListMain">
    //             <div className ="header" >
    //             <form onSubmit = {this.addItem}>
    //                 <input ref={(a) => this.inputElement = a}
    //                   placeholder = "enter task"></input>
    //                 <button type= "submit"> add</button>
    //             </form>
    //             </div>
    //         </div>
    //     );
    // }


export default TodoList;