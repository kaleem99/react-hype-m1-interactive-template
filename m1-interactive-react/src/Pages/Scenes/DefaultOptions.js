import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./Scenes.scss";

function DefaultOptions({ option, section, BreadCrumbsSection }) {
  const dispatch = useDispatch();
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
            onClick={() => dispatch({ type: "Option1" })}
            className="OptionBtn left"
          >
            Option 1
          </button>
          <div className="OptionTextDiv">
            <p className="OptionText">
              Select "Option" 1 or "Option 2" to learn more
            </p>
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
}

export function OptionOne({ text, dispatch }) {
  return (
    <div className="OptionsPopout" style={{ gridTemplateColumns: "auto auto" }}>
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
    <div className="OptionsPopout" style={{ gridTemplateColumns: "auto auto" }}>
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
