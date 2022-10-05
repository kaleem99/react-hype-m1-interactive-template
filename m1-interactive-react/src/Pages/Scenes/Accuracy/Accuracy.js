import { connect } from "react-redux";
import BreadCrumbsMenu from "../../../Components/BreadCrumbsMenu";
import NavigationHeader from "../../../Components/NavigationHeader";
import Description from "../Description";
import "./Accuracy.scss";
const data = [
  "The purpose of data visualization is to accurately represent data in a",
  " visual form in order to communicate key insights to a target audience.",
  "A data visualization that distorts or misrepresents information is",
  "ineffective and can lead to misinterpretation.",
];
function Accuracy({ section }) {
  return (
    <div className="Form">
      <BreadCrumbsMenu />
      <Description data={data} section={"Accuracy"} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    section: state.BreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(Accuracy);
