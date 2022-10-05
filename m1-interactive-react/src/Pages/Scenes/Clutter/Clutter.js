import { connect } from "react-redux";
import BreadCrumbsMenu from "../../../Components/BreadCrumbsMenu";
import NavigationHeader from "../../../Components/NavigationHeader";
import Description from "../Description";
import "./Clutter.scss";
const data = [
  "Effective data visualizations only contain necessary information",
  "designed in the most legible way. When graphic elements and effects",
  "such as lines, labels, borders, and color are overused, they can",
  "distract your audience and make the key message illegible or unclear.",
];
function Clutter({ section }) {
  return (
    <div className="Form">
      <BreadCrumbsMenu />
      <Description data={data} section={"Clutter"} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    section: state.BreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(Clutter);
