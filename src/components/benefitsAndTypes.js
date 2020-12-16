import monetize from "../img/icons/monetize.png";
import earn from "../img/icons/earn.png";
import instagram from "../img/icons/instagram.png";
import editing from "../img/icons/editing.png";
import portfolio from "../img/icons/portfolio.png";
import newsubs from "../img/icons/newsubs.png";
import stopmotion from "../img/icons/stopmotion.png";
import targetAudience from "../img/icons/target-audience.png";
import bullhornIcon from "../img/icons/bullhorn-solid.svg";
import commentDollarIcon from "../img/icons/comment-dollar-solid.svg";
import { Link } from "react-scroll";

export const types = [
  `Cтудентам и работающим людям, не знакомым с миром фриланса. Тем,
    кто начинает с нуля`,
  `Фрилансерам. Тем, кто уже работает в сфере фриланса и зарабатывает
    в Инстаграм`,
  `Блогерам. Тем, кто уже не новичок в Инстаграм и блогерстве`,
  `Тем, кто хочет зарабатывать в Инстаграм`,
];

export const benefits = [
  {
    text: `Обретешь навык, который ты сможешь монетизировать`,
    image: monetize,
  },
  {
    text: `Заработаешь свои первые деньги на фрилансе`,
    image: earn,
  },
  {
    text: `Поднимешь прайс на свои услуги`,
    image: commentDollarIcon,
  },
  {
    text: `Будешь знать как удержать внимание аудитории`,
    image: targetAudience,
  },
  {
    text: `Точно будешь знать где и как найти клиента`,
    image: bullhornIcon,
  },
  {
    text: (
      <span>
        {" "}
        Построишь личный бренд и выстроишь систему из своего профиля в
        Instagram, который станет приносить тебе клиентов постоянно [ на тарифе
        &nbsp;
        <Link
          to="price-card2"
          duration="1000"
          activeClass="active"
          smooth={true}
          style={{ color: "rgb(255, 193, 7)" }}
        >
          «Менторство»{" "}
        </Link>{" "}
        и
        <Link
          to="price-card3"
          duration="1000"
          activeClass="active"
          smooth={true}
          style={{ color: "rgb(255, 193, 7)" }}
        >
          {" "}
          «Индивидуальный»
        </Link>{" "}
        ]
      </span>
    ),
    image: instagram,
  },
  {
    text: `Научишься делать крутой монтаж, который пригодится для создания
    макетов и сторис`,
    image: editing,
  },
  {
    text: `Освоишь навык создания набирающей популярность анимации stop-motion`,
    image: stopmotion,
  },
  {
    text: `Узнаешь как делать кликабельные рекламные макеты, которые будут
    досматривать и привлекать новых подписчиков.`,
    image: newsubs,
  },
  {
    text: `Уже во время курса ты соберешь портфолио, что упростит поиск клиента
    и отразит твои умения`,
    image: portfolio,
  },
];
