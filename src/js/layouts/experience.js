import { Card, Row, Col, Typography, Space, List, Avatar, Button, Tooltip, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
  const isMobile = window.matchMedia <= 768; // Define the breakpoint for mobile
 
  if (isMobile) {
    return null; // Return null to hide the header on mobile
  }
  return (
    <Layout>
     
      <Layout.Content>
     
      <Row style={{ marginTop: 0 }}>
          {/* Left Part */}
       <Col xs={0} sm={0} md={8}>
            {/* Add your left part content here */}
            <div
  style={{
    border: "1px solid #000", // Add border styling
    padding: "10px", // Add padding to create a box
    marginLeft: "100px",
    height: "145px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the content vertically
    backgroundColor: "#EEEEEE",
    
  }}
>
  <img
    src="https://21044391.fs1.hubspotusercontent-na1.net/hubfs/21044391/New_site/Big%20Time%20Logo.svg" // Replace with the path to your image
    alt="Your Logo"
    style={{
      maxWidth: "100%", // Make sure the image scales within the container
      maxHeight: "100%", // Prevent the image from overflowing the container
      width: "auto", // Maintain the aspect ratio
      height: "auto", // Maintain the aspect ratio
    }}
  />
</div>
<div
  style={{
    border: "1px solid #000", // Add border styling
    padding: "10px", // Add padding to create a box
    marginLeft: "100px",
    height: "145px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the content vertically
    backgroundColor: "#EEEEEE",
  }}
>
  <img
    src="https://images.squarespace-cdn.com/content/v1/63da6efe2fdb0e6e5759772a/317df4f6-7fed-42fa-b243-abe7e1e32350/studious-logo.png?format=1500w" // Replace with the path to your image
    alt="Your Logo"
    style={{
      maxWidth: "100%", // Make sure the image scales within the container
      maxHeight: "100%", // Prevent the image from overflowing the container
      width: "auto", // Maintain the aspect ratio
      height: "auto", // Maintain the aspect ratio
    }}
  />
</div>
<div
  style={{
    border: "1px solid #000", // Add border styling
    padding: "10px", // Add padding to create a box
    marginLeft: "100px",
    height: "145px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the content vertically
    backgroundColor: "#EEEEEE",
  }}
>
  <img
    src="https://resellcalendar.com/wp-content/themes/rc/assets/media/logo_light.svg" // Replace with the path to your image
    alt="Your Logo"
    style={{
      maxWidth: "100%", // Make sure the image scales within the container
      maxHeight: "100%", // Prevent the image from overflowing the container
      width: "auto", // Maintain the aspect ratio
      height: "auto", // Maintain the aspect ratio
    }}
  />
</div>
<div
  style={{
    border: "1px solid #000", // Add border styling
    padding: "10px", // Add padding to create a box
    marginLeft: "100px",
    height: "145px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the content vertically
    backgroundColor: "#EEEEEE",
  }}
>
  <img
    src="https://www.nirvanbrickseek.com/assets/fce655b223c27be8.png" // Replace with the path to your image
    alt="Your Logo"
    style={{
      maxWidth: "100%", // Make sure the image scales within the container
      maxHeight: "100%", // Prevent the image from overflowing the container
      width: "auto", // Maintain the aspect ratio
      height: "auto", // Maintain the aspect ratio
    }}
  />
</div>
<div
  style={{
    border: "1px solid #000", // Add border styling
    padding: "10px", // Add padding to create a box
    marginLeft: "100px",
    height: "145px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the content vertically
    backgroundColor: "#EEEEEE",
  }}
>
  <img
    src="https://tavern.ai/img/tavern_logo_transparent.svg" // Replace with the path to your image
    alt="Your Logo"
    style={{
      maxWidth: "100%", // Make sure the image scales within the container
      maxHeight: "100%", // Prevent the image from overflowing the container
      width: "auto", // Maintain the aspect ratio
      height: "auto", // Maintain the aspect ratio
    }}
  />
</div>
<div
  style={{
    border: "1px solid #000", // Add border styling
    padding: "10px", // Add padding to create a box
    marginLeft: "100px",
    height: "145px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the content vertically
    backgroundColor: "#EEEEEE",
  }}
>
  <img
    src="https://librehacks.com/wp-content/uploads/2020/03/cropped-librehack_logo_transparent-1.png" // Replace with the path to your image
    alt="Your Logo"
    style={{
      maxWidth: "100%", // Make sure the image scales within the container
      maxHeight: "100%", // Prevent the image from overflowing the container
      width: "auto", // Maintain the aspect ratio
      height: "auto", // Maintain the aspect ratio
    }}
  />
</div>

          </Col>
         

          {/* right */}
          <Col xs={24} sm={24} md={16}>
            <Row>
            <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
                    height:145,
                   
                    
                  }}
                >
                  <Typography.Text
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100%",
                      backgroundColor: "rgb(238, 238, 238)",
                      color: "Black",
                      padding: "1px",
                      marginLeft: "50px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      borderBottom: "2px solid #000",
                    }}
                  >
                    <span style={{ marginLeft: '2px' }}>1 - |</span>
                    <a
                      href="#"
                      style={{
                        marginLeft: '10px',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'inherit',
                      }}
                    >
                      Big Time Studios
                      
                    </a>
                  </Typography.Text>
                  <Row>
                  <Col
  xs={{ span: 24 }}
  sm={{ span: 24 }}
  md={{ span: 0 }}
  lg={{ span: 0 }}
  style={{
    marginTop: '12px',      // Add margin-top
    fontSize: '12px',       // Set font size
    fontWeight: 'bold'     // Set font weight
  }}
