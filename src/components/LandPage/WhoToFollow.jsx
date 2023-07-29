import React from "react";
import { Avatar } from "antd";
import { truncate } from "../../helper/truncate";

const WhoToFollow = ({ data }) => {
  return (
    <div className="follow-content">
      <Avatar size={40} src={data?.photoURl} />
      <div className="info">
        <h3>{truncate(String(data?.displayName), 15)}</h3>
        <span>@{String(data?.email).split("@")[0]}</span>
      </div>
      <button style={{ marginLeft: "auto" }}>Follow</button>
    </div>
  );
};

export default WhoToFollow;
