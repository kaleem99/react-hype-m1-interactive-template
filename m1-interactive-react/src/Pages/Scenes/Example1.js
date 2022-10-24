import "./Scenes.scss";
import ImageGraphic from "../../images/graphicImage2.svg";
import DefaultOptions from "./DefaultOptions";
import { useState } from "react";
import { connect } from "react-redux";
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
      <img src={ImageGraphic}></img>

      {!option ? (
        <div className="GraphicImage">
          <div className="Hotspot1Div">
            {state1 ? <p className="hotspotText">Random text... 1</p> : <p></p>}
            <button
              onClick={() => clickEvent(1)}
              className="hotspotBtn"
            ></button>
          </div>
          <div className="Hotspot2Div">
            <button
              onClick={() => clickEvent(2)}
              className="hotspotBtn"
            ></button>
            {state2 && <p className="hotspotText">Random text... 2</p>}
          </div>
        </div>
      ) : ""}
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
