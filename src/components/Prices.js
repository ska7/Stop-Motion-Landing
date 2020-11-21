import React from "react";

export default function Prices() {
  return (
    <div className="prices-section">
      <h1>Тарифы</h1>

      <div className="price-card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="prices-block">
            <h3 style={{ textDecoration: "line-through" }}>1990</h3>
            <h2 style={{ textDecoration: "line-through" }}>1690</h2>
            <h1>1290</h1>
          </div>
          <ul>
            <li>10 мест</li>
            <li>Доступ к информации по макетам и анимации</li>
            <li>общий чат </li>
            <li>обратная связь и проверка дз куратором</li>
            <li>чек-лист (1) </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
