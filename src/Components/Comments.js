import React, { Component } from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';

class Comments extends Component {
  deleteComment(id){
    this.props.onDelete(id);
  }

  render() {
    let commentItems;
    if(this.props.comments){
      commentItems = this.props.comments.map(comment => {
        //console.log(comment);
        return (
          <CommentItem onDelete={this.deleteComment.bind(this)} key={comment.title} comment={comment} />
        );
      }); 
    }
    return (
      <div className="Comments">
        <h3>Последние комментарии</h3>
        {commentItems}
      </div>
    );
  }
}

Comments.propTypes = {
    comments: PropTypes.array,
    onDelete: PropTypes.func
}

export default Comments;
