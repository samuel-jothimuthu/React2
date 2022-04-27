import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

const Signout = ({ signout }) => {
  useEffect(() => {
    signout();
  }, []);

  return <div>Sorry to see you go</div>;
};

const mapDispatchToProps = (dispatch) => {
  const actionsToMap = {
    signout: Actions.signout,
  };
  return bindActionCreators(actionsToMap, dispatch);
};

export default connect(null, mapDispatchToProps)(Signout);
