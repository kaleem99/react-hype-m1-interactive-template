import "../MobileHomePage.scss";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import MobileDescription from "./MobileDescription";
import MobileExample1 from "./MobileExample1";
import MobileExample2 from "./MobileExample2";
function ScenePopout({ section, MobileBreadCrumbsSection }) {
  const dispatch = useDispatch();
  const clickEvent = (sectionName) => {
    console.log(sectionName);
    console.log(MobileBreadCrumbsSection.sectionState);
    if (MobileBreadCrumbsSection.sectionState === "") {
      dispatch({ type: "ClearOptions" });
      dispatch({ type: sectionName + "_Mobile", section: section.option });
      console.log("if")
    } else {
      console.log("else")
      dispatch({ type: "CLEAR_BC_Mobile" });
      dispatch({ type: sectionName + "_Mobile" });
    }
  };
  switch (section.option) {
    case "Option 1":
    case "Option 2":
    case "Option 3":
    case "Option 4":
      return (
        <div className="optionsPopout">
          <h1 className="sectionHeaderMobile">{section.option}</h1>
          <BreadCrumbsSectionsComp
            section={section}
            MobileBreadCrumbsSection={MobileBreadCrumbsSection}
            clickEvent={clickEvent}
          />
        </div>
      );
    default:
      return (
        <div className="optionsPopout">
          <h1 className="HomeHeading">
            Click on one of the four topics to learn more
          </h1>
        </div>
      );
  }
}
function BreadCrumbsSectionsComp({
  section,
  MobileBreadCrumbsSection,
  clickEvent,
}) {
  switch (MobileBreadCrumbsSection.sectionState) {
    case "Description":
      return (
        <div className="optionsOuterDiv">
          <MobileDescription
            MobileBreadCrumbsSection={MobileBreadCrumbsSection}
            clickEvent={clickEvent}
          />
        </div>
      );
    case "Example 1":
      return (
        <div className="optionsOuterDiv">
          <MobileExample1
            MobileBreadCrumbsSection={MobileBreadCrumbsSection}
            clickEvent={clickEvent}
          />
        </div>
      );
    case "Example 2":
      return (
        <div className="optionsOuterDiv">
          <MobileExample2
            MobileBreadCrumbsSection={MobileBreadCrumbsSection}
            clickEvent={clickEvent}
          />
        </div>
      );
    default:
      return (
        <div className="MobileBreadCrumbsNav">
          {MobileBreadCrumbsSection.BreadCrumbsNavigation.map(
            (sectionName, i) => {
              return (
                <button
                  key={i}
                  className="BreadCrumbsButton"
                  onClick={() => clickEvent(sectionName)}
                >
                  {sectionName}
                </button>
              );
            }
          )}
        </div>
      );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    navigation: state.navigation,
    section: state.section,
    MobileBreadCrumbsSection: state.MobileBreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(ScenePopout);
