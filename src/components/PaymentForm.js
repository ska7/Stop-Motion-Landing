import React, { useEffect, useState, useRef } from "react";
import creditCardIcon from "../img/icons/credit-card.png";
import walletIcon from "../img/icons/wallet.png";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";

export default function PaymentForm({ price }) {
  const center = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  const centerColumn = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
  };

  const tooltip = (
    <p style={{ width: "200px" }}>
      Бронь места на любой из тарифов — закрепляет за вами место и цену, по
      которой вы оплатили. Бронь тарифа является частичной оплатой места, то
      есть остальная оплата — стоимость по тарифу минус бронь. есть рассрочка на
      все тарифы, кроме первого — платежи в три этапа — сумма тарифа делится на
      три части и вы вносите оплату в соответствии с графиком платежей.
    </p>
  );

  const [state, setState] = useState("");
  const [active, setActive] = useState("cc");
  const [charge, setCharge] = useState("");

  return (
    <React.Fragment>
      <div className="payment-form">
        <form
          // className="payment-form"
          method="POST"
          action="https://yoomoney.ru/quickpay/confirm.xml"
        >
          <input type="hidden" name="receiver" value="410014822462996" /> //{" "}
          <input
            type="hidden"
            name="formcomment"
            value={`Курс 'Stop Motion and Креативы'`}
          />{" "}
          <input
            type="hidden"
            name="short-dest"
            value={`Курс 'Stop Motion and Креативы'`}
          />{" "}
          <input type="hidden" name="label" value="$order_id" />{" "}
          <input type="hidden" name="quickpay-form" value="shop" />{" "}
          <input
            type="hidden"
            name="targets"
            value="курс Stop-motion and Креативы "
          />{" "}
          <input type="hidden" name="sum" value={charge} data-type="number" />{" "}
          <input type="hidden" name="comment" value={state} />{" "}
          <input type="hidden" name="need-fio" value="false" />{" "}
          <input type="hidden" name="need-email" value="false" />{" "}
          <input type="hidden" name="need-phone" value="false" />{" "}
          <input type="hidden" name="need-address" value="false" />{" "}
          <div style={centerColumn}>
            <label style={{ textAlign: "center" }} for="comment-area">
              Введи сюда свой ник в Telegram или Instagram{" "}
            </label>
            <input
              autoComplete="off"
              required
              onChange={(e) => {
                setState(e.target.value);
              }}
              type="text"
              name="comment-area"
            ></input>
          </div>
          <input
            style={{ appearance: "none" }}
            type="radio"
            name="paymentType"
            value="AC"
            id="AC"
            checked="true"
          />
          <Tooltip
            content={tooltip}
            background={"rgba(0,0,0, 0.9)"}
            color={"rgb(255, 193, 7)"}
            radius={15}
            customCss={css`
              position: absolute;
              bottom: 70px;
              left: 20px;
              font-size: 9px;
              text-align: center;
              font-family: "Montserrat", sans-serif;
            `}
            placement="right"
          >
            <span className="question-mark">?</span>
          </Tooltip>
          <div className="payment-buttons" style={center}>
            <input
              className="payment-button"
              type="submit"
              value="Оплатить"
              onClick={() => setCharge(price)}
            />
          </div>
          <div className="payment-buttons" style={center}>
            <input
              onClick={() => setCharge(1000)}
              className="payment-button"
              type="submit"
              value="Забронировать"
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
