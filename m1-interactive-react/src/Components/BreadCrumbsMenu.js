import { connect, useDispatch } from "react-redux";
import "./Components.scss";
function BreadCrumbsMenu({ BreadCrumbsSection, BreadCrumbsNavigation }) {
  const dispatch = useDispatch();
  const clickEvent = (val) => {
    dispatch({ type: "ClearOptions" });
    dispatch({ type: val });
  };
  return (
    <div className="BreadCrumbs">
      {BreadCrumbsNavigation.map((val, i) => {
        return (
          <>
            <button
              onClick={() => clickEvent(val)}
              className={
                BreadCrumbsSection.sectionState === val ? "btnBCA" : "btnBC"
              }
            >
              {val}
            </button>
            {i === 0 || i === 1 ? <p className="BC"> / </p> : ""}
          </>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    BreadCrumbsSection: state.BreadCrumbsSection,
    BreadCrumbsNavigation: state.BreadCrumbsSection.BreadCrumbsNavigation,
  };
};

export default connect(mapStateToProps, {})(BreadCrumbsMenu);
