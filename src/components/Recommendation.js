export default function Recommendation(props) {
  return (
    <>
      <h3>Recommendations: </h3>
      <div className="Info">
        <h3>{props.recommendation1}</h3>
        <h3>{props.recommendation2}</h3>
      </div>
    </>
  );
}
