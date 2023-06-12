// import "./Components.scss";
export default function Button({ text, classNameText, event }) {
  return (
    <button onClick={event ? event : ""} className={classNameText}>
      {text}
    </button>
  );
}
