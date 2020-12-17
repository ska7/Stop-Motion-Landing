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

import saharaPic from "../img/SashaCutAlt.PNG";
import arinaPic from "../img/ArinaCut.PNG";

import layout from "../img/icons/maket.png";
import animationIcon from "../img/icons/animation.png";
import clientIcon from "../img/icons/client.png";
import mentorshipIcon from "../img/icons/mentorship.png";

// packages

import { Link } from "react-scroll";

// Types

export const types = [
  `Cтудентам и работающим людям, не знакомым с миром фриланса. Тем,
    кто начинает с нуля`,
  `Фрилансерам. Тем, кто уже работает в сфере фриланса и зарабатывает
    в Инстаграм`,
  `Блогерам. Тем, кто уже не новичок в Инстаграм и блогерстве`,
  `Тем, кто хочет зарабатывать в Инстаграм`,
];

// Benefits

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

// Experts

export const expertsBio = [
  {
    picture: saharaPic,
    name: `Саша @sm.sahara`,
    rank: `Экспертка по кликабельным макетам и личному бренду в Instagram.`,
    bio: [
      `1,5 года в профессии, более 400 макетов.`,
      `Создала блогерское агенство в 19 лет.`,
      `Работала с крупными блогерами 300к+`,
      `Рекорд с её макета - цена подписчика 1 рубль`,
      `Выращивает блогеров на консультациях`,
      `Знает всё о личном бренде и помогает строить его другим`,
    ],
  },
  {
    picture: arinaPic,
    name: `Арина`,
    rank: `Cпециалистка в сфере коллажной анимации`,
    bio: [
      `Создает анимации для брендов`,
      `Знает как создать любую анимацию`,
      `Расскажет как заставить шевелиться любой элемент картинки`,
    ],
  },
];

// Program Info

export const programInfo = [
  {
    icon: layout,
    blockName: "БЛОК 1: РЕКЛАМНЫЕ МАКЕТЫ",
    lessons: [
      `Ошибки в макетах и текстовое наполнение`,
      `Шрифты, расположение текста, цвета`,
      `Oбзор приложений, поэтапный сбор кадров макета, как добавить любую музыку в макет`,
      `Монтаж, переходы, музыка`,
      `Приложения, чтобы сделать макеты интереснее`,
      `Фотомакеты`,
    ],
  },
  {
    icon: animationIcon,
    blockName: "БЛОК 2: АНИМАЦИЯ",
    lessons: [
      <p className="long-lesson">{`что портит результат в анимации`}</p>,
      ,
      <p className="long-lesson">{`длина кадра`}</p>,
      <p className="long-lesson">
        {`качество исходника\n`}
        <p className="long-lesson title-style">{`Вдохновение:`}</p>
      </p>,
      <p className="long-lesson">{`Pinterest`}</p>,
      <p className="long-lesson">{`хэштеги`}</p>,
      <p className="long-lesson">{`аккаунты в Instagram`}</p>,
      <p className="long-lesson">{`статичные изображения`}</p>,
      <p className="long-lesson title-style">{`Музыка:`}</p>,
      <p className="long-lesson">{`Youtube`}</p>,
      <p className="long-lesson">{`Soundcloud`}</p>,
      <p className="long-lesson">{`музыкальные сервисы (поиск по похожим)`}</p>,
    ],
  },
  {
    icon: clientIcon,
    blockName: "БЛОК 3: ПОИСК ЗАКАЗОВ И РАБОТА С КЛИЕНТОМ",
    lessons: [
      `Где искать заказы`,
      `Как работать с заказчиком`,
      `Как оформить рабочий аккаунт`,
      `Что постить на рабочий аккаунт`,
    ],
  },
  {
    icon: mentorshipIcon,
    blockName: "МЕНТОРСТВО",
    lessons: [
      `Все учебные модули из программы`,
      `4 созвона`,
      `Подкасты об экспертном блоге в Instagram`,
      `Поддержка и обратная связь от Саши в течение месяца`,
    ],
  },
];

// Prices Info

// tarrif features
export const firstTarrif = [
  `доступ к информации по макетам и анимации`,
  `общий чат`,
  `обратная связь и проверка дз куратором`,
  `чек-лист: гайд «Нестандартные приложения» `,
  `10 мест`,
];

export const secondTarrif = [
  `доступ к информации по макетам и анимации`,
  `обратная связь`,
  `проверка домашнего задания от Арины и Саши`,
  `конспекты лекций`,
  `15 мест`,
];

export const thirdTarrif = [
  `доступ к информации по макетам и анимации`,
  `чат`,
  `конспекты лекций`,
  `подкасты об экспертном блоге в Instagram`,
  `поддержка и обратная связь от Саши в течение месяца`,
  <>
    две группы по пять человек: <strong>начинающие (с нуля) </strong> — 5 мест,{" "}
    <strong>продолжающие </strong> — 5 мест
  </>,
];
export const fourthTarrif = [
  `доступ к информации по макетам и анимации`,
  `чат`,
  `конспекты лекций`,
  `подкасты об экспертном блоге в Instagram`,
  `поддержка и обратная связь от Саши в течение месяца`,
  `1 место`,
];

export const calls = [
  `С чего начать вести экспертный блог? Упаковка, концепция, разбор ошибок`,
  `Как строить личный бренд? Смыслы, ценности`,
  `Что транслировать эксперту в сторис? Что в постах? Как писать тексты? Как снимать сторис?`,
  `Продвижение в Instagram, способы, фишки для снижения цены за подписчика`,
];
export const guides = [
  `Гайд «Нестандартные приложения»`,
  `Гайд «Что нельзя продвигать в таргете, чтобы не было блокировок»`,
  `Гайд «Поиск клиента и КП, на которое реагируют заказчики»`,
];

// price card objects

export const pricesInfo = [
  {
    firstPrice: "1290",
    secondPrice: "1690",
    thirdPrice: "1990",
    features: firstTarrif,
    id: 1,
  },
  {
    firstPrice: "3990",
    secondPrice: "4290",
    thirdPrice: "4590",
    features: secondTarrif,
    calls: calls,
    id: 2,
  },
  {
    cardName: "МЕНТОРСТВО",
    firstPrice: "9990",
    secondPrice: "10990",
    thirdPrice: "11990",
    features: thirdTarrif,
    calls: calls,
    guides: guides,
    id: 3,
  },
  {
    cardName: "ИНДИВИДУАЛЬНАЯ РАБОТА",
    firstPrice: "25000",
    features: fourthTarrif,
    calls: calls,
    guides: guides,
    id: 4,
  },
];
