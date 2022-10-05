import "./Scenes.scss";
export default function Description({ section, data }) {
  return (
    <div>
      <h2 className="sceneHeading">{section}</h2>
      <p className="FormBody">
        {data.map((str, i) => {
          return (
            <>
              {str}
              <br></br>
            </>
          );
        })}
      </p>
    </div>
  );
}
