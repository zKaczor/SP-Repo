/** @format */

import { MenuOutlined } from '@ant-design/icons';
import { Col, Drawer, Grid, Image, Layout, Menu, Row, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MenuItems, NavigationRoutes } from '../../constants';
import logo from '../../images/CollegeComputingInformaticsLogo.png';
import BackgroundImage from '../../images/create-website-bg.jpg';
import { useAuth } from '../../utils/auth-context';
const { useBreakpoint } = Grid;
const { Header, Footer, Content } = Layout;

interface MasterLayoutProps {}

export const MasterLayout: FC<MasterLayoutProps> = (props) => {
  const location = useLocation();
  const [subHeaderTitle, setSubHeaderTitle] = useState('');
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<string[] | undefined>();
  const auth = useAuth();
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Set the subheader title based on the current route (when page is refreshed)
  useEffect(() => {
    switch (location.pathname.toLowerCase()) {
      case NavigationRoutes.Home.path.toLowerCase():
        setSubHeaderTitle(NavigationRoutes.Home.title);
        setSelectedMenu([NavigationRoutes.Home.key]);
        break;
      case NavigationRoutes.About.path.toLowerCase():
        setSubHeaderTitle(NavigationRoutes.About.title);
        setSelectedMenu([NavigationRoutes.About.key]);
        break;
      case NavigationRoutes.Syllabus.path.toLowerCase():
        setSubHeaderTitle(NavigationRoutes.Syllabus.title);
        setSelectedMenu([NavigationRoutes.Syllabus.key]);
        break;
      case NavigationRoutes.WebCreation.path.toLowerCase():
        setSubHeaderTitle(NavigationRoutes.WebCreation.title);
        setSelectedMenu([NavigationRoutes.WebCreation.key]);
        break;
      case NavigationRoutes.PreviewWebsite.path.toLowerCase():
        setSubHeaderTitle(NavigationRoutes.PreviewWebsite.title);
        setSelectedMenu([NavigationRoutes.PreviewWebsite.key]);
        break;
      case NavigationRoutes.Login.path.toLowerCase():
        setSubHeaderTitle(NavigationRoutes.Login.title);
        setSelectedMenu([NavigationRoutes.Login.key]);
        break;
      default:
    }
  }, [location]);

  const onSelectMenu = (e: any) => {
    switch (e.key) {
      case NavigationRoutes.Home.key:
        navigate(NavigationRoutes.Home.path);
        setSubHeaderTitle(NavigationRoutes.Home.title);
        break;
      case NavigationRoutes.About.key:
        navigate(NavigationRoutes.About.path);
        setSubHeaderTitle(NavigationRoutes.About.title);
        break;
      case NavigationRoutes.Syllabus.key:
        navigate(NavigationRoutes.Syllabus.path);
        setSubHeaderTitle(NavigationRoutes.Syllabus.title);
        break;
      case NavigationRoutes.WebCreation.key:
        navigate(NavigationRoutes.WebCreation.path);
        setSubHeaderTitle(NavigationRoutes.WebCreation.title);
        break;

      case 'Login':
        navigate(NavigationRoutes.Login.path);
        setSubHeaderTitle(NavigationRoutes.Login.title);
        break;
      case 'Logout':
        auth?.onLogout();
        break;
      default:
        break;
    }
    setDrawerOpen(false);
  };

  const onCloseMenuDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh', display: 'flex', minWidth: '375px', maxWidth: '100vw' }}>
        <Header
          style={{
            paddingLeft: screens.xs || !screens.lg ? '10px' : '24px',
            paddingRight: screens.xs || !screens.lg ? '10px' : '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            height: 'fit-content',
          }}
        >
          <Row>
            <Col xs={15} sm={15} md={10} lg={9} xl={7}>
              <a target={'_blank'} href="https://cci.drexel.edu/seniordesign/index.html" rel="noreferrer">
                <Image src={logo} preview={false} width="100%" />
              </a>
            </Col>
            <Col
              style={{ textAlign: 'end' }}
              xs={{ span: 8, offset: 1 }}
              sm={{ span: 8, offset: 1 }}
              md={{ span: 13, offset: 1 }}
              lg={{ span: 14, offset: 1 }}
              xl={{ span: 16, offset: 1 }}
            >
              {screens.xs || !screens.xl ? (
                <>
                  <MenuOutlined onClick={() => setDrawerOpen(true)} />
                </>
              ) : (
                <>
                  <Menu
                    style={{
                      width: '100%',
                      paddingTop: '0px',
                      display: 'flex',
                      justifyContent: 'end',
                      overflowY: 'auto',
                      overflowX: 'hidden',
                    }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[NavigationRoutes.Home.key]}
                    onSelect={(item) => onSelectMenu(item)}
                    selectedKeys={selectedMenu}
                  >
                    <Menu.Item key={NavigationRoutes.Home.key}>{NavigationRoutes.Home.title}</Menu.Item>
                    <Menu.Item key={NavigationRoutes.About.key}>About</Menu.Item>
                    <Menu.Item key={NavigationRoutes.Syllabus.key}>Syllabus</Menu.Item>
                    {auth?.token && <Menu.Item key={NavigationRoutes.WebCreation.key}>Web Creation</Menu.Item>}

                    <Menu.Item key={NavigationRoutes.Projects.key}>Projects</Menu.Item>
                    <Menu.Item key={NavigationRoutes.Judges.key}>Judges</Menu.Item>
                    <Menu.Item key={NavigationRoutes.Sponsors.key}>Sponsors</Menu.Item>

                    {auth?.token ? (
                      <Menu.Item key={NavigationRoutes.Logout.key}>Logout</Menu.Item>
                    ) : (
                      <Menu.Item key={NavigationRoutes.Login.key}>Login</Menu.Item>
                    )}
                  </Menu>
                </>
              )}
            </Col>
          </Row>
        </Header>
        <Row style={{ height: '200px' }}>
          <Col
            span={24}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'url(' + BackgroundImage + ')',
              backgroundSize: 'cover',
            }}
          >
            <Typography.Title
              level={2}
              style={{
                color: 'black',
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '10px',
              }}
            >
              {subHeaderTitle.toUpperCase()}
            </Typography.Title>
          </Col>
        </Row>
        <Content style={{ margin: screens.xs || !screens.lg ? '10px' : '24px', backgroundColor: 'white', flex: '1', borderRadius: '10px' }}>
          <Outlet />
        </Content>
        <Footer style={{ padding: '0px', display: 'flex', flexDirection: 'column' }}>
          <Row style={{ backgroundColor: '#11284A', color: 'white', width: '100%' }}>
            <Col span={24} style={{ textAlign: 'center', padding: '10px 0px' }}>
              <Typography.Paragraph style={{ color: 'white' }} strong>
                DREXEL UNIVERSITY
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: 'white' }}>
                3675 Market Street
                <br />
                Philadelphia, PA 19104
              </Typography.Paragraph>
            </Col>
          </Row>
          <Row style={{ backgroundColor: '#1A252F', width: '100%' }}>
            <Col span={24} style={{ textAlign: 'center', padding: '1rem 0px 0px' }}>
              <Typography.Paragraph style={{ color: 'white' }}>© 2022 Drexel University. All Rights Reserved.</Typography.Paragraph>
            </Col>
          </Row>
        </Footer>
      </Layout>
      <Drawer title="Menu" placement="right" onClose={onCloseMenuDrawer} open={drawerOpen}>
        {MenuItems.map((item) =>
          item.key === NavigationRoutes.WebCreation.key && !auth?.token ? null : (
            <>
              <Typography.Paragraph key={item.key} onClick={() => onSelectMenu({ key: item.key })}>
                {item.title}
              </Typography.Paragraph>
            </>
          )
        )}
        {auth?.token ? (
          <Typography.Paragraph onClick={() => onSelectMenu({ key: NavigationRoutes.Logout.key })}>
            {NavigationRoutes.Logout.title}
          </Typography.Paragraph>
        ) : (
          <Typography.Paragraph onClick={() => onSelectMenu({ key: NavigationRoutes.Login.key })}>
            {NavigationRoutes.Login.title}
          </Typography.Paragraph>
        )}
      </Drawer>
    </>
  );
};
