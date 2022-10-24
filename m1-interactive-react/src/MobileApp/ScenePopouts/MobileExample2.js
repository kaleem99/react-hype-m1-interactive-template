import { connect } from "react-redux";
import GraphicImage1 from "../../images/graphicSquare.svg";
function MobileExample2({ MobileBreadCrumbsSection, clickEvent }) {
  return (
    <div className="MobileBreadCrumbsNav">
      {MobileBreadCrumbsSection.BreadCrumbsNavigation.map((sectionName, i) => {
        return (
          <>
            {" "}
            <button
              className="BreadCrumbsButton Description"
              style={
                sectionName === MobileBreadCrumbsSection.sectionState
                  ? { backgroundColor: "rgb(0, 122, 255)", color: "white" }
                  : { backgroundColor: "white" }
              }
              onClick={() => clickEvent(sectionName)}
            >
              {sectionName}
            </button>
            {i === 2 && (
              <>
                <div className="mobileButtonsDiv">
                  <button className="buttonOpt1">Option 1</button>
                  <button className="buttonOpt2">Option 2</button>
                </div>
                <div className="sectionSlider"></div>
                <div className="DescriptionText">
                  {MobileBreadCrumbsSection.sectionDataInformation}
                </div>
                <br></br>
                <img src={GraphicImage1}></img>
                <div className="mobileButtonsDiv2">
                <button className="buttonBack">Back</button>
                <button className="buttonNext">Next</button>
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

export default connect(mapStateToProps, {})(MobileExample2);