>
  Big Time Studios is working on an MMO RPG that takes players across space and time. They raised a $21M Series-A in 2021 and have sold over $100m+ in digital game assets to date.
</Col>

</Row>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                      {!isMobile && (
    <div
    className="mobile-hidden"
    style={{
      fontSize: "11px",
  
      color: "black",
      fontWeight: "600",
  
      fontFamily: "Arial, sans-serif",
    }}
  >
    Big Time Studios is working on an MMO RPG that takes players across space and time. They raised a $21M Series-A in 2021 and have sold over $100m+ in digital game assets to date.
  </div>
)}








                        {/* <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text> */}
                      </Space>
                    </Col>
                    <Col span={12}className="mobile-hidden">
                      <div className="card" style={{ display: "flex", justifyContent: "flex-end", }}>
                      <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom: -46, left: 25, width: "100%", border: "1px solid #000", paddingRight: "20px", tableLayout: "fixed" }}>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Start
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      October
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      End
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      Present
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Title
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
     Business Development
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Link
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      www.asdas
    </div>
  </div>
</div>

                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
                    height:145,
                  }}
                >
                  <Typography.Text
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100%",
                      backgroundColor: "rgb(238, 238, 238)",
                      color: "Black",
                      padding: "1px",
                      marginLeft: "50px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      borderBottom: "2px solid #000",
                    }}
                  >
                    <span style={{ marginLeft: '2px' }}>2 - |</span>
                    <a
                      href="#"
                      style={{
                        marginLeft: '10px',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'inherit',
                      }}
                    >
                      Studious
                    </a>
                  </Typography.Text>
                  <Col
  xs={{ span: 24 }}
  sm={{ span: 24 }}
  md={{ span: 0 }}
  lg={{ span: 0 }}
  style={{
    marginTop: '12px',      // Add margin-top
    fontSize: '12px',       // Set font size
    fontWeight: 'bold'     // Set font weight
  }}
>
Studious uses cognitive science and AI to make studying for standardized exams as easy as 20 minutes a day.
</Col>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                      <div
  className="mobile-hidden"
  style={{
    fontSize: "11px",

    color: "black",
    fontWeight: "600",

    fontFamily: "Arial, sans-serif",
    
  }}
>
  Studious uses cognitive science and AI to make studying for standardized exams as easy as 20 minutes a day.
