import { connect } from "react-redux";
import BreadCrumbsMenu from "../../../Components/BreadCrumbsMenu";
import NavigationHeader from "../../../Components/NavigationHeader";
import Description from "../Description";
import ExampleOne from "../Example1";
import ExampleTwo from "../Example2";
// import "./Accuracy.scss";
const data = [
  "The purpose of data visualization is to accurately represent data in a",
  " visual form in order to communicate key insights to a target audience.",
  "A data visualization that distorts or misrepresents information is",
  "ineffective and can lead to misinterpretation.",
];

function Testing({ BreadCrumbsSection }) {
  switch (BreadCrumbsSection.sectionState) {
    case "Description":
      return <Description data={data} section={"Accuracy"} />;
    case "Example 1":
      return <ExampleOne />;
    case "Example 2":
      return <ExampleTwo />;
    default:
      return <Description data={data} section={"Accuracy"} />;
  }
}

function Accuracy({ BreadCrumbsSection }) {
  return (
    <div className="Accuracy">
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
export default connect(mapStateToProps, {})(Accuracy);
