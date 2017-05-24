import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


class AddComment extends Component {
  constructor(){
    super();
    this.state = {
      newComment:{}
    }
  }

  static defaultProps = {
    categories: [
      'Web Design',
      'Web Development',
      'Mobile Development'
    ]
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is reqired');
    } else {
      this.setState({newComment:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addComment(this.state.newComment);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Добавить комментарий</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

AddComment.propTypes = {
    categories: PropTypes.array,
    addComment: PropTypes.func
}

export default AddComment;