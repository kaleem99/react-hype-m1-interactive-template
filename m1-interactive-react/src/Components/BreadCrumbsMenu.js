import { connect, useDispatch } from "react-redux";
import "./Components.scss";
const BreadCrumbsNavigation = ["Description", "Example 1", "Example 2"];
function BreadCrumbsMenu({ BreadCrumbsSection }) {
  const dispatch = useDispatch();
  return (
    <div className="BreadCrumbs">
      {/* <button className="btnBC">Description</button>
      <p className="BC">/</p>
      <button className="btnBC">Example 1</button>
      <p className="BC">/</p>
      <button className="btnBC">Example 2</button> */}
      {BreadCrumbsNavigation.map((val, i) => {
        return (
          <>
            <button
              onClick={() => dispatch({ type: val })}
              className="btnBC"
              style={
                BreadCrumbsSection === val
                  ? { color: "#1475d4", fontWeight: "bold" }
                  : { color: "black" }
              }
            >
              {val}
            </button>
            {i === 0 || i === 1 ? <p className="BC">/</p> : ""}
          </>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    BreadCrumbsSection: state.BreadCrumbsSection,
  };
};

export default connect(mapStateToProps, {})(BreadCrumbsMenu);
