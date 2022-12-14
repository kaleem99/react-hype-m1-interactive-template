import { connect } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MobileDescription({ MobileBreadCrumbsSection, clickEvent }) {
  return (
    <div className="MobileBreadCrumbsNav">
      {MobileBreadCrumbsSection.BreadCrumbsNavigation.map((sectionName, i) => {
        return (
          <>
            {" "}
            <button
              key={i}
              className="BreadCrumbsButton Description"
              style={
                sectionName === MobileBreadCrumbsSection.sectionState
                  ? { backgroundColor: "rgb(0, 122, 255)", color: "white" }
                  : { backgroundColor: "white" }
              }
              onClick={() => clickEvent(sectionName)}
            >
              {sectionName}
              {sectionName === MobileBreadCrumbsSection.sectionState ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </button>
            {i === 0 && (
              <div key={8} className="DescriptionText" tabIndex={0}>
                {MobileBreadCrumbsSection.sectionDataInformation}
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
