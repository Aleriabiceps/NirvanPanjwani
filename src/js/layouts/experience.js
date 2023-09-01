import { Card, Col, Layout, Row, Space, Typography, Input } from "antd";

export default function App() {
  return (
    <Layout>
      <Layout.Content>
        <Row gutter={12} style={{ marginTop: 15 }}>
          {/* left */}
          <Col span={8}>
            <Row gutter={12}>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    height: "730px",
                    border: "1px solid black"
                  }}
                  bordered={false}
                >
                  <Row gutter={12}>
                    <Col span={24}>
                      <Input
                        placeholder="Search"
                        style={{
                          backgroundColor: "#EEEEEE",
                          fontSize: "10px",
                          fontWeight: "bolder",
                          border: "1px solid black"
                        }}
                        prefix={null}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24}></Col>
            </Row>
          </Col>

          {/* right */}
          <Col span={16}>
            <Row gutter={12}>
              <Col span={24}>
              <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    width: "600px",
                    border: "1px solid black"
                  }}
                
                >
                   <Typography.Text
    style={{
      position: "absolute", // Position the header absolutely within the card
      top: 0, // Align it to the top
      right: 0, // Align it to the right
      width: "100%", // Make it cover the whole width of the card
      backgroundColor: "rgb(238, 238, 238)", // Add a background color to create the border effect
      color: "Black", // Text color
      padding: "1px", // Adjust padding as needed
      marginLeft:"50px",
      fontSize: "14px", // Adjust font size as needed
      fontWeight: "bold", // Bold font weight
      borderTopLeftRadius: "4px", // Add rounded corners to the top left
      borderTopRightRadius: "4px", // Add rounded corners to the top right
      borderBottom: "2px solid #000",
    }}
  > <span style={{ marginLeft: '2px' }}>1 - |</span>
<a
  href="#" // Replace with the actual URL you want to link to
  style={{
    marginLeft: '10px',
    textDecoration: 'underline', // Underline style
    cursor: 'pointer', // Change cursor to indicate clickability
    color: 'inherit', // Use the same color as the surrounding text
  }}
>
  Bestudious
</a>
  </Typography.Text>
                  <Row gutter={12}>
                    <Col span={12}>
                      <Space direction="vertical">
                      <Typography.Text
  style={{
    fontSize: "9px",
    marginTop: "20px", // This adds margin-top
    color: "black",
    fontWeight: "600",
  
    overflow: "hidden", // Hides any overflow content
    textOverflow: "ellipsis", // Optional: Adds ellipsis (...) to indicate hidden content
    PaddingTop: "20px",
   marginRight:"20px",
  }}
>
  A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided.
</Typography.Text>

                        <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text>
                      </Space>
                    </Col>
                    <Col span={12}>
  <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
    <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom:7, left: 18, width: "100%", border: "1px solid #000", paddingRight: "20px" }}>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px",border: "1px solid #000", fontWeight: "bold" }}>
          Start
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2019
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          End
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2026
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          Title
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          GamePlay Engineer
        </div>
        
      </div>
      
    </div>
  </div>
</Col>



                  </Row>
                  
                </Card>
                
                {/* Other similar Card components */}
              </Col>
              <Col span={24}>
              <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    width: "600px",
                    border: "1px solid black"
                  }}
                
                >
                   <Typography.Text
    style={{
      position: "absolute", // Position the header absolutely within the card
      top: 0, // Align it to the top
      right: 0, // Align it to the right
      width: "100%", // Make it cover the whole width of the card
      backgroundColor: "rgb(238, 238, 238)", // Add a background color to create the border effect
      color: "Black", // Text color
      padding: "1px", // Adjust padding as needed
      marginLeft:"50px",
      fontSize: "14px", // Adjust font size as needed
      fontWeight: "bold", // Bold font weight
      borderTopLeftRadius: "4px", // Add rounded corners to the top left
      borderTopRightRadius: "4px", // Add rounded corners to the top right
      borderBottom: "2px solid #000",
    }}
  > <span style={{ marginLeft: '2px' }}>1 - |</span>
<a
  href="#" // Replace with the actual URL you want to link to
  style={{
    marginLeft: '10px',
    textDecoration: 'underline', // Underline style
    cursor: 'pointer', // Change cursor to indicate clickability
    color: 'inherit', // Use the same color as the surrounding text
  }}
