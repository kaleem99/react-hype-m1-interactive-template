import { connect } from "react-redux";
import "./index.module.css";
import NavigationHeader from "../src/Components/NavigationHeader";
import LandingScene from "../src/Pages/landingScene";
import Home from "../src/Pages/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/reducers";
const store = createStore(reducers);
function App({ start }) {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="template">
          <NavigationHeader />
          <Home />
        </div>
      </div>
    </Provider>
  );
}
// const mapStateToProps = (state, ownProps) => {
//   return {
//     start: state.SimpleStates.Start,
//   };
// };
export default App;
