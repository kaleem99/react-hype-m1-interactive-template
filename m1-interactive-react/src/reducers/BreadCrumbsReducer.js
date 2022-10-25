import sectionData from "../data/OptionsText.json";
const data = {
  BreadCrumbsNavigation: ["Description", "Example 1", "Example 2"],
  sectionState: "Description",
  sectionDataInformation: "",
  sectionName: "",
};

export const BreadCrumbsReducer = (state = data, action) => {
  switch (action.type) {
    case "Description":
      data.sectionState = action.type;
      return {
        ...data,
        ...{
          sectionState: data.sectionState,
          sectionDataInformation: data.sectionDataInformation,
        },
      };
    case "Example 1":
      data.sectionState = action.type;
      return {
        ...data,
        ...{
          sectionState: data.sectionState,
        },
      };

    case "Example 2":
      data.sectionState = action.type;
      return { ...data, ...{ sectionState: data.sectionState } };
    case "CLEAR_BC":
      data.sectionState = "";
      return { ...data, ...{ sectionState: data.sectionState } };
    default:
      return state;
  }
};

// Mobile BreadCrumbsReducer

export const MobileBreadCrumbsReducer = (state = data, action) => {
  let objectValue = "";
  if (action.section === "Option 1") {
    objectValue = "Form";
  } else if (action.section === "Option 2") {
    objectValue = "Accuracy";
  } else if (action.section === "Option 3") {
    objectValue = "Message";
  } else if (action.section === "Option 4") {
    objectValue = "Clutter";
  }
  switch (action.type) {
    case "Description_Mobile":
      data.sectionState = "Description";
      data.sectionDataInformation = sectionData[objectValue].Description;
      data.sectionName = objectValue;

      return {
        ...data,
        ...{
          sectionState: data.sectionState,
          sectionDataInformation: data.sectionDataInformation,
          sectionName: data.sectionName,
        },
      };
    case "Example 1_Mobile":
      data.sectionState = "Example 1";
      data.sectionDataInformation = sectionData.DefaultText;
      data.sectionName = objectValue;

      return {
        ...data,
        ...{
          sectionState: data.sectionState,
          sectionDataInformation: data.sectionDataInformation,
          sectionName: data.sectionName,
        },
      };

    case "Example 2_Mobile":
      data.sectionState = "Example 2";
      data.sectionName = objectValue;

      return {
        ...data,
        ...{ sectionState: data.sectionState, sectionName: data.sectionName },
      };
    case "CLEAR_BC_Mobile":
      data.sectionState = "";
      return { ...data, ...{ sectionState: data.sectionState } };
    default:
      return state;
  }
};
