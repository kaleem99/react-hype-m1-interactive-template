import { connect, useDispatch } from "react-redux";
import "./MobileApp.scss";
import mobileImage from "../images/graphicSquare.svg";
// import NavigationHeader from "./Components/NavigationHeader";
// import LandingScene from "./Pages/landingScene";
// import Home from "./Pages/Home";
import Button from "../Components/button";
import MobileHomePage from "./MobileHomePage";
function MobileLandingPage({ BreadCrumbsSection }) {
  const dispatch = useDispatch();
  const startInteractive = () => {
    dispatch({ type: "START_INTERACTIVE" });
    dispatch({ type: "CLEAR_BC_Mobile" });
  };
  return (
    <div className="MobileBody">
      <img alt="placeholder graphic" className="squareImage" src={mobileImage} tabIndex="0" ></img>
      <h1 className="Header1">This is the length of the heading</h1>
      <h2 className="Header2">Short-ish subheading</h2>
      <Button
        key={5}
        classNameText="StartButton"
        text="Start"
        event={() => startInteractive()}
      />
    </div>
  );
}
function MobileApp({ start, BreadCrumbsSection }) {

  return (
    <div className="MobileApp">
      <div className="mobileTemplate">
        <div className="topHeader">
          <h1 className="Header">Infographic title goes here</h1>
        </div>
        {!start ? (
          <MobileLandingPage BreadCrumbsSection={BreadCrumbsSection} />
        ) : (
          <MobileHomePage />
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    start: state.SimpleStates.Start,
    BreadCrumbsSection: state.BreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(MobileApp);
