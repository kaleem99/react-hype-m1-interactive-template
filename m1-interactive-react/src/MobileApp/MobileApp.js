import { connect, useDispatch } from "react-redux";
import "./MobileApp.scss";
import mobileImage from "../images/graphicSquare.svg";
// import NavigationHeader from "./Components/NavigationHeader";
// import LandingScene from "./Pages/landingScene";
// import Home from "./Pages/Home";
import Button from "../Components/button";
import MobileHomePage from "./MobileHomePage";
function MobileLandingPage() {
  const dispatch = useDispatch();
  return (
    <div className="MobileBody">
      <img className="squareImage" src={mobileImage}></img>
      <h1 className="Header1">This is the length of the heading</h1>
      <h2 className="Header2">Short-ish subheading</h2>
      <Button
        key={5}
        classNameText="StartButton"
        text="Start"
        event={() => dispatch({ type: "START_INTERACTIVE" })}
      />
    </div>
  );
}
function MobileApp({ start }) {
  return (
    <div className="MobileApp">
      <div className="mobileTemplate">
        <div className="topHeader">
          <h1 className="Header">Infographic title goes here</h1>
        </div>
        {!start ? <MobileLandingPage /> : <MobileHomePage />}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    start: state.SimpleStates.Start,
  };
};
export default connect(mapStateToProps, {})(MobileApp);
