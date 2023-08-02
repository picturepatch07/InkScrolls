import React from "react";
import LandHeader from "../LandPage/LandHeader";
import ListMain from "./ListMain";

const index = ({ userDetails }) => {
  return (
    <div>
      <LandHeader />
      <ListMain userDetails={userDetails} />
    </div>
  );
};

export default index;
