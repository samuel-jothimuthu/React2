import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
  const ComposedComponent = ({ auth, history, ...props }) => {
    //Component was just rendered
    useEffect(() => {
      if (!auth) {
        history.push('/');
      }
    }, [auth]);

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    return {
      auth: state.auth.authenticated,
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
