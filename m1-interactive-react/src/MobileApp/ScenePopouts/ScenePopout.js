import "../MobileHomePage.scss";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import MobileDescription from "./MobileDescription";
import MobileExample1 from "./MobileExample1";
function ScenePopout({ section, BreadCrumbsSection }) {
  const dispatch = useDispatch();
  const clickEvent = (sectionName) => {
    if (BreadCrumbsSection.sectionState === "") {
      dispatch({ type: "ClearOptions" });
      dispatch({ type: sectionName, section: section.option });
    } else {
      dispatch({ type: "CLEAR_BC" });
      dispatch({ type: sectionName });
    }
  };
  switch (section.option) {
    case "Option 1":
    case "Option 2":
    case "Option 3":
    case "Option 4":
      return (
        <div className="optionsOuterDiv">
          <div className="optionsPopout">
            <h1 className="sectionHeaderMobile">{section.option}</h1>
            <BreadCrumbsSectionsComp
              section={section}
              BreadCrumbsSection={BreadCrumbsSection}
              clickEvent={clickEvent}
            />
          </div>
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
function BreadCrumbsSectionsComp({ section, BreadCrumbsSection, clickEvent }) {
  switch (BreadCrumbsSection.sectionState) {
    case "Description":
      return (
        <MobileDescription
          BreadCrumbsSection={BreadCrumbsSection}
          clickEvent={clickEvent}
        />
      );
    case "Example 1":
      return (
        <MobileExample1
          BreadCrumbsSection={BreadCrumbsSection}
          clickEvent={clickEvent}
        />
      );
    case "Example 2":
      return <h1>Example 2</h1>;
    default:
      return (
        <div className="MobileBreadCrumbsNav">
          {BreadCrumbsSection.BreadCrumbsNavigation.map((sectionName) => {
            return (
              <button
                className="BreadCrumbsButton"
                onClick={() => clickEvent(sectionName)}
              >
                {sectionName}
              </button>
            );
          })}
        </div>
      );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    navigation: state.navigation,
    section: state.section,
    BreadCrumbsSection: state.BreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(ScenePopout);
