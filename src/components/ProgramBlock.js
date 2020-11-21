import React from "react";

export default function ProgramBlock({ icon, blockName, lessons }) {
  const titleStyle = {
    paddingTop: "50px",
    paddingBottom: "50px",
    color: "rgb(255,193,7)",
    fontWeight: "500",
    textDecoration: "underline",
  };
  return (
    <div>
      <h2 className="program-block">
        {blockName}
        <img className="program-icon" src={icon}></img>
      </h2>
      <div className="program-plan-section">
        <div
          id="program"
          className={`lessons-list ${blockName === "МЕНТОРСТВО" && "mentor"}`}
        >
          {lessons.map((lesson, index) => {
            return (
              <span data-aos="slide-up" className="lesson">
                <h2>{`Урок ${index + 1}`}</h2>
                {blockName === "БЛОК 2: АНИМАЦИЯ" && index === 0 ? (
                  <React.Fragment>
                    <b
                      style={titleStyle}
                      className="long-lesson"
                    >{`Ошибки в анимации:`}</b>
                    <b className="long-lesson">{`• расчлененка`}</b>
                    <b className="long-lesson">{`• длина кадра`}</b>
                    <b className="long-lesson">{`• качество исходника`}</b>
                    <b
                      style={titleStyle}
                      className="long-lesson"
                    >{`Вдохновение:`}</b>
                    <b className="long-lesson">{`• Pinterest`}</b>
                    <b className="long-lesson">{`• хэштеги`}</b>
                    <b className="long-lesson">{`• аккаунты в Instagram`}</b>
                    <b className="long-lesson">{`• статичные изображения`}</b>
                    <b
                      style={titleStyle}
                      className="long-lesson"
                    >{`Музыка:`}</b>
                    <b className="long-lesson">{`• Youtube`}</b>
                    <b className="long-lesson">{`• Soundcloud`}</b>
                    <b className="long-lesson">{`• музыкальные сервисы (поиск по похожим)`}</b>
                  </React.Fragment>
                ) : (
                  <b>{lesson}</b>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// `Ошибки в анимации :
// • расчлененка
// • длина кадра
// • качество исходника
// Вдохновение :
// • пинтерест
// • хэштеги
// • аккаунты в инстаграм
// • статичные изображение
// Музыка :
// • ютуб
// • саунд клауд
// • сервисы музыкальные (поиск по похожим)
// `;
