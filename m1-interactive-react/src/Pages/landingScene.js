import { useDispatch } from "react-redux";
import { useRef } from "react";
import "./Pages.scss";
import Image1 from "../images/desktopGraphicLandingImage.svg";
import Button from "../Components/button";
export default function LandingScene() {
  const dispatch = useDispatch();
  return (
    <div className="LandingPage" key={0}>
      <div className="LandingScenes" key={1}>
        <div id="A" key={2}>
          <h1 tabIndex={0} className="Heading1" key={3}>
            This is the length of a heading
          </h1>
          <h2 tabIndex={0} className="Heading2" key={4}>
            Short-ish subheading
          </h2>
        </div>
        <div id="B" key={6}>
          <img
            key={7}
            tabIndex={0}
            className="HomeImage"
            alt="graphic template"
            src={Image1}
          />
        </div>
        <div id="C">
          {" "}
          <Button
            key={5}
            classNameText="btn1"
            text="Start"
            tabIndex={1}
            event={() => dispatch({ type: "START_INTERACTIVE" })}
          />
        </div>
      </div>
    </div>
  );
}
