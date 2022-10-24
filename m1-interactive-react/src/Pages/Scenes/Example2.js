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
      <br></br>
      <img src={ImageGraphic}></img>
    </div>
  );
}
