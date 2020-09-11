import React from "react";
import IndexGradient from "./Gradient/indexGradient";

const GradientList = ({ list }) => {
  return (
    <ul className="row list-unstyled">
      {list.map((el) => (
        <IndexGradient
          key={el.name}
          name={el.name}
          colorStart={el.start}
          colorEnd={el.end}
        />
      ))}
    </ul>
  );
};
export default GradientList;
