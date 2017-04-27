import React, { Component} from 'react';
import './style.css';
import {Checkbox} from 'semantic-ui-react';

var TodoItems = React.createClass({
    render: function() {
        var  todoEntries = this.props.entries;

        function createTasks(item) {
            return <li key={item.key}><Checkbox/><div>{item.text}</div></li>
        }
        var listItems = todoEntries.map(createTasks);
        return (
            <ul className="theList">
                    {listItems}
            </ul>
        );
    }
});

export default TodoItems;