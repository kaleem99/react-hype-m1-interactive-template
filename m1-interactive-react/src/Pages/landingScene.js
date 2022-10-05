import { useDispatch } from "react-redux";
import "./Pages.scss";
import Image1 from "../images/graphicImage2.svg";
import Button from "../Components/button";
export default function LandingScene() {
  const dispatch = useDispatch();
  return (
    <div className="LandingPage">
      <div className="LandingScenes">
        <div id="A">
          <h1 tabIndex={0} className="Heading1">
            This is the length<br></br> of a heading
          </h1>
          <h2 tabIndex={0} className="Heading2">
            Short-ish subheading
          </h2>
          {/* <button
            
            tabIndex={0}
            className="btn1"
          >
            Start
          </button> */}
          <Button
            classNameText="btn1"
            text="Start"
            event={() => dispatch({ type: "START_INTERACTIVE" })}
          />
        </div>
        <div id="B">
          <img tabIndex={0} className="HomeImage" src={Image1} />
        </div>
      </div>
    </div>
  );
}
