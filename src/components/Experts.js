import React from "react";
// import saharaPic from "../img/Sasha.HEIC";
import saharaPic from "../img/SashaCutAlt.PNG";
// import arinaPic from "../img/Арина.jpg";
import arinaPic from "../img/ArinaCut.PNG";
import ExpertCard from "./ExpertCard";

export default function Experts() {
  return (
    <div className="experts-section">
      <h1 id="experts">ЗНАКОМЬСЯ, ЭКСПЕРТКИ КУРСА</h1>
      <ExpertCard
        picture={saharaPic}
        name={"Саша @sm.sahara "}
        rank={`Экспертка по кликабельным макетам и личному бренду в Instagram.`}
        bio={[
          `1,5 года в профессии, более 400 макетов.`,
          `Создала блогерское агенство в 19 лет.`,
          `Работала с крупными блогерами 300к+`,
          `Рекорд с её макета - цена подписчика 1 рубль`,
          `Выращивает блогеров на консультациях`,
          `Знает всё о личном бренде и помогает строить его другим`,
        ]}
      />

      <ExpertCard
        picture={arinaPic}
        rank={`Cпециалистка в сфере коллажной анимации`}
        name={"Арина"}
        bio={[
          `Создает анимации для брендов`,
          `Знает как создать любую анимацию`,
          `Расскажет как заставить шевелиться любой элемент картинки`,
        ]}
      />
    </div>
  );
}
