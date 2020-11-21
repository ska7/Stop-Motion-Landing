import React, { useEffect } from "react";
import adIcon from "../img/icons/ad-solid.svg";
import bullhornIcon from "../img/icons/bullhorn-solid.svg";
import lightbulbIcon from "../img/icons/lightbulb-solid.svg";
import commentDollarIcon from "../img/icons/comment-dollar-solid.svg";
import studentsIcon from "../img/icons/education.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CourseInfo() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="course-info-section">
      <div className="course-target">
        <img src={studentsIcon}></img>
        <h1>Этот курс подойдет</h1>
        <div className="if-you-container">
          <div className="types-section">
            <span className="type">
              Cтудентам и работающим людям, не знакомым с миром фриланса. Тем,
              кто начинает с нуля
            </span>
            <b className="dots-and-cross">{"⁜"}</b>
            <span className="type">
              Фрилансерам. Тем, кто уже работает в сфере фриланса и зарабатывает
              в Инстаграм
            </span>
            <b className="dots-and-cross">{"⁜"}</b>
            <span className="type">
              Блогерам. Тем, кто уже не новичок в Инстаграм и блогерстве
            </span>
            <b className="dots-and-cross">{"⁜"}</b>
            <span className="type">
              Тем, кто хочет зарабатывать в Инстаграм
            </span>
          </div>
        </div>
      </div>

      <div className="benefits-list">
        <h1>После курса ты:</h1>
        <span data-aos="slide-left" className="benefit">
          <img src={""}></img>
          <b> Обретешь навык, который ты сможешь монетизировать </b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={""}></img>
          <b>Заработаешь свои первые деньги на фрилансе</b>
        </span>
        <span data-aos="slide-left" className="benefit">
          <img src={commentDollarIcon}></img>
          <b> Поднимешь прайс на свои услуги</b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={""}></img>
          <b>Будешь знать как удержать внимание аудитории</b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={bullhornIcon}></img>
          <b>Точно будешь знать где и как найти клиента</b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={""}></img>
          <b>
            Построишь личный бренд и выстроишь систему из своего профиля в
            Instagram, который станет приносить тебе клиентов постоянно [ на
            тарифе &nbsp;
            <span style={{ color: "rgb(255, 193, 7)" }}>«Менторство» </span> и
            <span style={{ color: "rgb(255, 193, 7)" }}> «Индивидуальный»</span>{" "}
            ]
          </b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={""}></img>
          <b>
            Научишься делать крутой монтаж, который пригодится для создания
            макетов и сторис
          </b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={""}></img>
          <b>
            Освоишь навык создания набирающей популярность анимации stop-motion
          </b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={""}></img>
          <b>
            Узнаешь как делать кликабельные рекламные макеты, которые будут
            досматривать и привлекать новых подписчиков.
          </b>
        </span>
        <span data-aos="slide-right" className="benefit">
          <img src={""}></img>
          <b>
            Уже во время курса ты соберешь портфолио, что упростит поиск клиента
            и отразит твои умения
          </b>
        </span>
      </div>
    </div>
  );
}