</div>

                        {/* <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text> */}
                      </Space>
                    </Col>
                    <Col span={12}className="mobile-hidden">
                      <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom: -80, left: 25, width: "100%", border: "1px solid #000", paddingRight: "20px", tableLayout: "fixed" }}>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Start
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      January 2022
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      End
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      Present
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Title
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      Director of Marketing
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Link
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      www.asdas
    </div>
  </div>
</div>

                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
                    height:145,
                  }}
                >
                  <Typography.Text
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100%",
                      backgroundColor: "rgb(238, 238, 238)",
                      color: "Black",
                      padding: "1px",
                      marginLeft: "50px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      borderBottom: "2px solid #000",
                    }}
                  >
                    <span style={{ marginLeft: '2px' }}>3 - |</span>
                    <a
                      href="#"
                      style={{
                        marginLeft: '10px',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'inherit',
                      }}
                    >
                      Resell Calendar
                    </a>
                  </Typography.Text>
                  <Col
  xs={{ span: 24 }}
  sm={{ span: 24 }}
  md={{ span: 0 }}
  lg={{ span: 0 }}
  style={{
    marginTop: '12px',      // Add margin-top
    fontSize: '12px',       // Set font size
    fontWeight: 'bold'     // Set font weight
  }}
>
Resell Calendar is the #1 news source for resellers. Discover goods, keep on top of latest trends, and make them big bucks — buy low, sell high. Resell Calendar purchased Nirvan’s Brickseek in 2022 for a 6 figure sum.
</Col>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                      <div
  className="mobile-hidden"
    style={{
      fontSize: "11px",
  
      color: "black",
      fontWeight: "600",
  
      fontFamily: "Arial, sans-serif",
    }}
  >
                         Resell Calendar is the #1 news source for resellers. Discover goods, keep on top of latest trends, and make them big bucks — buy low, sell high. Resell Calendar purchased Nirvan’s Brickseek in 2022 for a 6 figure sum.
                        </div>

                        {/* <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text> */}
                      </Space>
                    </Col>
                    <Col span={12}className="mobile-hidden">
                      <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom: -46, left: 25, width: "100%", border: "1px solid #000", paddingRight: "20px", tableLayout: "fixed" }}>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Start
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      June 2020
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      End
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      August 2022
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Title
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      Managing Partner
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Link
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      www.asdas
    </div>
  </div>
</div>

                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
                    height:145,
                  }}
                >
                  <Typography.Text
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100%",
                      backgroundColor: "rgb(238, 238, 238)",
                      color: "Black",
                      padding: "1px",
                      marginLeft: "50px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      borderBottom: "2px solid #000",
                    }}
                  >
                    <span style={{ marginLeft: '2px' }}>4 - |</span>
                    <a
                      href="#"
                      style={{
                        marginLeft: '10px',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'inherit',
                      }}
                    >
                      Nirvan’s Brickseek
                    </a>
                  </Typography.Text>
                  <Col
  xs={{ span: 24 }}
  sm={{ span: 24 }}
  md={{ span: 0 }}
  lg={{ span: 0 }}
  style={{
    marginTop: '12px',      // Add margin-top
    fontSize: '12px',       // Set font size
    fontWeight: 'bold'     // Set font weight
  }}
>
Nirvan’s Brickseek is a community for reselling limited items, coupons/deals, and other educational resources for creating 2nd streams of income.
</Col>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                      <div
  className="mobile-hidden"
    style={{
      fontSize: "11px",
  
      color: "black",
      fontWeight: "600",
  
      fontFamily: "Arial, sans-serif",
    }}
  >
                         Nirvan’s Brickseek is a community for reselling limited items, coupons/deals, and other educational resources for creating 2nd streams of income.
                        </div>

                        {/* <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text> */}
                      </Space>
                    </Col>
                    <Col span={12}className="mobile-hidden">
                      <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom: -63, left: 25, width: "100%", border: "1px solid #000", paddingRight: "20px", tableLayout: "fixed" }}>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Start
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      January 2020
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      End
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      August 2022
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Title
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      Founder
    </div>
  </div>
  <div className="table-row" style={{ display: "table-row" }}>
    <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
      Link
    </div>
    <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      www.asdas
    </div>
  </div>