>
  Bestudious
</a>
  </Typography.Text>
                  <Row gutter={12}>
                    <Col span={12}>
                      <Space direction="vertical">
                      <Typography.Text
  style={{
    fontSize: "9px",
    marginTop: "20px", // This adds margin-top
    color: "black",
    fontWeight: "600",
  
    overflow: "hidden", // Hides any overflow content
    textOverflow: "ellipsis", // Optional: Adds ellipsis (...) to indicate hidden content
    PaddingTop: "20px",
   marginRight:"20px",
  }}
>
  A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided.
</Typography.Text>

                        <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text>
                      </Space>
                    </Col>
                    <Col span={12}>
  <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
    <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom:7, left: 18, width: "100%", border: "1px solid #000", paddingRight: "20px" }}>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px",border: "1px solid #000", fontWeight: "bold" }}>
          Start
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2019
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          End
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2026
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          Title
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          GamePlay Engineer
        </div>
        
      </div>
      
    </div>
  </div>
</Col>



                  </Row>
                  
                </Card>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    width: "600px",
                    border: "1px solid black"
                  }}
                
                >
                   <Typography.Text
    style={{
      position: "absolute", // Position the header absolutely within the card
      top: 0, // Align it to the top
      right: 0, // Align it to the right
      width: "100%", // Make it cover the whole width of the card
      backgroundColor: "rgb(238, 238, 238)", // Add a background color to create the border effect
      color: "Black", // Text color
      padding: "1px", // Adjust padding as needed
      marginLeft:"50px",
      fontSize: "14px", // Adjust font size as needed
      fontWeight: "bold", // Bold font weight
      borderTopLeftRadius: "4px", // Add rounded corners to the top left
      borderTopRightRadius: "4px", // Add rounded corners to the top right
      borderBottom: "2px solid #000",
    }}
  > <span style={{ marginLeft: '2px' }}>1 - |</span>
<a
  href="#" // Replace with the actual URL you want to link to
  style={{
    marginLeft: '10px',
    textDecoration: 'underline', // Underline style
    cursor: 'pointer', // Change cursor to indicate clickability
    color: 'inherit', // Use the same color as the surrounding text
  }}
>
  Bestudious
</a>
  </Typography.Text>
                  <Row gutter={12}>
                    <Col span={12}>
                      <Space direction="vertical">
                      <Typography.Text
  style={{
    fontSize: "9px",
    marginTop: "20px", // This adds margin-top
    color: "black",
    fontWeight: "600",
  
    overflow: "hidden", // Hides any overflow content
    textOverflow: "ellipsis", // Optional: Adds ellipsis (...) to indicate hidden content
    PaddingTop: "20px",
   marginRight:"20px",
  }}
>
  A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided.
</Typography.Text>

                        <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text>
                      </Space>
                    </Col>
                    <Col span={12}>
  <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
    <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom:7, left: 18, width: "100%", border: "1px solid #000", paddingRight: "20px" }}>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px",border: "1px solid #000", fontWeight: "bold" }}>
          Start
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2019
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          End
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2026
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          Title
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          GamePlay Engineer
        </div>
        
      </div>
      
    </div>
  </div>
</Col>



                  </Row>
                  
                </Card>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    width: "600px",
                    border: "1px solid black"
                  }}
                
                >
                   <Typography.Text
    style={{
      position: "absolute", // Position the header absolutely within the card
      top: 0, // Align it to the top
      right: 0, // Align it to the right
      width: "100%", // Make it cover the whole width of the card
      backgroundColor: "rgb(238, 238, 238)", // Add a background color to create the border effect
      color: "Black", // Text color
      padding: "1px", // Adjust padding as needed
      marginLeft:"50px",
      fontSize: "14px", // Adjust font size as needed
      fontWeight: "bold", // Bold font weight
      borderTopLeftRadius: "4px", // Add rounded corners to the top left
      borderTopRightRadius: "4px", // Add rounded corners to the top right
      borderBottom: "2px solid #000",
    }}
  > <span style={{ marginLeft: '2px' }}>1 - |</span>
<a
  href="#" // Replace with the actual URL you want to link to
  style={{
    marginLeft: '10px',
    textDecoration: 'underline', // Underline style
    cursor: 'pointer', // Change cursor to indicate clickability
    color: 'inherit', // Use the same color as the surrounding text
  }}
