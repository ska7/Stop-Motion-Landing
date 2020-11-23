import React from "react";
import { Link } from "react-scroll";

export default function Intro() {
  return (
    <div className="intro-section">
      <h2 className="course-label">
        Авторский курс по созданию рекламных макетов и анимации от @sm.sahara и
        @ta.ariadna
      </h2>
      <h1>
        Заработок в Instagram на навыке создания рекламных макетов и stop-motion
        . Если ты еще не с нами, тогда чего же ты ждешь?
      </h1>
      <Link
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        to="prices"
        activeClass="active"
        smooth={true}
        duration={1000}
      >
        <button type="button" className="join-button btn btn-warning">
          ПРИСОЕДИНИТЬСЯ
        </button>
      </Link>
    </div>
  );
}
