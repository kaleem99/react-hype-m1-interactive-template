import { connect } from "react-redux";
import GraphicImage1 from "../../images/graphicSquare.svg";
function MobileExample1({ BreadCrumbsSection, clickEvent }) {
  return (
    <div className="MobileBreadCrumbsNav">
      {BreadCrumbsSection.BreadCrumbsNavigation.map((sectionName, i) => {
        return (
          <>
            {" "}
            <button
              className="BreadCrumbsButton Description"
              style={
                sectionName === BreadCrumbsSection.sectionState
                  ? { backgroundColor: "rgb(0, 122, 255)", color: "white" }
                  : { backgroundColor: "white" }
              }
              onClick={() => clickEvent(sectionName)}
            >
              {sectionName}
            </button>
            {i === 1 && (
              <>
                <div className="mobileButtonsDiv">
                  <button className="buttonOpt1">Option 1</button>
                  <button className="buttonOpt2">Option 2</button>
                </div>
                <div className="sectionSlider"></div>
                <img src={GraphicImage1}></img>
                <div className="DescriptionText">
                  {BreadCrumbsSection.sectionDataInformation}
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    sectionDataInformation: state.sectionDataInformation,
  };
};

export default connect(mapStateToProps, {})(MobileExample1);
