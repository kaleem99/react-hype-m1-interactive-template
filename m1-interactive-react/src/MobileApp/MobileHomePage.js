import "./MobileHomePage.scss";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import ScenePopout from "./ScenePopouts/ScenePopout";
const navigationOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
function MobileHomePage({ navigation, section }) {
  const dispatch = useDispatch();
  const navDropDown = () => {
    if (!navigation) {
      dispatch({ type: "OPEN_NAV" });
    } else {
      dispatch({ type: "CLOSE_NAV" });
    }
    dispatch({ type: "CLEAR_BC_Mobile" });
  };
  const clickEvent = (i) => {
    dispatch({ type: navigationOptions[i] });
    dispatch({ type: "CLOSE_NAV" });
  };
  return (
    <div className="MobileHome">
      <button onClick={() => navDropDown()} className="NavigationMobile">
        <span className="Menu">Menu</span>
      </button>
      <div className="NavMobilePos">
        {navigation &&
          navigationOptions.map((item, i) => (
            <button
              onClick={() => clickEvent(i)}
              className="NavigationMobile"
              style={
                section.option === item
                  ? { backgroundColor: "#1475d4", color: "white" }
                  : { backgroundColor: "" }
              }
            >
              <span className="Menu">{item}</span>
            </button>
          ))}
      </div>
      <ScenePopout />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    navigation: state.navigation,
    section: state.section,
  };
};
export default connect(mapStateToProps, {})(MobileHomePage);

// {section.option === "" && !navigation ? (
//   <p className="HomeHeading">
//     Click on one of the four topics to learn more
//   </p>
// ) : (
//   ""
// )}
