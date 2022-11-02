import "./NavigationHeader.scss";
import closeImage from "../images/exit.svg";
import refreshImage from "../images/refresh.svg";
import closeHoverImage from "../images/exitHover.svg";
import refreshHoverImage from "../images/refreshHover.svg";
import { useState } from "react";
import { connect } from "react-redux";

function NavigationHeader({ TabIndex }) {
  const [close, setClose] = useState(closeImage);
  const [refresh, setRefresh] = useState(refreshImage);
  return (
    <div className="navHeader">
      <p className="title">
        Infographic title goes here
      </p>
      <div className="icons">
        {/* <img className="img" src={closeImage} /> */}
        <input
          // tabIndex={TabIndex}
          className="btnImg"
          type="image"
          onFocus={() => setClose(closeHoverImage)}
          onBlur={() => setClose(closeImage)}
          onMouseOut={() => setClose(closeImage)}
          onMouseOver={() => setClose(closeHoverImage)}
          src={close}
          alt=""
        />
        {/* <img className="img" src={refreshImage} /> */}
        <input
          // tabIndex={TabIndex}
          alt="refresh"
          onClick={() => window.location.reload()}
          onFocus={() => setRefresh(refreshHoverImage)}
          onBlur={() => setRefresh(refreshImage)}
          onMouseOut={() => setRefresh(refreshImage)}
          onMouseOver={() => setRefresh(refreshHoverImage)}
          className="btnImg"
          type="image"
          src={refresh}
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
