import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component {
  deleteComment(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Comment">
        <strong>{this.props.comment.title}</strong>: {this.props.comment.category} <button href="#" onClick={this.deleteComment.bind(this, this.props.comment.id)}>X</button>
      </li>
    );
  }
}

CommentItem.propTypes = {
    comment: PropTypes.object,
    onDelete: PropTypes.func
}

export default CommentItem;
