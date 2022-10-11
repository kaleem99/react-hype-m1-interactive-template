import { connect } from "react-redux";
import BreadCrumbsMenu from "../../../Components/BreadCrumbsMenu";
import NavigationHeader from "../../../Components/NavigationHeader";
import Description from "../Description";
import ExampleOne from "../Example1";
import ExampleTwo from "../Example2";
import "./Clutter.scss";
const data = [
  "Effective data visualizations only contain necessary information",
  "designed in the most legible way. When graphic elements and effects",
  "such as lines, labels, borders, and color are overused, they can",
  "distract your audience and make the key message illegible or unclear.",
];

function Testing({ BreadCrumbsSection }) {
  switch (BreadCrumbsSection) {
    case "Description":
      return <Description data={data} section={"Clutter"} />;
    case "Example 1":
      return <ExampleOne />;
    case "Example 2":
      return <ExampleTwo />;
    default:
      return <Description data={data} section={"Clutter"} />;
  }
}

function Clutter({ BreadCrumbsSection }) {
  return (
    <div className="Form">
      <BreadCrumbsMenu />
      <Testing BreadCrumbsSection={BreadCrumbsSection} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    BreadCrumbsSection: state.BreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(Clutter);
