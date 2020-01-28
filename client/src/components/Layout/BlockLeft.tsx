import React from "react";

export default props => {
  return (
    <div className="row col-md-9 p-left-right-0 m-left-right-0">
      {props.children}
    </div>
  );
};
