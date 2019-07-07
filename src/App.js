import React, {Component}from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodos from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
      //these are the items in the todo list
      //id is the unique id
      //title is the title of the task
      //complete is the value if the task was completed
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
  }

  markComplete = (id) => {
    //we want to set the object in the todos array that matches the id that was passed from TodoItem.js
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        //this will set the todo complete to the oppisite
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  //delTodo
  delTodo = (id) =>{
    /*
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]});*/
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  AddTodos = (title) => {
    /*const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    we don't have to use this anymore because we can just use axios.post
    */
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));    
  }

  render(){
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodos addTodo={this.AddTodos} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>              
              </React.Fragment>
            )} />
            <Route path="/about" component = {About}/>
          </div>   
        </div>
      </Router>
    );
  }
}

export default App;