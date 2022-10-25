import { connect, useDispatch } from "react-redux";
import GraphicImage1 from "../../images/graphicSquare.svg";
import AppData from "../../data/OptionsText.json";
import { useState } from "react";
function MobileExample1({
  section,
  MobileBreadCrumbsSection,
  clickEvent,
  option,
}) {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState(
    MobileBreadCrumbsSection.sectionDataInformation
  );
  const { sectionName, sectionState } = MobileBreadCrumbsSection;

  const clickOptionEvent = (opt) => {
    dispatch({ type: opt });
    setDataState(AppData[sectionName][sectionState][opt]);
  };
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
                  <button
                    key={5}
                    onClick={() => clickOptionEvent("Option1")}
                    className="buttonOpt1"
                    style={
                      option === "Option1"
                        ? {
                            backgroundColor: "rgb(20, 117, 212)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    Option 1
                  </button>
                  <button
                    key={6}
                    onClick={() => clickOptionEvent("Option2")}
                    className="buttonOpt2"
                    style={
                      option === "Option2"
                        ? {
                            backgroundColor: "rgb(229, 20, 112)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    Option 2
                  </button>
                </div>
                <div key={7} className="sectionSlider">
                  <div className={`optionSlider ${option}`}></div>
                </div>
                <div key={8} className="DescriptionText">
                  {dataState}
                </div>
                <img key={9} src={GraphicImage1}></img>
                <br></br>
              </>
            )}
            {i === 2 && (
              <div key={10} className="mobileButtonsDiv2">
                <button key={11} className="buttonBack">
                  Back
                </button>
                <button key={12} className="buttonNext">
                  Next
                </button>
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
    option: state.option,
    sectionDataInformation: state.sectionDataInformation,
    section: state.section.data,
  };
};

export default connect(mapStateToProps, {})(MobileExample1);
