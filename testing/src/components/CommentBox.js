import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import requireAuth from './requireAuth';

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    saveComment(comment);

    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const actionsToMap = {
    saveComment: Actions.saveComment,
    fetchComments: Actions.fetchComments,
  };
  return bindActionCreators(actionsToMap, dispatch);
};

export default connect(null, mapDispatchToProps)(requireAuth(CommentBox));
