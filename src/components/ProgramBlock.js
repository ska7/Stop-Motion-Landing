import React from "react";

export default function ProgramBlock({ icon, blockName, lessons }) {
  return (
    <div>
      <h2 className="program-block">
        {blockName}
        <img className="program-icon" src={icon}></img>
      </h2>
      <div className="program-plan-section">
        <div id="program" className="lessons-list">
          {lessons.map((lesson, index) => {
            return (
              <span data-aos="slide-up" key={index} className="lesson">
                <h2>{`Урок ${index + 1}`}</h2>
                <b>{lesson}</b>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
