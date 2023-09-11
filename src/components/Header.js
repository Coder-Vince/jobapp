import React from "react";
import Title from "./Title";

const Header = (props) => {
  return (
    <div>
      <Title name={props.name} />
    </div>
  );
};

export default Header;
