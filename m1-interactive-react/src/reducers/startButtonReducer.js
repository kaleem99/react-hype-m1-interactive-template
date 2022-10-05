const simpleReducers = {
  Start: false,
  Popup: true,
  TabIndex: -1,
};
export const StartReducer = (state = simpleReducers, action) => {
  switch (action.type) {
    case "START_INTERACTIVE":
      state.Start = true;
      return { ...state, ...{ START: state.Start } };
    case "CLOSE_POPUP":
      state.Popup = false;
      state.TabIndex = 0;
      return { ...state, ...{ Popup: state.Popup, TabIndex: state.TabIndex } };
    default:
      return state;
  }
};
