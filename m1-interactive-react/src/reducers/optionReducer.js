import OptionData from "../data/OptionsText.json";
const initialState = false;

export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Option1":
      return (state = action.type);
    case "Option2":
      return (state = action.type);
    case "ClearOptions":
      return (state = initialState);
    default:
      return state;
  }
};
