export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // Check to see if the action has a promise on the 'payload property'
    // If no, send the action to the next middleware
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // If yes, wait for it to resolve & make new action with data and dispatch it
    action.payload.then(function (response) {
      const newAction = { ...action, payload: response }; //new action created
      dispatch(newAction); //newAction dispatched.
    });
  };
