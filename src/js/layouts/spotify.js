import { Card, Col, Image, Layout, Row, Space, Typography,  } from "antd";
import { LinkedinOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

import { Helmet } from 'react-helmet';
import React from "react";
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import blogData from './Blog'; // Import the data from Blog.js



function MyComponent() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {/* Rest of the component */}
    </>
  );
}
const handleClick = () => {
    window.location.href = 'https://book.vimcal.com/p/nirvan/30min';

    
};

const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/scene/';
};

export default function Contents () {
    const isMobile = window.innerWidth <= 480; // Define the breakpoint for mobile
 
    if (isMobile) {
      return null; // Return null to hide the header on mobile
    }
    return <Layout>
       <Layout.Header>
       <img
  src="https://gcdnb.pbrd.co/images/LnqxLZERJBjE.png?o=1"
  width={500}
  className="logo"
  style={{ float: "left", marginRight: "20px", marginTop:"30px" }} // Use float and marginRight
/>
  <div className="social-links">
    <a href="https://www.instagram.com/nirvan/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
      Instagram
    </a>
    <a href="https://twitter.com/nirvanpanj" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
      Twitter
    </a>
    <a href="https://linkedin.com/in/nirvanp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
      LinkedIn
    </a>
    <a href="https://open.spotify.com/user/legon12345" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
      Spotify
    </a>
  </div>

  <style jsx>{`
    .social-links {
      margin-top: 5px;
      text-align: center;
    }

    .social-links a {
      display: inline-block;
      margin: 0 10px;
    }

    @media (max-width: 768px) {
      .logo,
      .social-links {
        display: none;
      }
    }
  `}</style>
</Layout.Header>


        <Layout.Content>
        <Row className="custom-row" gutter={[12, 12]}>
  <Col xs={24}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <strong>Welcome, Guest</strong> 
      </div>
      <div>
        <strong>Drop a visor note</strong> <RightCircleOutlined />
      </div>
    </div>
  </Col>
</Row>
            
<Row gutter={12}>
    <Col xs={24} sm={24} md={12} lg={8}>
    <Card bordered={false} id="my-card" className={isMobile ? 'mobile-card' : ''}>
  <Row 
    gutter={[16, 16]} 
    style={{ borderRadius: '1px' }} 
    justify={isMobile ? 'center' : 'start'}
  >
    <Col 
      xs={24} sm={24} md={12} lg={8} 
      style={{ display: isMobile ? 'flex' : 'block', justifyContent: 'center' }}
    >
      <Space align={isMobile ? 'center' : 'start'} style={{ textAlign: isMobile ? 'center' : 'left' }}>
      <img
  className={isMobile ? 'mobile-image' : 'web-image'}  // Change class based on isMobile
  src="https://imgs.search.brave.com/TEX0ewvC9Lw69pioiebxjSnxPDOoPDgQMvHDEChSGQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvODU4Ny84NTg3/MTcxLnBuZw"
  alt="User"
/>

      </Space>
    </Col>
    {!isMobile && (
      <Col xs={24} sm={24} md={12} lg={16}>
        <Space direction="vertical">
          <Typography.Text id="text1" style={{ fontSize: 25 }}>
            Book Me
          </Typography.Text>
          <Typography.Text id="text2">
            My time is worthless.
            <span
              style={{
                fontSize: '24px',
                color: 'yellow',
                marginLeft: '10px',
                cursor: 'pointer',
              }}
              onClick={handleClick}
            >
              <RightCircleOutlined />
            </span>
          </Typography.Text>
        </Space>
      </Col>
    )}
  </Row>
</Card>

    </Col>
    <Col xs={24} sm={8}>
      <Card bordered={false} id="my-card" style={{ height: '140px', paddingTop: 0, paddingBottom: 20 }}>
        <Space direction="vertical" style={{ marginTop: '1px' }}>
          <iframe
            style={{ borderRadius: '2px', width: '100%', height: '80px' }}
            src="https://open.spotify.com/embed/playlist/4OSK7cznywwn9v4B4chxth?utm_source=generator&controls=1"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Space>
      </Card>
    </Col>
    <Col xs={24} sm={8}>
    <Card bordered={false} id="my-card" className={isMobile ? 'mobile-card' : ''}>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} lg={8}>
        <Space align={isMobile ? 'center' : 'start'} style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <img
            src="https://imgs.search.brave.com/7z2hpTJVagQMcY3Fs0z1z7rxhIzXccl7DHOCzQ_fyIM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNDYxLzQ2MTgy/My5wbmc"
            alt="User"
            style={{ maxWidth: '100%', height: '150' }}
          />
        </Space>
      </Col>
      {!isMobile && (
        <Col xs={24} sm={24} md={12} lg={16}>
          <Space direction="vertical">
            <Typography.Text id="text1" style={{ fontSize: 25 }}>
              Photography
            </Typography.Text>
            <Typography.Text id="text2">
              New Hobby{' '}
              <span
                style={{
                  fontSize: '24px',
                  color: 'yellow',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
                onClick={handleInstagramClick}
              >
                <RightCircleOutlined />
              </span>
            </Typography.Text>
          </Space>
        </Col>
      )}
    </Row>
  </Card>
    </Col>
  </Row>
    <Row gutter={12} style={{ marginTop: 15 }}>
      {/* Left Column */}
      <Col xs={24} sm={16}>
        <Row gutter={12}>
          <Col span={24}>
          <Card className="left-card" title={<Link to="/experience">Experiences</Link>} bordered={false}>
    {/* Content for Experiences */}
    <Row gutter={[16, 16]}>
      <Col xs={12} sm={12} md={8}>
        <Space direction="vertical">
          <Typography.Link id="title1">Big Time Studios</Typography.Link>
          <Typography.Text>Business Development</Typography.Text>
        </Space>
      </Col>
      <Col xs={12} sm={12} md={8}>
        <Space direction="vertical">
          <Typography.Link id="title1">Studious</Typography.Link>
          <Typography.Text>Director of Marketing</Typography.Text>
        </Space>
      </Col>
      <Col xs={12} sm={12} md={8}>
        <Space direction="vertical">
          <Typography.Link id="title1">Resell Calendar</Typography.Link>
          <Typography.Text>Managing Partner</Typography.Text>
        </Space>
      </Col>
      <Col xs={12} sm={12} md={8}>
        <Space direction="vertical">
          <Typography.Link id="title1">Nirvan’s Brickseek</Typography.Link>
          <Typography.Text>Founder</Typography.Text>
        </Space>
      </Col>
      <Col xs={12} sm={12} md={8}>
        <Space direction="vertical">
          <Typography.Link id="title1">Tavern</Typography.Link>
          <Typography.Text>Founder</Typography.Text>
        </Space>
      </Col>
      <Col xs={12} sm={12} md={8}>
        <Space direction="vertical">
          <Typography.Link id="title1">Librehacks</Typography.Link>
          <Typography.Text>Board Member</Typography.Text>
        </Space>
      </Col>
    </Row>
</Card>


          </Col>
          <Col span={24}>
          <Card className="left-card" title={<Link to="/Blog1">Blog</Link>} bordered={false}>
      <Row gutter={[16, 16]}>
        {blogData.slice(0, 6).map((item, index) => (
          <Col xs={12} sm={12} md={8} key={index}>
            <Space direction="vertical">
              <Typography.Link id={`title${index}`} style={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography.Link>
              <Typography.Text>{item.description}</Typography.Text>
            </Space>
          </Col>
        ))}
      </Row>
    </Card>
          </Col>
        </Row>
      </Col>

      {/* Right Column */}
      <Col xs={24} sm={8}>
        <Row gutter={12}>
          <Col span={24}>
          <Card className="right-card" title=" About Me" bordered={false}>
    {/* Content for News and Notable */}
    <Row gutter={[16, 16]}>
        <Col xs={24} md={24}>
            <Space direction="vertical">
                {/* <Typography.Link className="link">Microsoft FrontPage 2000</Typography.Link> */}
                <Typography.Text>I'm a serial entrepreneur and business strategist with a proven track record in various sectors, from gaming to STEM education.</Typography.Text>
                <Typography.Text> My expertise lies in business development, product management, and growth hacking, with a focus on leveraging data analytics and community engagement. </Typography.Text>
                <Typography.Text> I’m currently a double major in Applied Math + Stats and Finance @ Emory University, in Atlanta, Georgia. Looking for opportunities to bring my unique blend of skills and experience to forward-thinking companies or projects. Feel free to connect.</Typography.Text>
            </Space>
        </Col>
        {/* You can add more items like the one above if needed */}
    </Row>
</Card>
          </Col>
          <Col span={24}>
          <Card className="right-card" title="Contact Me" bordered={false}>
    {/* Content for News and Notable */}
    <Row gutter={[16, 16]}>
        <Col xs={24} md={24}>
        <Space direction="vertical">
              <Typography.Link>
                <a href="https://www.linkedin.com/in/nirvanp/">
                  <LinkedinOutlined /> LinkedIn Profile
                </a>
              </Typography.Link>
              <Typography.Text>
                <PhoneOutlined /> 908-858-0369
              </Typography.Text>
              <Typography.Text>
                <MailOutlined /> nirvan.panjwani@gmail.com
              </Typography.Text>
            </Space>
        </Col>
        {/* You can add more items like the one above if needed */}
    </Row>
</Card>
          </Col>
        </Row>
      </Col>
    </Row>

        </Layout.Content>
        <Layout.Footer></Layout.Footer>

    </Layout>
}