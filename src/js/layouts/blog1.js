import React from 'react';
import { Card, Row, Col, Typography, Space, List, Avatar, Button, Tooltip } from 'antd';
import blogData from './Blog';
import styled from 'styled-components';
import { createFromIconfontCN, RightOutlined } from "@ant-design/icons"; // Import RightOutlined

import { Link } from 'react-router-dom';

const BlogPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const CustomCard = styled(Card)`
  width: 80%;
  max-width: 800px;
  margin-bottom: 400px;

  
`;

const CustomTitle = styled(Typography.Title)`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

const BlogList = styled(List)`
  padding-left: 0;
`;
<div className={window.innerWidth <= 768 ? "BlogPostContainer BlogPostContainer--mobile-fullscreen" : "BlogPostContainer"}></div>
const BlogPost = () => (
  <BlogPostContainer>
    <CustomCard>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <CustomTitle>Blog Posts</CustomTitle>
        </Col>
        <Col span={24}>
          <BlogList
            itemLayout="horizontal"
            dataSource={blogData}
            renderItem={item => (
                <List.Item
                actions={[
                  <Tooltip title="Read More">
                    <a href={item.externalUrl} target="_blank" rel="noopener noreferrer">
                      <Button type="primary" shape="circle" icon={<RightOutlined />} />
                    </a>
                  </Tooltip>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.authorAvatar} />}
                  title={<Typography.Link>{item.title}</Typography.Link>}
                  description={item.datePublished}
                />
              </List.Item>
              
            )}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'center', marginTop: '16px' }}>
          {/* Home Button */}
          <Link to="/"> {/* Assuming you have a route for your home page */}
            <Button type="default">Home</Button>
          </Link>
          {/* Experience Button */}
          <Link to="/experience"> {/* Assuming you have a route for your home page */}
            <Button type="default">Experience</Button>
          </Link>
        </Col>
      </Row>
    </CustomCard>
  </BlogPostContainer>
);

export default BlogPost;
