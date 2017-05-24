import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import logo from './logo.svg';
import Comments from './Components/Comments';
import AddComment from './Components/AddComment';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      comments: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getComments(){
    this.setState({comments: [
      {
        id: uuid.v4(),
        title: 'Buisiness Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shoping Cart',
        category: 'Web Development'
      }
    ]});
  }

  componentWillMount(){
    this.getComments();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddComment(comment){
    let comments = this.state.comments;
    comments.push(comment);
    this.setState({comments:comments});
  }

  handleDelComment(id){
    let comments = this.state.comments;
    let index = comments.findIndex(x => x.id === id);
    comments.splice(index, 1);
    this.setState({comments:comments});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Добро пожаловать в React ;) !</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <AddComment addComment={this.handleAddComment.bind(this)} />
        <Comments comments={this.state.comments} onDelete={this.handleDelComment.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
