import { FC } from "react"
import { Carousel, Divider, Typography, Card, Col, Row } from 'antd';
import React from 'react';
import { AlignCenterOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;
const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

interface HomeProps {}


export const Home: FC<HomeProps> = (props) => {
  return (
    <>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Image 1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Image 2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Image 3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Image 4</h3>
    </div>
  </Carousel>
  <Typography>
    <Title>Overview</Title>
    <Paragraph>
    CCI’s Senior Project is part of a multi-term capstone experience involving in-depth study and application of computing and informatics. Students work in teams to develop a significant product requiring use of a development process that includes planning, specification, design, implementation, evaluation, and documentation. Projects are often conceived by external stakeholders who guide the requirements process and ultimately use the resulting application. Groups may be interdisciplinary with students from varied departments within the College of Engineering and the Digital Media Program.
    </Paragraph>
    <Paragraph>
      <Text strong>
      Projects are judged in a multi-level competition on originality, compliance with software engineering principles, completion, and their successful deployment.
      </Text>
      .
    </Paragraph>
    <Title level={2}>Guidelines and Resources</Title>
    <Paragraph>
      <Text code>The top 3 projects</Text>in the following categories will be recognized: <Text code>corporate-sponsored, entrepreneurial, humanitarian, games, security, and research.</Text>
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="https://cci.drexel.edu/SeniorDesign/Winners.html">The winners have been announced for 2021-2022. View them here.</Link>
        </li>
        <li>
          <Link href="https://cci.drexel.edu/seniordesign/syllabus.html">Syllabus</Link>
        </li>
        <li>
          <Link href="https://cci.drexel.edu/seniordesign/sponsors.html">Sponsors</Link>
        </li>
      </ul>
    </Paragraph>

    <Divider />
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card
              bordered={false} hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8O8BgwPNPmgYbioRbDRu2yAbI6e8IYpwKQ&usqp=CAU" />}
            >
        <Meta title="Project Inception" description="Project ideas are ilicited from industry, academia, and from the students themselves." />
        </Card>
      </Col>
      <Col span={8}>
      <Card
              bordered={false} hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8O8BgwPNPmgYbioRbDRu2yAbI6e8IYpwKQ&usqp=CAU" />}
            >
        <Meta title="Project Planning" description="Students develop plans after gathering requirements and/or building prototypes." />
        </Card>
      </Col>
      <Col span={8}>
      <Card
              bordered={false} hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8O8BgwPNPmgYbioRbDRu2yAbI6e8IYpwKQ&usqp=CAU" />}
            >
        <Meta title="Design" description="Requirements are converted into comprehensive designs at many levels of detail." />
        </Card>
      </Col>
    </Row>
  </div>
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card
              bordered={false} hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8O8BgwPNPmgYbioRbDRu2yAbI6e8IYpwKQ&usqp=CAU" />}
            >
        <Meta title="Implementation" description="Designs are materialized into functional products via a series of iterations." />
        </Card>
      </Col>
      <Col span={8}>
      <Card
              bordered={false} hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8O8BgwPNPmgYbioRbDRu2yAbI6e8IYpwKQ&usqp=CAU" />}
            >
        <Meta title="Testing" description="Formal testing is carried out using tools like unit-testing." />
        </Card>
      </Col>
      <Col span={8}>
      <Card
              bordered={false} hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8O8BgwPNPmgYbioRbDRu2yAbI6e8IYpwKQ&usqp=CAU" />}
            >
        <Meta title="Deployment" description="Final products are delivered to the stakeholders for deployment." />
        </Card>
      </Col>
    </Row>
  </div>
  </Typography>
  </>
  )
}