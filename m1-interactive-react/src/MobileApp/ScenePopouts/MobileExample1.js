import { connect } from "react-redux";
import GraphicImage1 from "../../images/graphicSquare.svg";
function MobileExample1({ MobileBreadCrumbsSection, clickEvent }) {
  return (
    <div className="MobileBreadCrumbsNav">
      {MobileBreadCrumbsSection.BreadCrumbsNavigation.map((sectionName, i) => {
        return (
          <>
            {" "}
            <button
            key={i}
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
            {i === 1 && (
              <>
                <div key={4} className="mobileButtonsDiv">
                  <button key={5} className="buttonOpt1">Option 1</button>
                  <button key={6} className="buttonOpt2">Option 2</button>
                </div>
                <div key={7} className="sectionSlider"></div>
                <div key={8} className="DescriptionText">
                  {MobileBreadCrumbsSection.sectionDataInformation}
                </div>
                <img key={9} src={GraphicImage1}></img>
                <br></br>
              </>
            )}
            {i === 2 && (
              <div key={10} className="mobileButtonsDiv2">
                <button key={11} className="buttonBack">Back</button>
                <button key={12} className="buttonNext">Next</button>
              </div>
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
