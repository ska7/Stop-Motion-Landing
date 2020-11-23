import React from "react";
import Carousel from "react-elastic-carousel";
import one from "../img/reviews/reviewOne.jfif";
import two from "../img/reviews/reviewTwo.jfif";
import three from "../img/reviews/reviewThree.jfif";
import four from "../img/reviews/reviewFour.jfif";
import five from "../img/reviews/reviewFive.jfif";
import six from "../img/reviews/reviewSix.jfif";
import seven from "../img/reviews/reviewSeven.jfif";
import eight from "../img/reviews/reviewEight.jfif";
import nine from "../img/reviews/reviewTen.jfif";

export default function Reviews() {
  const reviewsArray = [one, two, three, four, five, six, seven, eight, nine];
  return (
    <div className="reviews-section">
      <h1 id="reviews">
        ОТЗЫВЫ ЛЮДЕЙ, КОТОРЫЕ ПРОШЛИ{" "}
        <span style={{ fontSize: "24px", color: "red" }}>КУРС</span> И УЖЕ
        НАЧАЛИ <span style={{ color: "red" }}> ЗАРАБАТЫВАТЬ</span> НА СВОИХ
        МАКЕТАХ
      </h1>
      <Carousel>
        {reviewsArray.map((review, i) => {
          return (
            <div key={i} className="review-picture">
              <img alt="review" src={review}></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
