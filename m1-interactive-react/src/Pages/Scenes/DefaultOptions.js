import { useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
// import "./Scenes.scss";

function DefaultOptions({ option, section, BreadCrumbsSection }) {
  const [state, setState] = useState(-1);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const inputReference = useRef(null);
  const changeFocus = () => {
    if (!checked) {
      setState(0);
      document.querySelector(".left").focus();
    }
  };
  const setFocus = () => {
    if (!checked) {
      setChecked(true);
      document.querySelector(".right").focus();
    }
  };
  switch (option) {
    case "Option1":
      return (
        <OptionOne
          text={section[BreadCrumbsSection][option]}
          dispatch={dispatch}
        />
      );
    case "Option2":
      return (
        <OptionTwo
          text={section[BreadCrumbsSection][option]}
          dispatch={dispatch}
        />
      );
    default:
      return (
        <div className="OptionsPopout">
          <button
            ref={inputReference}
            tabIndex={state}
            onClick={() => dispatch({ type: "Option1" })}
            className="OptionBtn left"
            onBlur={() => setFocus()}
          >
            Option 1
          </button>
          <div className="OptionTextDiv">
            <p className="OptionText" tabIndex={0} onBlur={() => changeFocus()}>
              Select "Option" 1 or "Option 2" to learn more
            </p>
          </div>
          <button
            tabIndex={0}
            onClick={() => dispatch({ type: "Option2" })}
            className="OptionBtn right"
          >
            Option 2
          </button>
        </div>
      );
  }
}

export function OptionOne({ text, dispatch }) {
  return (
    <div
      className="OptionsPopout"
      style={{ gridTemplateColumns: "auto 200px" }}
    >
      <div className="OptionOneTextDiv">
        <button className="OptionBtn left One">Option 1</button>

        <p className="OptionText">{text}</p>
      </div>
      <button
        onClick={() => dispatch({ type: "Option2" })}
        className="OptionBtn right"
      >
        Option 2
      </button>
    </div>
  );
}
export function OptionTwo({ text, dispatch }) {
  return (
    <div
      className="OptionsPopout"
      style={{ gridTemplateColumns: "200px auto" }}
    >
      <button
        onClick={() => dispatch({ type: "Option1" })}
        className="OptionBtn left"
      >
        Option 1
      </button>

      <div className="OptionTwoTextDiv">
        <p className="OptionText">{text}</p>
        <button className="OptionBtn right Two">Option 2</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    option: state.option,
    section: state.section.data,
    BreadCrumbsSection: state.BreadCrumbsSection.sectionState,
  };
};
export default connect(mapStateToProps, {})(DefaultOptions);
