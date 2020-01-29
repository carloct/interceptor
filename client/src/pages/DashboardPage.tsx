import React from "react";
import EndpointList from "../components/Layout/EndpointList";
import BlockLeft from "../components/Layout/BlockLeft";
import PaneLeft from "../components/Layout/PaneLeft";

const DashboardPage = () => {
  return (
    <BlockLeft>
      <PaneLeft>
        <EndpointList />
      </PaneLeft>
    </BlockLeft>
  );
};

export default DashboardPage;
