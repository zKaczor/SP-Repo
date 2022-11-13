import { FC } from "react"
import { Divider, Typography, Image, List } from 'antd';
import about from "../images/about.png"
const { Title, Paragraph, Text, Link } = Typography;

const data = [
  '7 months before the start of senior project',
  '1 month before the start of senior project',
  'Day 1 of senior project',
  '3 months in to senior project',
  '6 months in to senior project',
  'The end of senior project',
];

interface AboutProps {}


export const About: FC<AboutProps> = (props) => {
  return (
    <Typography>
    <Title>What is Senior Project?</Title>
    <Image
    width={1350}
    height={800}
    style={{alignItems: "center"}}
    src="error"
    fallback={about}
  />

    {/*
    <Paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    <Paragraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to{' '}
      <Text strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development
      </Text>
      .
    </Paragraph>
     */}

    <Title level={2}>Senior Project Timeline:</Title>
    <Paragraph>
      Here is a timeline of senior project over the year:
    </Paragraph>

    <List
      size="large"
      bordered
      dataSource={data}
      renderItem={item => 
        <li>
      {item}
      </li>
      }
    />

    <Paragraph>
      {/*
      <ul>
        <li>
          <Link href="/docs/spec/proximity">Principles</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview">Patterns</Link>
        </li>
        <li>
          <Link href="/docs/resources">Resource Download</Link>
        </li>
      </ul>
      */}
    </Paragraph>
    <Title>Previous Project Examples:</Title>
  </Typography>
  )
}