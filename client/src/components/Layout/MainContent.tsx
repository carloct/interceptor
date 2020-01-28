import React from "react";

const MainContent = (props: any) => {
  return (
    <div className="row container-fluid p-left-right-0 m-left-rigth-0">
      {props.children}
    </div>
  );
};

export default MainContent;
