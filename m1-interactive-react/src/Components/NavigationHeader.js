import "./NavigationHeader.scss";
import closeImage from "../images/exit.svg";
import refreshImage from "../images/refresh.svg";
import closeHoverImage from "../images/exitHover.svg";
import refreshHoverImage from "../images/refreshHover.svg";
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Tooltip } from "@mui/material";

function NavigationHeader({ TabIndex }) {
  const [close, setClose] = useState(closeImage);
  const [refresh, setRefresh] = useState(refreshImage);
  // document.getElementsByClassName("title")
  const inputReference = useRef(null);
  const changeFocus = () => {
    inputReference.current.focus();
  };

  return (
    <div className="navHeader" onMouseOver={() => changeFocus()}>
      <p className="title" ref={inputReference}>
        Infographic title goes here
      </p>
      <div className="icons">
        <Tooltip title="exit button" placement="top">
          <input
            className="btnImg"
            type="image"
            onBlur={() => setClose(closeImage)}
            onMouseOut={() => setClose(closeImage)}
            onMouseOver={() => setClose(closeHoverImage)}
            src={close}
            alt="exit"
          />
        </Tooltip>
        <Tooltip title="refresh button" placement="top">
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
        </Tooltip>
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
