import { connect } from "react-redux";
import Accuracy from "../Pages/Scenes/Accuracy/Accuracy";
import Clutter from "../Pages/Scenes/Clutter/Clutter";
import Form from "../Pages/Scenes/Form/Form";
import Message from "../Pages/Scenes/Message/Message";

function ScenePopout({ section }) {
  let body = "";
  switch (section.option) {
    case "Option 1":
      body = <Form />;
      break;
    case "Option 2":
      body = <Accuracy />;
      break;
    case "Option 3":
      body = <Message />;
      break;
    case "Option 4":
      body = <Clutter />;
      break;

    default:
      body = "";
      break;
  }
  return <div>{body}</div>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    section: state.section,
  };
};

export default connect(mapStateToProps, {})(ScenePopout);
