import { connect } from "react-redux";
import BreadCrumbsMenu from "../../../Components/BreadCrumbsMenu";
import NavigationHeader from "../../../Components/NavigationHeader";
import Description from "../Description";
import "./Form.scss";
const data = [
  "There are many ways to visually represent data. Common forms of ",
  " data visualization are bar graphs, line graphs, scatter plots, and pie",
  " charts. Choosing the most effective form depends on the type of data ",
  " values you aim to present, the insights you want the audience to gain,",
  " and the story that you aim to tell through the data.",
  " Begin by asking yourself what you want to represent in the ",
  " visualization. For example, do you want to show a comparison,",
  " relationship, hierarchy, distribution, concept, pattern, or composition",
  " between two or more sets of data? Importantly, effective data forms ",
  " account for the audience’s biases, context, and data usage. Thus, ",
  " when choosing a form, consider whether it will be understood by the",
  " target audience.",
];
function Testing({BreadCrumbsSection}) {
  console.log(BreadCrumbsSection);
  switch (BreadCrumbsSection) {
    case "Description":
      return <Description data={data} section={"Form"} />;
    case "Example 1":
      return <h1>Example 1</h1>;
    default:
      return <Description data={data} section={"Form"} />;
  }
}
function Form({ section, BreadCrumbsSection }) {
  return (
    <div className="Form">
      <BreadCrumbsMenu />
      <Testing BreadCrumbsSection={BreadCrumbsSection} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    section: state.BreadCrumbsSection,
    BreadCrumbsSection: state.BreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(Form);
