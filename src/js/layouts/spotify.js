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
    return <Layout>
        <Layout.Header>
        <Image src="https://gcdnb.pbrd.co/images/LnqxLZERJBjE.png?o=1" />
      
        <div className="social-links">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify</a>
      </div>
        </Layout.Header>
        <Layout.Content>
        <Row className="custom-row" gutter={12}>
        <Col span={12}>
    <strong>Welcome, Guest</strong> <a href="#" className="sign-in-link"> [Sign in] </a>
</Col>
    <Col span={12} className="right-aligned-col">
                <strong>Get a free home page </strong> <RightCircleOutlined />
            </Col>
</Row>
            
            <Row gutter={12}>
                <Col span={8}>
                    <Card bordered={false}  id="my-card">
                        <Space>
                            <Image width={150} src="https://imgs.search.brave.com/F4CF7uKqZ1xuAqhnRUuU51RCpATCVeqHzNlVrQZnSLk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/d2luZWFzcy9pb3M3/LXJlZGVzaWduLzEy/OC9NYWlsLWljb24u/cG5n"/>
                            <Space direction="vertical">
                                <Typography.Text id= "text1"style={{ 
                                    fontSize: 25
                                
                                 }}>Book Me</Typography.Text>
                                 <Typography.Text id="text2">
            My time is worthless
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
                        </Space>                        
                    </Card>
                </Col>
                <Col span={8}>
                <div>
            <Card bordered={false} id="my-card">
                <Space direction="vertical">
                    <iframe
                        style={{ borderRadius: '12px', width: '100%', height: '100px' }}
                        src="https://open.spotify.com/embed/playlist/4OSK7cznywwn9v4B4chxth?utm_source=generator"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                      <Typography.Text style={{ fontSize: '20px', color: 'white', margin: 0, textAlign: 'center' }}>
                        Listen to my music{' '}
                        <span style={{ fontSize: '24px', color: 'yellow', margin: 0 }}>
                            <RightCircleOutlined />
                        </span>
                    </Typography.Text>
                    
                </Space>
            </Card>
        </div>
                </Col>
                <Col span={8}>
                    <Card bordered={false}  id="my-card">
                        <Space>
                            <Image width={150} src="https://imgs.search.brave.com/cUuo1hSCa9IgXXlNmW_hSdBWgKtYqbpgyBYaENFAlgc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjExMS8yMTEx/NDYzLnBuZw"/>
                            <Space direction="vertical">
                            <Typography.Text id="text1" style={{ fontSize: 20 }}>
                My new hobby
            </Typography.Text>
            <Typography.Text style={{ color: 'White', margin: 0 }}>
            Spending excessively on Film{' '}
                <span
                    style={{ fontSize: '24px', color: 'yellow', margin: 0, cursor: 'pointer' }}
                    onClick={handleInstagramClick}
                >
                    <RightCircleOutlined />
                </span>
            </Typography.Text>
                            </Space>
                        </Space>                        
                    </Card>
                </Col>
            </Row>

            <Row gutter={12} style={{ 
                marginTop: 15
             }}>
                {/* lett */}
                <Col span={16}>
                    <Row gutter={12}>
                        <Col span={24}>
                        <Card className="left-card" title={<Link to="/experience">Experiences</Link>} bordered={false}>
    
                       

                                <Row gutter={12}>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                        <Typography.Link id="title1">Digital Marketing Manager</Typography.Link>
                                            <Typography.Text>Oversee online marketing strategies for businesses</Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1">Social Media Manager:</Typography.Link>
                                            <Typography.Text>Focus specifically on creating content for social media platforms. </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1">Content Specialist:</Typography.Link>
                                            <Typography.Text>Creating high-quality content, such as blog posts and infographics.</Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1" >SEO Specialist:</Typography.Link>
                                            <Typography.Text>Improve a website's visibility in search engine results. </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1" >EmailManager</Typography.Link>
                                            <Typography.Text>design and execute email marketing campaigns.</Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1" >Marketing Manager</Typography.Link>
                                            <Typography.Text>specialize in promoting products or services sold through online platforms. </Typography.Text>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24}>
                        <Card className="left-card" title={<Link to="/Blog">Blog</Link>} bordered={false}>
                        <Row gutter={12}>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                        <Typography.Link id="title1">Digital Marketing Manager</Typography.Link>
                                            <Typography.Text>Oversee online marketing strategies for businesses</Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1">Social Media Manager:</Typography.Link>
                                            <Typography.Text>Focus specifically on creating content for social media platforms. </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1">Content Specialist:</Typography.Link>
                                            <Typography.Text>Creating high-quality content, such as blog posts and infographics.</Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1" >SEO Specialist:</Typography.Link>
                                            <Typography.Text>Improve a website's visibility in search engine results. </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1" >EmailManager</Typography.Link>
                                            <Typography.Text>design and execute email marketing campaigns.</Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <Typography.Link id="title1" >Marketing Manager</Typography.Link>
                                            <Typography.Text>specialize in promoting products or services sold through online platforms. </Typography.Text>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>      

                {/* right */}
                <Col span={8}>
                <Row gutter={12}>
                        <Col span={24}>
                        <Card className="right-card" title="News and Notable" bordered={false}>
                                <Typography.Text ></Typography.Text>

                                <Row gutter={12}>
                                    <Col span={24}>
                                        <Space direction="vertical">
                                            <Typography.Link className="link">Microsoft FrontPage 2000</Typography.Link>
                                            <Typography.Text>Microsoft FrontPage (full name Microsoft Office FrontPage) is a discontinued WYSIWYG HTML editor and website administration tool from Microsoft for the Microsoft Windows line of operating systems. It was branded as part of the Microsoft Office suite from 1997 to 2003</Typography.Text>
                                        </Space>
                                    </Col>
                                  
                                    {/* <Col span={24}>
                                        <Space direction="vertical">
                                            <Typography.Link className="link">Type Yahoo Wizard</Typography.Link>
                                            <Typography.Text>Microsoft FrontPage (full name Microsoft Office FrontPage) is a discontinued WYSIWYG HTML editor and website administration tool from Microsoft for the Microsoft Windows line of operating systems. It was branded as part of the Microsoft Office suite from 1997 to 2003</Typography.Text>
                                        </Space>
                                    </Col> */}
                                </Row>
                                
                                
                            </Card>
                            <Card className="right-card" title="News and Notable" bordered={false}>
                                <Typography.Text ></Typography.Text>

                                <Row gutter={12}>
                                  
                                    <Col span={24}>
                                        <Space direction="vertical">
                                            <Typography.Link className="link">Type Yahoo Wizard</Typography.Link>
                                            <Typography.Text>Microsoft FrontPage (full name Microsoft Office FrontPage) is a discontinued WYSIWYG HTML editor and website administration tool from Microsoft for the Microsoft Windows line of operating systems. It was branded as part of the Microsoft Office suite from 1997 to 2003</Typography.Text>
                                        </Space>
                                    </Col>
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