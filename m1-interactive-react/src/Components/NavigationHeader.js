import "./NavigationHeader.scss";
import closeImage from "../images/exit.svg";
import refreshImage from "../images/refresh.svg";
import { connect } from "react-redux";

function NavigationHeader({ TabIndex }) {
  return (
    <div className="navHeader">
      <p tabIndex={TabIndex} className="title">
        Infographic title goes here
      </p>
      <div className="icons">
        {/* <img className="img" src={closeImage} /> */}
        <input
          // tabIndex={TabIndex}
          className="btnImg"
          type="image"
          src={closeImage}
          alt=""
        />
        {/* <img className="img" src={refreshImage} /> */}
        <input
          // tabIndex={TabIndex}
          alt=""
          onClick={() => window.location.reload()}
          className="btnImg"
          type="image"
          src={refreshImage}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    TabIndex: state.SimpleStates.TabIndex,
  };
};

export default connect(mapStateToProps, {})(NavigationHeader);
