import * as React from "react";
import ExpertCard from "./ExpertCard";

interface IExpertsProps {
  experts: Expert[];
}

interface Expert {
  picture: string;
  name: string;
  rank: string;
  bio: [];
}

const Experts: React.FC<IExpertsProps> = ({ experts }) => {
  return (
    <div className="experts-section">
      <h1 id="experts">ЗНАКОМЬСЯ, ЭКСПЕРТКИ КУРСА</h1>
      {experts.map((expert) => {
        return (
          <ExpertCard
            picture={expert.picture}
            name={expert.name}
            rank={expert.name}
            bio={expert.bio}
          />
        );
      })}
    </div>
  );
};

export default Experts;
