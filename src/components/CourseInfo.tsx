import React, { useEffect } from "react";
import studentsIcon from "../img/icons/education.png";
import Aos from "aos";
import "aos/dist/aos.css";

interface Benefits {
  image: string;
  text: string;
}

interface ICourseInfoProps {
  types: string[];
  benefits: Benefits[];
}

const CourseInfo: React.FC<ICourseInfoProps> = ({ types, benefits }) => {
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
            {types.map((type) => {
              return (
                <>
                  <b className="dots-and-cross">{"⁜"}</b>
                  <span className="type">{type}</span>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="benefits-list">
        <h1>После курса ты:</h1>
        {benefits.map((benefit, idx) => {
          return (
            <>
              <span
                data-aos={idx % 2 === 0 ? "slide-left" : "slide-right"}
                className="benefit"
              >
                <img src={benefit.image}></img>
                <b> {benefit.text} </b>
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CourseInfo;
