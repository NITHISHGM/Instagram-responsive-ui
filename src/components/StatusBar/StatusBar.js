import React from "react";
import "./StatusBar.css";
import { Card, Space, Avatar } from "antd";
import { StatusData } from "./Data/StatusData";

const StatusBar = () => {
  return (
    <Card className="feed-card  status-card">
      <Space
        direction="horizontal"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        {StatusData.map((d) => {
          return (
            <>
              {" "}
              <div>
                {" "}
                <Avatar className="status-avatar" src={d.img} size={50} />
              </div>
            </>
          );
        })}
      </Space>
      <Space
        direction="horizontal"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        {StatusData.map((d) => {
          return (
            <>
              {" "}
              <div className="text-center status-text"> {d.name}</div>
            </>
          );
        })}
      </Space>
    </Card>
  );
};

export default StatusBar;
