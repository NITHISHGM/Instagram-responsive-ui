import React from "react";
import { Layout, Row, Col, Card, Image, Avatar } from "antd";
import "./style/Feed.css";
import {
  MoreOutlined,
  HeartOutlined,
  UserDeleteOutlined,
  SearchOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import StatusBar from "../StatusBar/StatusBar";
import { FeedData } from "../Data/FeedData";
import { ChatWindow } from "../ChatWindow/ChatWindow";
const { Content } = Layout;

const Feed = () => {
  // const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <Content>
        <Row gutter={16}>
          <Col xs={0} sm={0} md={0} lg={2}></Col>
          <Col xs={24} sm={24} md={16} lg={12} className="feed-card-col">
            <StatusBar />
            {FeedData.map((d, id) => {
              return (
                <Card className="feed-card" key={id}>
                  <Row>
                    <Col xs={5} sm={4} md={3} lg={2}>
                      <Avatar className="feed-avatar" size="large">
                        {d.avatar}
                      </Avatar>
                    </Col>
                    <Col
                      xs={17}
                      sm={20}
                      md={19}
                      lg={20}
                      className="user-profile"
                    >
                      <div className="card-text-head">{d.title}</div>

                      <span className="card-sub-text-head">{d.datePosted}</span>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      {" "}
                      <MoreOutlined />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Image width="100%" height="100%" src={d.image} />
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>{d.captionText}</Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={6} className="text-center">
                      <HeartOutlined className="feed-footer-icon" />
                    </Col>
                    <Col span={6} className="text-center">
                      <HomeOutlined className="feed-footer-icon" />
                    </Col>
                    <Col span={6} className="text-center">
                      <UserDeleteOutlined className="feed-footer-icon" />
                    </Col>
                    <Col span={6} className="text-center">
                      <SearchOutlined className="feed-footer-icon" />
                    </Col>
                  </Row>
                </Card>
              );
            })}
          </Col>

          <Col xs={0} sm={0} md={8} lg={8}>
            {" "}
            <ChatWindow />
          </Col>
          <Col xs={0} sm={0} md={0} lg={2}></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Feed;
