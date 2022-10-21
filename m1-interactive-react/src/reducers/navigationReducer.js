export const navigationReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_NAV":
      return (state = true);
    case "CLOSE_NAV":
      return (state = false);
    default:
      return state;
  }
};

export default navigationReducer
