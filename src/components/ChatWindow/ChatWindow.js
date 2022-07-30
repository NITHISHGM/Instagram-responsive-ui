import React from "react";
import "./ChatWindow.css";
import { ChatWindowData } from "./Data/ChatWindowData";
import { Card, Col, Row, Space, Avatar, Divider } from "antd";

export const ChatWindow = () => {
  return (
    <div>
      <Card className="feed-card">
        <div className="chat-head">Suggestions For You</div>
        <Divider />
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          {ChatWindowData.map((d) => {
            return (
              <Row>
                <Col xs={0} sm={0} md={8} lg={4}>
                  {" "}
                  <Avatar
                    className="status-avatar"
                    src={d.img}
                    size="default"
                  />
                </Col>
                <Col xs={0} sm={0} md={16} lg={14}>
                  <div>{d.name}</div>
                  <div>{d.label}</div>
                </Col>
                <Col xs={0} sm={0} md={24} lg={6}>
                  <a>+ Follow</a>
                </Col>
              </Row>
            );
          })}
        </Space>
      </Card>
    </div>
  );
};