</div>

                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
                    height:145,
                  }}
                >
                  <Typography.Text
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100%",
                      backgroundColor: "rgb(238, 238, 238)",
                      color: "Black",
                      padding: "1px",
                      marginLeft: "50px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      borderBottom: "2px solid #000",
                    }}
                  >
                    <span style={{ marginLeft: '2px' }}>5 - |</span>
                    <a
                      href="#"
                      style={{
                        marginLeft: '10px',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'inherit',
                      }}
                    >
                      Tavern
                    </a>
                  </Typography.Text>
                  <Col
  xs={{ span: 24 }}
  sm={{ span: 24 }}
  md={{ span: 0 }}
  lg={{ span: 0 }}
  style={{
    marginTop: '12px',      // Add margin-top
    fontSize: '12px',       // Set font size
    fontWeight: 'bold'     // Set font weight
  }}
>
Tavern revolutionizes the proxy purchasing experience by making it social and interactive.
</Col>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                      <div
  className="mobile-hidden"
    style={{
      fontSize: "11px",
  
      color: "black",
      fontWeight: "600",
  
      fontFamily: "Arial, sans-serif",
    }}
  >
                          Tavern revolutionizes the proxy purchasing experience by making it social and interactive.
                        </div>

                        {/* <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text> */}
                      </Space>
                    </Col>
                    <Col span={12}className="mobile-hidden">
                    <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
  <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom: -80, left: 25, width: "100%", border: "1px solid #000", paddingRight: "20px", tableLayout: "fixed" }}>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        Start
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
        December 2021
      </div>
    </div>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        End
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
        August 2022
      </div>
    </div>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        Title
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
        Founder
      </div>
    </div>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        Link
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
        www.asdas
      </div>
    </div>
  </div>
</div>

                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
                    height:145,
                  }}
                >
                  <Typography.Text
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100%",
                      backgroundColor: "rgb(238, 238, 238)",
                      color: "Black",
                      padding: "1px",
                      marginLeft: "50px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      borderBottom: "2px solid #000",
                    }}
                  >
                    <span style={{ marginLeft: '2px' }}>6 - |</span>
                    <a
                      href="#"
                      style={{
                        marginLeft: '10px',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'inherit',
                      }}
                    >
                      Librehacks


                    </a>
                  </Typography.Text>
                  <Col
  xs={{ span: 24 }}
  sm={{ span: 24 }}
  md={{ span: 0 }}
  lg={{ span: 0 }}
  style={{
    marginTop: '12px',      // Add margin-top
    fontSize: '12px',       // Set font size
    fontWeight: 'bold'     // Set font weight
  }}
>
A certified 501(c)(3) non-profit with the goal of encouraging stem education in low-income schools.
</Col>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                      <div
  className="mobile-hidden"
    style={{
      fontSize: "11px",
  
      color: "black",
      fontWeight: "600",
  
      fontFamily: "Arial, sans-serif",
    }}
  >
                          A certified 501(c)(3) non-profit with the goal of encouraging stem education in low-income schools.
                        </div>

                        {/* <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text> */}
                      </Space>
                    </Col>
                    <Col span={12}className="mobile-hidden">
                    <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
  <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom: -80, left: 25, width: "100%", border: "1px solid #000", paddingRight: "20px", tableLayout: "fixed" }}>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        Start
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
        December 2021
      </div>
    </div>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        End
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
        Present
      </div>
    </div>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        Title
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
      Board Member
      </div>
    </div>
    <div className="table-row" style={{ display: "table-row" }}>
      <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold", width: "20%" }}>
        Link
      </div>
      <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", width: "30%" }}>
        www.asdas
      </div>
    </div>
  </div>
</div>

                    </Col>
                  </Row>
                </Card>
              </Col>
              
              
            </Row>
          </Col>
          
        </Row>
        
      </Layout.Content>
    </Layout>
  );
}
