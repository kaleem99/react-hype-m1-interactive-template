const initialState = "";
export const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Option 1":
      return (state = action.type);
    case "Option 2":
      return (state = action.type);
    case "Option 3":
      return (state = action.type);
    case "Option 4":
      return (state = action.type);
    default:
      return state;
  }
};
