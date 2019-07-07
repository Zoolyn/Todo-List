import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            cursor: 'pointer'
        }
    }

    markComplete = (e) =>{
        console.log(this.props)
    }

    render() {
        const {id,title} = this.props.todo;
        return (
            <div style ={this.getStyle()} onClick={this.props.markComplete.bind(this, id)}>
                <p>
                    {/*.props goes the upper level, Todos.js where we then have to pass it to App.js*/}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
