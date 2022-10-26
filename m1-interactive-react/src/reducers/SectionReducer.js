import OptionData from "../data/OptionsText.json";
const initialState = {
  data: "",
  option: "",
  navigationOptions: ["Option 1", "Option 2", "Option 3", "Option 4"]

};

export const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Option 1":
      initialState.option = action.type;
      initialState.data = OptionData.Form;
      return {
        ...state,
        ...{ data: initialState.data, option: initialState.option },
      };
    case "Option 2":
      initialState.option = action.type;
      initialState.data = OptionData.Accuracy;
      return {
        ...state,
        ...{ data: initialState.data, option: initialState.option },
      };
    case "Option 3":
      initialState.option = action.type;
      initialState.data = OptionData.Message;
      return {
        ...state,
        ...{ data: initialState.data, option: initialState.option },
      };
    case "Option 4":
      initialState.option = action.type;
      initialState.data = OptionData.Clutter;
      return {
        ...state,
        ...{ data: initialState.data, option: initialState.option },
      };
    case "Clear_Sections":
      initialState.option = "";
      return {
        ...state,
        ...{ option: initialState.option },
      };
    default:
      return state;
  }
};
