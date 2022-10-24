import { connect } from "react-redux";
import BreadCrumbsMenu from "../../../Components/BreadCrumbsMenu";
import NavigationHeader from "../../../Components/NavigationHeader";
import Description from "../Description";
import ExampleOne from "../Example1";
import ExampleTwo from "../Example2";
import "./Message.scss";
const data = [
  "Your data visualization should have a clear message. The data points that are",
  "more important than others should be emphasized to clearly indicate the key",
  "insights of the data. Use content hierarchy, such as clear headings and",
  "subheadings, as well as design tools such as color, size, layout, and iconography,",
  "to visually highlight key points.",
];

function Testing({ BreadCrumbsSection }) {
  switch (BreadCrumbsSection.sectionState) {
    case "Description":
      return <Description data={data} section={"Message"} />;
    case "Example 1":
      return <ExampleOne />;
    case "Example 2":
      return <ExampleTwo />;
    default:
      return <Description data={data} section={"Message"} />;
  }
}

function Message({ BreadCrumbsSection }) {
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
export default connect(mapStateToProps, {})(Message);
