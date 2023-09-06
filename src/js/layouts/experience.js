import { Card, Col, Layout, Row, Space, Typography, Input } from "antd";

export default function App() {
  return (
    <Layout>
      <Layout.Content>
        <Row style={{ marginTop: 15 }}>
          {/* left */}
          <Col xs={24} sm={24} md={8} style={{ height: "100%" }}>
            <Row>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
                  }}
                  bordered={false}
                >
                  <Row>
                    <Col span={24}>
                      <Input
                        placeholder="Search"
                        style={{
                          backgroundColor: "#EEEEEE",
                          fontSize: "10px",
                          fontWeight: "bolder",
                          border: "1px solid black",
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
          <Col xs={24} sm={24} md={16}>
            <Row>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
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
                      Bestudious
                    </a>
                  </Typography.Text>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                        <Typography.Text
                          style={{
                            fontSize: "9px",
                            marginTop: "20px",
                            color: "black",
                            fontWeight: "600",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            PaddingTop: "20px",
                            marginRight: "20px",
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
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
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
                      Bestudious
                    </a>
                  </Typography.Text>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                        <Typography.Text
                          style={{
                            fontSize: "9px",
                            marginTop: "20px",
                            color: "black",
                            fontWeight: "600",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            PaddingTop: "20px",
                            marginRight: "20px",
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
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
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
                      Bestudious
                    </a>
                  </Typography.Text>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                        <Typography.Text
                          style={{
                            fontSize: "9px",
                            marginTop: "20px",
                            color: "black",
                            fontWeight: "600",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            PaddingTop: "20px",
                            marginRight: "20px",
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
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
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
                      Bestudious
                    </a>
                  </Typography.Text>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                        <Typography.Text
                          style={{
                            fontSize: "9px",
                            marginTop: "20px",
                            color: "black",
                            fontWeight: "600",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            PaddingTop: "20px",
                            marginRight: "20px",
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
              </Col>
              <Col span={24}>
                <Card
                  style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: "0px",
                    border: "1px solid black",
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
                      Bestudious
                    </a>
                  </Typography.Text>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                        <Typography.Text
                          style={{
                            fontSize: "9px",
                            marginTop: "20px",
                            color: "black",
                            fontWeight: "600",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            PaddingTop: "20px",
                            marginRight: "20px",
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
