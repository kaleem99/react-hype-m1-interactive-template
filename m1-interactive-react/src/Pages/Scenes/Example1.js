import "./Scenes.module.scss";
import ImageGraphic from "../../images/graphicImage2.svg";
import DefaultOptions from "./DefaultOptions";
import { useState } from "react";
import { connect } from "react-redux";
import { Tooltip } from "@mui/material";

function ExampleOne({ OptionSelected, option }) {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const clickEvent = (event) => {
    if (event === 1 && !state1) {
      setState1(true);
    }
    if (event === 1 && state1) {
      setState1(false);
    }
    if (event === 2 && !state2) {
      setState2(true);
    }
    if (event === 2 && state2) {
      setState2(false);
    }
  };
  let OptionsPopoutBody = "";
  switch (OptionSelected) {
    case "Option_1":
      OptionsPopoutBody = "";
      break;
    default:
      OptionsPopoutBody = <DefaultOptions />;
      break;
  }
  return (
    <div className="ExampleOne">
      {OptionsPopoutBody}
      <br></br>
      <img src={ImageGraphic} alt="placeholder graphic" tabIndex={0}></img>

      {!option ? (
        <div className="GraphicImage">
          <div className="Hotspot1Div">
            {state1 ? (
              <p tabIndex={0} className="hotspotText">
                Random text... 1
              </p>
            ) : (
              <p></p>
            )}
            <Tooltip title="Hotspot 1" placement="top">
              <button
                aria-label="hotspot 1"
                onClick={() => clickEvent(1)}
                className="hotspotBtn"
              ></button>
            </Tooltip>
          </div>
          <div className="Hotspot2Div">
            <Tooltip title="Hotspot 2" placement="top">
              <button
                aria-label="hotspot 2"
                onClick={() => clickEvent(2)}
                className="hotspotBtn"
              ></button>
            </Tooltip>
            {state2 && (
              <p tabIndex={0} className="hotspotText">
                Random text... 2
              </p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    OptionSelected: ownProps.OptionSelected,
    option: state.option,
  };
};

export default connect(mapStateToProps, {})(ExampleOne);
