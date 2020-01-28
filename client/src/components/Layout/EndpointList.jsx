import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

export default props => {
  const auth0Client = useAuth0();

  const onClickHandler = async () => {
    const token = await auth0Client.getTokenSilently();

    console.log(token);
  };

  return (
    <div className="inbox-main-sidebar sidebar">
      <button
        onClick={onClickHandler}
        className="btn btn-rounded btn-primary btn-block mb-4"
      >
        Compose
      </button>
      <div className="pt-3 pr-3 pb-3">Sidebar</div>
    </div>
  );
};
