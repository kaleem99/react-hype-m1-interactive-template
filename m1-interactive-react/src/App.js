import logo from "./logo.svg";
import { connect } from "react-redux";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import LandingScene from "./Pages/landingScene";
import Home from "./Pages/Home";

function App({ start }) {
  return (
    <div className="App">
      <div className="template">
        <NavigationHeader />
        {!start ? <LandingScene /> : <Home />}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    start: state.SimpleStates.Start,
  };
};
export default connect(mapStateToProps, {})(App);
