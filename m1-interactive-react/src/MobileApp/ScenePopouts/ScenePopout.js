import "./MobileHomePage.scss";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
const navigationOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
function ScenePopout({}) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Click on one of the four topics to learn more</h1>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    navigation: state.navigation,
    section: state.section,
  };
};
export default connect(mapStateToProps, {})(ScenePopout);
