import React from "react";

export default function Calls({ calls, h3Style }) {
  return (
    <>
      {" "}
      <h3 style={h3Style}>4 созвона :</h3>
      <ul>
        {calls.map((item, i) => {
          return <li key={i}> ❧&nbsp;{item}</li>;
        })}
      </ul>
    </>
  );
}
