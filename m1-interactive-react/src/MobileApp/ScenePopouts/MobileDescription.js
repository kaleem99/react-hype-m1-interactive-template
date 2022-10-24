import { connect } from "react-redux";

function MobileDescription({ BreadCrumbsSection, clickEvent }) {
  return (
    <div className="MobileBreadCrumbsNav">
      {BreadCrumbsSection.BreadCrumbsNavigation.map((sectionName, i) => {
        return (
          <>
            {" "}
            <button
              className="BreadCrumbsButton Description"
              style={
                sectionName === BreadCrumbsSection.sectionState
                  ? { backgroundColor: "rgb(0, 122, 255)", color: "white" }
                  : { backgroundColor: "white" }
              }
              onClick={() => clickEvent(sectionName)}
            >
              {sectionName}
            </button>
            {i === 0 && (
              <div className="DescriptionText">
                {BreadCrumbsSection.sectionDataInformation}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    sectionDataInformation: state.sectionDataInformation,
  };
};

export default connect(mapStateToProps, {})(MobileDescription);
