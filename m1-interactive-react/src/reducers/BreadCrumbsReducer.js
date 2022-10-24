import sectionData from "../data/OptionsText.json";
const data = {
  BreadCrumbsNavigation: ["Description", "Example 1", "Example 2"],
  sectionState: "Description",
  sectionDataInformation: "",
};

export const BreadCrumbsReducer = (state = data, action) => {
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
    case "Description":
      data.sectionState = action.type;
      // data.sectionDataInformation = sectionData[objectValue].Description;
      return {
        ...data,
        ...{
          sectionState: data.sectionState,
          sectionDataInformation: data.sectionDataInformation,
        },
      };
    case "Example 1":
      data.sectionState = action.type;
      // data.sectionDataInformation = sectionData.DefaultText;
      return {
        ...data,
        ...{
          sectionState: data.sectionState,
          // sectionDataInformation: data.sectionDataInformation,
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
      return {
        ...data,
        ...{
          sectionState: data.sectionState,
          sectionDataInformation: data.sectionDataInformation,
        },
      };
    case "Example 1_Mobile":
      data.sectionState = "Example 1";
      data.sectionDataInformation = sectionData.DefaultText;
      return {
        ...data,
        ...{
          sectionState: data.sectionState,
          sectionDataInformation: data.sectionDataInformation,
        },
      };

    case "Example 2_Mobile":
      data.sectionState = "Example 2";
      return { ...data, ...{ sectionState: data.sectionState } };
    case "CLEAR_BC_Mobile":
      data.sectionState = "";
      return { ...data, ...{ sectionState: data.sectionState } };
    default:
      return state;
  }
};
