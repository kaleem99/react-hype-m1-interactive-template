import "./Scenes.module.scss";
import { useRef } from "react";
export default function Description({ section, data }) {
  const inputReference = useRef(null);
  const changeFocus = () => {
    inputReference.current.focus();
  };
  return (
    <div ref={inputReference}>
      <h2 tabIndex={0} className="sceneHeading" onMouseOver={() => changeFocus()}>
        {section}
      </h2>
      <p className="FormBody" tabIndex={0}>
        {data.join("")}
      </p>
    </div>
  );
}
