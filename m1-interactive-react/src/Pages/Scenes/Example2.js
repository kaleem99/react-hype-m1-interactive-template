import "./Scenes.scss";
import ImageGraphic from "../../images/graphicImage2.svg";
import DefaultOptions from "./DefaultOptions";
export default function ExampleTwo({ OptionSelected }) {
  let OptionsPopoutBody = "";
  switch (OptionSelected) {
    case "Option_1":
      OptionsPopoutBody = "";
      break;
    default:
      OptionsPopoutBody = <DefaultOptions />;
      break;
  }
  return (
    <div className="ExampleOne">
      {OptionsPopoutBody}
      <div
        className="GraphicImage"
        style={{ position: "unset", marginTop: "18.5px" }}
      >
        <img src={ImageGraphic}></img>
      </div>
    </div>
  );
}
