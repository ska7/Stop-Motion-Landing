import React from "react";
import layout from "../img/icons/maket.png";
import animationIcon from "../img/icons/animation.png";
import clientIcon from "../img/icons/client.png";
import mentorshipIcon from "../img/icons/mentorship.png";
import {
  lessonsBlockFour,
  lessonsBlockOne,
  lessonsBlockThree,
  lessonsBlockTwo,
} from "./lessons";
import ProgramBlock from "./ProgramBlock";

export default function Program() {
  return (
    <div id="program" className="program-section">
      <h1>Программа</h1>
      <ProgramBlock
        icon={layout}
        blockName="БЛОК 1: РЕКЛАМНЫЕ МАКЕТЫ"
        lessons={lessonsBlockOne}
      />
      <ProgramBlock
        icon={animationIcon}
        blockName="БЛОК 2: АНИМАЦИЯ"
        lessons={lessonsBlockTwo}
      />
      <ProgramBlock
        icon={clientIcon}
        blockName="БЛОК 3: ПОИСК ЗАКАЗОВ И РАБОТА С КЛИЕНТОМ "
        lessons={lessonsBlockThree}
      />
      <ProgramBlock
        icon={mentorshipIcon}
        blockName="МЕНТОРСТВО"
        lessons={lessonsBlockFour}
      />
    </div>
  );
}
