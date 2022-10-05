export const BreadCrumbsReducer = (state = "Description", action) => {
  switch (action.type) {
    case "Description":
      return (state = "Description");
    case "Example 1":
      return (state = "Example 1");
    case "Example 2":
      return (state = "Example 2");
    default:
      return state;
  }
};
