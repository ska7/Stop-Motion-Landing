import React from "react";

export default function Guides({ guides, h3Style, centerStyle }) {
  return (
    <>
      <h3 style={h3Style}>3 чек-листа :</h3>
      <ul style={centerStyle}>
        {guides.map((guide, i) => {
          return (
            <li key={i} style={{ fontWeight: "1000" }}>
              {" "}
              ❧&nbsp;{guide}
            </li>
          );
        })}
      </ul>
    </>
  );
}
