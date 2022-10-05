import { connect } from "react-redux";
import BreadCrumbsMenu from "../../../Components/BreadCrumbsMenu";
import NavigationHeader from "../../../Components/NavigationHeader";
import Description from "../Description";
import "./Message.scss";
const data = [
  "Your data visualization should have a clear message. The data points that are",
  "more important than others should be emphasized to clearly indicate the key",
  "insights of the data. Use content hierarchy, such as clear headings and",
  "subheadings, as well as design tools such as color, size, layout, and iconography,",
  "to visually highlight key points.",
];
function Message({ section }) {
  return (
    <div className="Form">
      <BreadCrumbsMenu />
      <Description data={data} section={"Message"} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    section: state.BreadCrumbsSection,
  };
};
export default connect(mapStateToProps, {})(Message);
