import React from "react";
import { useHistory } from "react-router-dom";

const Job = ({ data }) => {
  const { title, company, location, created_at, id } = data;

  let history = useHistory();

  const handleNavigate = () => {
    history.push({
      pathname: `job/${id}`,
      state: { data },
    });
  };

  return (
    <div className="job" onClick={() => handleNavigate()}>
      <div className="title">
        {title}
        <p>{company}</p>
      </div>
      <div className="title">
        {location}
        <p>{created_at.split(" ").slice(0, 3).join(" ")}</p>
      </div>
    </div>
  );
};

export default Job;
