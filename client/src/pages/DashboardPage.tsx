import React from "react";
import MainContent from "../components/Layout/MainContent";
import EndpointList from "../components/Layout/EndpointList";

const DashboardPage = () => {
  return (
    <MainContent>
      <>
        <EndpointList />
      </>
    </MainContent>
  );
};

export default DashboardPage;
