import React from "react";

import ProgramBlock from "./ProgramBlock";

export default function Program({ program }) {
  return (
    <div id="program" className="program-section">
      <h1>Программа</h1>
      {program.map((p) => {
        return (
          <ProgramBlock
            icon={p.icon}
            blockName={p.blockName}
            lessons={p.lessons}
          />
        );
      })}
    </div>
  );
}
