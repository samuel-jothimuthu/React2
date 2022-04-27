import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App = ({ auth, changeAuth }) => {
  const renderButton = () => {
    if (auth) {
      return <button onClick={() => changeAuth(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => changeAuth(true)}>Sign In</button>;
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Coment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) => {
  const actionsToMap = {
    changeAuth: Actions.changeAuth,
  };
  return bindActionCreators(actionsToMap, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
