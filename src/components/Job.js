import React from "react";

const Job = ({ className, title, contractType, country, city }) => {
  return (
    <div className={className}>
      <span className="jobTitle">{title}</span>
      <span className="jobDetails">
        {contractType}-{country}-{city}
      </span>
    </div>
  );
};

export default Job;
