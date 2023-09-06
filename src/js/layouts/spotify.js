import { Card, Col, Image, Layout, Row, Space, Typography, } from "antd";
import React from "react";
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";




const handleClick = () => {
    window.location.href = 'https://book.vimcal.com/p/nirvan/30min';

    
};

const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/scene/';
};

export default function Contents () {
    const isMobile = window.innerWidth <= 768; // Define the breakpoint for mobile

    if (isMobile) {
      return null; // Return null to hide the header on mobile
    }
    return <Layout>
         <Layout.Header>
  

      <Layout.Header>
      <Image src="https://gcdnb.pbrd.co/images/LnqxLZERJBjE.png?o=1" alt="Logo" width={600} className="logo" />

      <div className="social-links">
        <a href="https://www.instagram.com/nirvan/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com/nirvanpanj" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/in/nirvanp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://open.spotify.com/user/legon12345" target="_blank" rel="noopener noreferrer">Spotify</a>
      </div>

      <style jsx>{`
        .social-links {
          margin-top: 10px;
          text-align: center;
        }

        .social-links a {
          display: inline-block;
          margin: 0 10px;
        }

        @media (max-width: 768px) {
          /* Hide the logo and social links on smaller screens (e.g., mobile) */
          .logo,
          .social-links {
            display: none;
          }
        }
      `}</style>
    </Layout.Header>
     
    </Layout.Header>
        <Layout.Content>
        <Row className="custom-row" gutter={[12, 12]}>
  <Col xs={24}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <strong>Welcome, Guest</strong> <a href="#" className="sign-in-link">[Sign in]</a>
      </div>
      <div>
        <strong>Get a free home page</strong> <RightCircleOutlined />
      </div>
    </div>
  </Col>
</Row>
            
    <Row gutter={12}>
    <Col xs={24} sm={24} md={12} lg={8}>
        <Card bordered={false} id="my-card" className={isMobile ? 'mobile-card' : ''}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Space align="start">
                <Image
                  width={isMobile ? 120 : 80} // Adjust the image width for mobile
                  src="https://imgs.search.brave.com/F4CF7uKqZ1xuAqhnRUuU51RCpATCVeqHzNlVrQZnSLk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/d2luZWFzcy9pb3M3/LXJlZGVzaWduLzEy/OC9NYWlsLWljb24u/cG5n"
                />
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={16}>
              {!isMobile && ( // Conditionally render the text on non-mobile screens
                <Space direction="vertical">
                  <Typography.Text id="text1" style={{ fontSize: 25 }}>
                    Book Me
                  </Typography.Text>
                  <Typography.Text id="text2">
                    My time is worthless{' '}
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
              )}
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card bordered={false} id="my-card">
          <Space direction="vertical">
            <iframe
              style={{ borderRadius: '12px', width: '100%', height: '80px' }}
              src="https://open.spotify.com/embed/playlist/4OSK7cznywwn9v4B4chxth?utm_source=generator"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            {/* <Typography.Text style={{ fontSize: '20px', color: 'white', margin: 0, textAlign: 'center' }}>
              Listen to my music{' '}
              <span style={{ fontSize: '24px', color: 'yellow', margin: 0 }}>
                <RightCircleOutlined />
              </span>
            </Typography.Text> */}
          </Space>
        </Card>
      </Col>
      <Col xs={24} sm={8}>
      <Card bordered={false} id="my-card">
      <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} lg={8}>
        <Space align="start">
          <Image
            width={80}
            src="https://imgs.search.brave.com/NfW7R_MMPq8al7pxv-UuU3fJrD7lydR6AFq2mkRFFcU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9uZXctSW5z/dGFncmFtLWxvZ28t/cG5nLWZ1bGwtY29s/b3VyLWdseXBoLnBu/Zw"
          />
        </Space>
      </Col>
      <Col xs={24} sm={24} md={12} lg={16}>
        <Space direction="vertical">
          <Typography.Text id="text1" style={{ fontSize: 25 }}>My new hobby</Typography.Text>
          {!isMobile && ( // Conditionally render the text on non-mobile screens
            <Typography.Text id="text2">
              My time is worthless{' '}
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
          )}
        </Space>
      </Col>
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
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Digital Marketing Manager</Typography.Link>
                <Typography.Text>Oversee online marketing strategies for businesses</Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Social Media Manager:</Typography.Link>
                <Typography.Text>Focus specifically on creating content for social media platforms. </Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Content Specialist:</Typography.Link>
                <Typography.Text>Creating high-quality content, such as blog posts and infographics.</Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">SEO Specialist:</Typography.Link>
                <Typography.Text>Improve a website's visibility in search engine results. </Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Email Manager</Typography.Link>
                <Typography.Text>Design and execute email marketing campaigns.</Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Marketing Manager</Typography.Link>
                <Typography.Text>Specialize in promoting products or services sold through online platforms. </Typography.Text>
            </Space>
        </Col>
    </Row>
</Card>
          </Col>
          <Col span={24}>
          <Card className="left-card" title={<Link to="/Blog">Blog</Link>} bordered={false}>
    {/* Content for Blog */}
    <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Digital Marketing Manager</Typography.Link>
                <Typography.Text>Oversee online marketing strategies for businesses</Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Social Media Manager:</Typography.Link>
                <Typography.Text>Focus specifically on creating content for social media platforms. </Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Content Specialist:</Typography.Link>
                <Typography.Text>Creating high-quality content, such as blog posts and infographics.</Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">SEO Specialist:</Typography.Link>
                <Typography.Text>Improve a website's visibility in search engine results. </Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Email Manager</Typography.Link>
                <Typography.Text>Design and execute email marketing campaigns.</Typography.Text>
            </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Space direction="vertical">
                <Typography.Link id="title1">Marketing Manager</Typography.Link>
                <Typography.Text>Specialize in promoting products or services sold through online platforms. </Typography.Text>
            </Space>
        </Col>
    </Row>
</Card>
          </Col>
        </Row>
      </Col>

      {/* Right Column */}
      <Col xs={24} sm={8}>
        <Row gutter={12}>
          <Col span={24}>
          <Card className="right-card" title="News and Notable" bordered={false}>
    {/* Content for News and Notable */}
    <Row gutter={[16, 16]}>
        <Col xs={24} md={24}>
            <Space direction="vertical">
                <Typography.Link className="link">Microsoft FrontPage 2000</Typography.Link>
                <Typography.Text>Microsoft FrontPage (full name Microsoft Office FrontPage) is a discontinued WYSIWYG HTML editor and website administration tool from Microsoft for the Microsoft Windows line of operating systems. It was branded as part of the Microsoft Office suite from 1997 to 2003.</Typography.Text>
            </Space>
        </Col>
        {/* You can add more items like the one above if needed */}
    </Row>
</Card>
          </Col>
          <Col span={24}>
          <Card className="right-card" title="News and Notable" bordered={false}>
    {/* Content for News and Notable */}
    <Row gutter={[16, 16]}>
        <Col xs={24} md={24}>
            <Space direction="vertical">
                <Typography.Link className="link">Microsoft FrontPage 2000</Typography.Link>
                <Typography.Text>Microsoft FrontPage (full name Microsoft Office FrontPage) is a discontinued WYSIWYG HTML editor and website administration tool from Microsoft for the Microsoft Windows line of operating systems. It was branded as part of the Microsoft Office suite from 1997 to 2003.</Typography.Text>
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