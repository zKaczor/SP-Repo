import { DoubleLeftOutlined } from '@ant-design/icons';
import { Col, Descriptions, ImageProps, Row, Image, Typography, List, Card, Grid, Button } from 'antd';
import { FC } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationRoutes } from '../constants';
import { CreateWebsiteFormData } from './create-website';
const { useBreakpoint } = Grid;

export const PreviewWebsite: FC<any> = (props) => {
  // credit: https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically
  const { state } = useLocation();
  const data = state?.data as CreateWebsiteFormData; // Read values passed on state
  const screens = useBreakpoint();
  const navigate = useNavigate();

  return (
    <>
      <Row>
        <Col flex="auto">
          <Descriptions layout="horizontal" column={1} size="small" style={{ width: '400px' }}>
            <Descriptions.Item label="Year" labelStyle={{ width: '130px', fontWeight: 'bold' }}>
              2022
            </Descriptions.Item>
            <Descriptions.Item label="Project Name" labelStyle={{ width: '130px', fontWeight: 'bold' }}>
              {data?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Category" labelStyle={{ width: '130px', fontWeight: 'bold' }}>
              {data?.category}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col flex="210px">
          <Typography.Paragraph strong>Project's Logo:</Typography.Paragraph>
          <Image
            // height={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>

      {/* Screenshots */}
      <Typography.Title level={5}>Screenshots</Typography.Title>
      <List
        style={{ textAlign: 'center' }}
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 6, xl: 6, xxl: 6 }}
        dataSource={data?.screenshots}
        renderItem={(item) => (
          <List.Item>
            <Image src={item.url} />
          </List.Item>
        )}
      />
      {/* short description */}
      <Typography.Title level={5}>Short Description: </Typography.Title>
      <Typography.Paragraph>{data?.shortDescription}</Typography.Paragraph>

      {/* long description */}
      <Typography.Title level={5}>Long Description:</Typography.Title>
      <Typography.Paragraph>{data?.longDescription}</Typography.Paragraph>

      <Typography.Title level={5}>Project Video:</Typography.Title>
      <Row justify="center">
        <Col style={{ width: '100%' }}>
          <ReactPlayer
            width={screens.xs || !screens.xl ? '100%' : '640px'}
            height={screens.xs || !screens.xl ? '100%' : '320px'}
            url={data?.videoUrl}
            controls
          />
        </Col>
      </Row>

      {/* Team members */}
      <Typography.Title level={3}>Team Members</Typography.Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 6, xl: 6, xxl: 6 }}
        dataSource={data?.selectedMembers}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>
              <Typography.Text>Username: {item.username}</Typography.Text>
            </Card>
          </List.Item>
        )}
      />

      {/* Stakeholders */}
      <Typography.Title level={3}>Stakeholders</Typography.Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 6, xl: 6, xxl: 6 }}
        dataSource={data?.selectedStakeholders}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>
              <Typography.Text>Username: {item.username}</Typography.Text>
            </Card>
          </List.Item>
        )}
      />

      {/* advisors */}
      <Typography.Title level={3}>Advisors</Typography.Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 6, xl: 6, xxl: 6 }}
        dataSource={data?.selectedAdvisors}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>
              <Typography.Text>Username: {item.username}</Typography.Text>
            </Card>
          </List.Item>
        )}
      />

      {/* back button */}
      <Row justify="center">
        <Col>
          <Button
            onClick={() => {
              navigate(NavigationRoutes.WebCreation.path);
            }}
          >
            <DoubleLeftOutlined /> Back
          </Button>
        </Col>
      </Row>
    </>
  );
};
