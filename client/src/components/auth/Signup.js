import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const Signup = ({ handleSubmit, signup, errorMessage, history }) => {
  const onSubmit = (formProps) => {
    signup(formProps, () => {
      history.push('/feature');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign Up!</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

const mapDispatchToProps = (dispatch) => {
  const actionsToMap = {
    signup: Actions.signup,
  };
  return bindActionCreators(actionsToMap, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'signup' })
)(Signup);
