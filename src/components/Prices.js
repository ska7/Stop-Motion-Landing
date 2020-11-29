import React from "react";
import PriceCard from "./PriceCard";
import Timer from "./Timer";
import Carousel from "react-elastic-carousel";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
import {
  firstTarrif,
  fourthTarrif,
  secondPart,
  secondTarrif,
  thirdTarrif,
} from "./tarrif-features";
export default function Prices() {
  const tooltip = `Бронь места на любой из тарифов — закрепляет за вами место и цену, по которой вы оплатили. Бронь тарифа является частичной оплатой места, то есть остальная оплата — стоимость по тарифу минус бронь.
  есть рассрочка на все тарифы, кроме первого — платежи в три этапа — сумма тарифа делится на три части и вы вносите оплату в соответствии с графиком платежей.
  `;
  const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="prices-section">
      <h1 id="prices" style={{ marginTop: "35px" }}>
        Тарифы
      </h1>
      <Timer />
      <Carousel
        itemPadding={[100, 100, 100, 100]}
        // initialActiveIndex={activeIndex}
      >
        <div style={center}>
          <PriceCard
            firstPrice={"1290"}
            secondPrice={"1690"}
            thirdPrice={"1990"}
            features={firstTarrif}
            id={1}
          />
          <div className="yandex" style={center}>
            <Tooltip
              content={tooltip}
              background={"rgba(0,0,0, 0.9)"}
              color={"rgb(255, 193, 7)"}
              radius={15}
              customCss={css`
                // white-space: break-spaces;
                font-size: 10px;
                text-align: center;
                width: 400px;
                font-family: "Montserrat", sans-serif;
              `}
            >
              <h4>
                Бронь&nbsp;<span className="question-mark">?</span>
              </h4>
            </Tooltip>
            <iframe
              // className="yandex-buttons"
              src="https://yoomoney.ru/quickpay/button-widget?targets=предоплата&default-sum=1000&button-text=12&any-card-payment-type=on&button-size=m&button-color=black&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              title="yandex"
              frameBorder="1"
              allowtransparency="false"
              scrolling="no"
            ></iframe>
            <h4>Оплатить полностью</h4>
            <iframe
              src="https://yoomoney.ru/quickpay/button-widget?targets=первый тариф&default-sum=1290&button-text=12&any-card-payment-type=on&button-size=m&button-color=orange&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              title="yandex"
              frameBorder="1"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={"3990"}
            secondPrice={"4290"}
            thirdPrice={"4590"}
            features={secondTarrif}
            id={2}
          />
          <div className="yandex" style={center}>
            <Tooltip
              content={tooltip}
              background={"rgba(0,0,0, 0.9)"}
              radius={15}
              color={"rgb(255, 193, 7)"}
              customCss={css`
                // white-space: break-spaces;
                font-size: 10px;
                text-align: center;
                width: 400px;
                font-family: "Montserrat", sans-serif;
              `}
            >
              <h4>
                Бронь&nbsp;<span className="question-mark">?</span>
              </h4>
            </Tooltip>
            <iframe
              className="yandex-buttons"
              src="https://yoomoney.ru/quickpay/button-widget?targets=предоплата&default-sum=1000&button-text=12&any-card-payment-type=on&button-size=m&button-color=black&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              title="yandex"
              frameBorder="1"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
            <h4>Оплатить полностью</h4>
            <iframe
              src="https://yoomoney.ru/quickpay/button-widget?targets=первый тариф&default-sum=3990&button-text=12&any-card-payment-type=on&button-size=m&button-color=orange&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              title="yandex"
              frameBorder="1"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={"9990"}
            secondPrice={"10990"}
            thirdPrice={"11990 "}
            features={thirdTarrif}
            secondPart={secondPart}
            mentor={true}
            id={3}
          />
          <div className="yandex" style={center}>
            <Tooltip
              content={tooltip}
              background={"rgba(0,0,0, 0.9)"}
              radius={15}
              color={"rgb(255, 193, 7)"}
              customCss={css`
                // white-space: break-spaces;
                font-size: 10px;
                text-align: center;
                width: 400px;
                font-family: "Montserrat", sans-serif;
              `}
            >
              <h4>
                Бронь&nbsp;<span className="question-mark">?</span>
              </h4>
            </Tooltip>

            <iframe
              className="yandex-buttons"
              src="https://yoomoney.ru/quickpay/button-widget?targets=предоплата&default-sum=1000&button-text=12&any-card-payment-type=on&button-size=m&button-color=black&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              frameBorder="1"
              title="yandex"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
            <h4>Оплатить полностью</h4>
            <iframe
              src="https://yoomoney.ru/quickpay/button-widget?targets=первый тариф&default-sum=9990&button-text=12&any-card-payment-type=on&button-size=m&button-color=orange&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              frameBorder="1"
              title="yandex"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={"25000"}
            features={fourthTarrif}
            secondPart={secondPart}
            individual={true}
            id={4}
          />
          <div className="yandex-buttons" style={center}>
            <Tooltip
              content={tooltip}
              background={"rgba(0,0,0, 0.9)"}
              radius={15}
              color={"rgb(255, 193, 7)"}
              customCss={css`
                font-size: 10px;
                text-align: center;
                width: 400px;
                font-family: "Montserrat", sans-serif;
              `}
            >
              <h4>
                Бронь&nbsp;<span className="question-mark">?</span>
              </h4>
            </Tooltip>

            <iframe
              className="yandex-buttons"
              src="https://yoomoney.ru/quickpay/button-widget?targets=предоплата&default-sum=1000&button-text=12&any-card-payment-type=on&button-size=m&button-color=black&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              frameBorder="1"
              title="yandex"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
            <h4>Оплатить полностью</h4>
            <iframe
              src="https://yoomoney.ru/quickpay/button-widget?targets=четвертый тариф индивид&default-sum=12500&button-text=12&any-card-payment-type=on&button-size=m&button-color=orange&successURL=https://kurs-stop-motion.tutdomen.com/&quickpay=small&account=410014822462996&"
              width="184"
              height="36"
              frameBorder="1"
              title="yandex"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

/* {/* // import React from "react";
// import PriceCard from "./PriceCard";
// import Timer from "./Timer";
// import Carousel from "react-elastic-carousel";
// import Tooltip from "react-simple-tooltip";
// import { css } from "styled-components";
// import { */
//   firstTarrif,
//   fourthTarrif,
//   guides,
//   secondPart,
//   secondTarrif,
//   thirdTarrif,
// } from "./tarrif-features";
// import PaymentForm from "./PaymentForm";

// export default function Prices() {
//   const tooltip = `Бронь места на любой из тарифов — закрепляет за вами место и цену, по которой вы оплатили. Бронь тарифа является частичной оплатой места, то есть остальная оплата — стоимость по тарифу минус бронь.
//   есть рассрочка на все тарифы, кроме первого — платежи в три этапа — сумма тарифа делится на три части и вы вносите оплату в соответствии с графиком платежей.
//   `;
//   const center = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   return (
//     <div className="prices-section">
//       <h1 id="prices" style={{ marginTop: "35px" }}>
//         Тарифы
//       </h1>
//       <Timer />
//       <Carousel
//         itemPadding={[100, 100, 100, 100]}
//         // initialActiveIndex={activeIndex}
//       >
//         <div style={center}>
//           <PriceCard
//             firstPrice={1290}
//             secondPrice={1690}
//             thirdPrice={1990}
//             features={firstTarrif}
//             id={1}
//           />
//         </div>
//         <div style={center}>
//           <PriceCard
//             firstPrice={3990}
//             secondPrice={4290}
//             thirdPrice={4590}
//             guides={guides}
//             features={secondTarrif}
//             id={2}
//           />
//         </div>
//         <div style={center}>
//           <PriceCard
//             firstPrice={9990}
//             secondPrice={10990}
//             thirdPrice={11990}
//             features={thirdTarrif}
//             secondPart={secondPart}
//             guides={guides}
//             mentor={true}
//             id={3}
//           />
//         </div>
//         <div style={center}>
//           <PriceCard
//             firstPrice={"25000₽"}
//             features={fourthTarrif}
//             secondPart={secondPart}
//             individual={true}
//             guides={guides}
//             id={4}
//           />
//         </div>
//       </Carousel>
//     </div>
//   );
// } */}
