import React from "react";

export default function ProgramBlockMentor({ icon, blockName, lessons }) {
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
        <div className="lessons-list" id="program">
          <b className="lesson">• Все обучающие модули из программы</b>
          <b
            style={{
              border: "1px solid rgb(255,193,7)",
              borderRadius: "15px",
              padding: "10px",
            }}
            className="lesson"
          >
            4 СОЗВОНА :
          </b>
          <b className="lesson">
            • С чего начать вести экспертный блог? Упаковка, концепция, разбор
            ошибок{" "}
          </b>
          <b className="lesson">
            • Как строить личный бренд? Смыслы, ценности{" "}
          </b>
          <b className="lesson">
            • Что транслировать эксперту в сторис? Что в постах? Как писать
            тексты, как снимать сторис?
          </b>
          <b className="lesson">
            • Продвижение в Инстаграм, способы, фишки для снижения цены за
            подписчика
          </b>
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
