import { connect, useDispatch } from "react-redux";
import Button from "../Components/button";
import ScenePopout from "../Components/ScenePopout";
import "./Pages.scss";

const Navigation = ["Option 1", "Option 2", "Option 3", "Option 4"];
function Home({ popup, section, TabIndex }) {
  const dispatch = useDispatch();
  return (
    <div className="HomePage">
      <div className="Navigation">
        {Navigation.map((nav, i) => (
          <button
            tabIndex={TabIndex}
            onClick={() => dispatch({ type: Navigation[i] })}
            className="NavButton"
            style={
              section === nav
                ? { backgroundColor: "#1475d4", color: "white" }
                : { backgroundColor: "" }
            }
          >
            {nav}
          </button>
        ))}
      </div>
      <div className="ScenePopout">
        <ScenePopout />
      </div>
      {popup && (
        <>
          {" "}
          <div className="PopupBackground"></div>
          <div className="popup">
            <div className="centeredTextButton">
              <p tabIndex={0}>Click on one of the four topics to learn more.</p>
              <br></br>
              <Button
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
