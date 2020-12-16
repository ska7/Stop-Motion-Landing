import * as React from "react";

interface IExpertCardProps {
  picture: string;
  rank: string;
  name: string;
  bio: [];
}

const ExpertCard: React.FC<IExpertCardProps> = ({
  picture,
  rank,
  name,
  bio,
}) => {
  return (
    <div className="expert-card" data-aos="flip-up">
      <img src={picture}></img>
      <div className="expert-card-info">
        <h2>{name}</h2>
        <h3>{rank}</h3>
        {bio.map((item, i) => {
          return <p key={i}>◌&nbsp;&nbsp;{`${item}`}</p>;
        })}
      </div>
    </div>
  );
};

export default ExpertCard;
