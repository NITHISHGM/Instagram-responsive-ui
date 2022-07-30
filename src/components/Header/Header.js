import React from "react";
import { Layout, Row, Col, Space } from "antd";
import "./Header.css";
import EmailIcon from "./static/email.png";
import slackIcon from "./static/slack.png";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import {
  HomeOutlined,
  UserAddOutlined,
  CompassOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <>
      <Layout>
        <Header className="header">
          <Row>
            <Col xs={6} sm={4} md={4} lg={2}>
              <img src={slackIcon} className="logo" alt="img" />
            </Col>
            <Col xs={0} sm={10} md={10} lg={10}>
              <div className="headerName">Impressions </div>
            </Col>

            <Col xs={16} sm={10} md={10} lg={12}>
              <Space className="nav-icons" size="large">
                <HomeOutlined style={{ fontSize: "20px" }} />
                <CompassOutlined style={{ fontSize: "20px" }} />
                <HeartOutlined style={{ fontSize: "20px" }} />
                <UserAddOutlined style={{ fontSize: "20px" }} />
              </Space>
            </Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
};

export default AppHeader;