>
  Bestudious
</a>
  </Typography.Text>
                  <Row gutter={12}>
                    <Col span={12}>
                      <Space direction="vertical">
                      <Typography.Text
  style={{
    fontSize: "9px",
    marginTop: "20px", // This adds margin-top
    color: "black",
    fontWeight: "600",
  
    overflow: "hidden", // Hides any overflow content
    textOverflow: "ellipsis", // Optional: Adds ellipsis (...) to indicate hidden content
    PaddingTop: "20px",
   marginRight:"20px",
  }}
>
  A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided.
</Typography.Text>

                        <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text>
                      </Space>
                    </Col>
                    <Col span={12}>
  <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
    <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom:7, left: 18, width: "100%", border: "1px solid #000", paddingRight: "20px" }}>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px",border: "1px solid #000", fontWeight: "bold" }}>
          Start
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2019
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          End
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2026
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          Title
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          GamePlay Engineer
        </div>
        
      </div>
      
    </div>
  </div>
</Col>



                  </Row>
                  
                </Card>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    width: "600px",
                    border: "1px solid black"
                  }}
                
                >
                   <Typography.Text
    style={{
      position: "absolute", // Position the header absolutely within the card
      top: 0, // Align it to the top
      right: 0, // Align it to the right
      width: "100%", // Make it cover the whole width of the card
      backgroundColor: "rgb(238, 238, 238)", // Add a background color to create the border effect
      color: "Black", // Text color
      padding: "1px", // Adjust padding as needed
      marginLeft:"50px",
      fontSize: "14px", // Adjust font size as needed
      fontWeight: "bold", // Bold font weight
      borderTopLeftRadius: "4px", // Add rounded corners to the top left
      borderTopRightRadius: "4px", // Add rounded corners to the top right
      borderBottom: "2px solid #000",
    }}
  > <span style={{ marginLeft: '2px' }}>1 - |</span>
<a
  href="#" // Replace with the actual URL you want to link to
  style={{
    marginLeft: '10px',
    textDecoration: 'underline', // Underline style
    cursor: 'pointer', // Change cursor to indicate clickability
    color: 'inherit', // Use the same color as the surrounding text
  }}
>
  Bestudious
</a>
  </Typography.Text>
                  <Row gutter={12}>
                    <Col span={12}>
                      <Space direction="vertical">
                      <Typography.Text
  style={{
    fontSize: "9px",
    marginTop: "20px", // This adds margin-top
    color: "black",
    fontWeight: "600",
  
    overflow: "hidden", // Hides any overflow content
    textOverflow: "ellipsis", // Optional: Adds ellipsis (...) to indicate hidden content
    PaddingTop: "20px",
   marginRight:"20px",
  }}
>
  A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided.
</Typography.Text>

                        <Typography.Text>
                          <span style={{ fontSize: "10px", fontWeight: "bold" }}>Category:</span>{" "}
                          <span style={{ fontSize: "10px" }}>Technology</span>
                        </Typography.Text>
                      </Space>
                    </Col>
                    <Col span={12}>
  <div className="card" style={{ display: "flex", justifyContent: "flex-end" }}>
    <div className="table-container" style={{ display: "table", borderCollapse: "collapse", position: "absolute", bottom:7, left: 18, width: "100%", border: "1px solid #000", paddingRight: "20px" }}>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "2px", paddingLeft: "1px",border: "1px solid #000", fontWeight: "bold" }}>
          Start
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2019
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          End
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          March 2026
        </div>
      </div>
      <div className="table-row" style={{ display: "table-row" }}>
        <div className="table-cell table-header" style={{ display: "table-cell", padding: "1px", paddingLeft: "1px", border: "1px solid #000", fontWeight: "bold" }}>
          Title
        </div>
        <div className="table-cell1" style={{ display: "table-cell", padding: "3px", paddingLeft: "1px", border: "1px solid #000" }}>
          GamePlay Engineer
        </div>
        
      </div>
      
    </div>
  </div>
</Col>



                  </Row>
                  
                </Card>
                
                {/* Other similar Card components */}
              </Col>
            </Row>
          </Col>
          
        </Row>
        
      </Layout.Content>
    </Layout>
  );
}
