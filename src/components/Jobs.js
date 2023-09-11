import React from "react";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="container">
      <Job
        className="red-box"
        title="IT Specialist"
        contractType="CDI"
        country="Italy"
        city="Roma"
      />
      <Job
        className="green-box"
        title="React developer"
        contractType="CDI"
        country="Malta"
        city="Sliema"
      />
      <Job
        className="yellow-box"
        title="Chef"
        contractType="CDD"
        country="FRANCE"
        city="Lyon"
      />
      <Job
        className="blue-box"
        title="Director"
        contractType="CDI"
        country="Germany"
        city="Berlin"
      />
      <Job
        className="pink-box"
        title="HR"
        contractType="CDI"
        country="FRANCE"
        city="Paris"
      />
      <Job
        className="red-box"
        title="Financial Analyst"
        contractType="CDI"
        country="Italy"
        city="Milan"
      />
      <Job
        className="green-box"
        title="UI/UX Specialist"
        contractType="CDI"
        country="Spain"
        city="Madrid"
      />
      <Job
        className="yellow-box"
        title="Team Leader"
        contractType="CDI"
        country="Italy"
        city="Teramo"
      />
      <Job
        className="blue-box"
        title="Assistant"
        contractType="CDI"
        country="FRANCE"
        city="Metz"
      />
    </div>
  );
};

export default Jobs;
