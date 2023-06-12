import { connect, useDispatch } from "react-redux";
import Button from "../Components/button";
import ScenePopout from "../Components/ScenePopout";
import "./Home.module.scss";

const Navigation = ["Option 1", "Option 2", "Option 3", "Option 4"];
function Home({ popup, section, TabIndex }) {
  const dispatch = useDispatch();
  const clickEvent = (i) => {
    dispatch({ type: "Description" });
    dispatch({ type: Navigation[i] });
  };
  return (
    <div className="HomePage" key={0}>
      <div className="Navigation" key={1}>
        {Navigation.map((nav, i) => (
          <button
            key={i}
            tabIndex={TabIndex}
            onClick={() => clickEvent(i)}
            className="NavButton"
            style={
              section.option === nav
                ? { backgroundColor: "#1475d4", color: "white" }
                : { backgroundColor: "" }
            }
          >
            {nav}
          </button>
        ))}
      </div>
      <div className="ScenePopout" key={3}>
        <ScenePopout />
      </div>
      {popup && (
        <>
          {" "}
          <div className="PopupBackground" key={4}></div>
          <div className="popup" key={5}>
            <div className="centeredTextButton" key={6}>
              <p key={7} tabIndex={0}>
                Click on one of the four topics to learn more.
              </p>
              <br></br>
              <Button
                key={8}
                text="Okay"
                event={() => dispatch({ type: "CLOSE_POPUP" })}
                classNameText="btn1"
              ></Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    popup: state.SimpleStates.Popup,
    section: state.section,
    TabIndex: state.SimpleStates.TabIndex,
  };
};
export default connect(mapStateToProps, {})(Home);
