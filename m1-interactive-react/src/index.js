import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DestopApp from "./App";
import MobileApp from "./MobileApp/MobileApp";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
const store = createStore(reducers);

function CheckPlatformCompatibility() {
  const size = useWindowSize();
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    if (windowSize < 1200) {
      return "true";
    }
    return windowSize;
  }
  return <div>{size.width < 1200 ? <MobileApp /> : <DestopApp />}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CheckPlatformCompatibility />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
