import { Menu } from 'antd';
import { FC } from 'react';
import { NavigationRoutes } from '../../constants';

interface DesktopMenuProps {
  isAuthenticated: boolean;
  onSelectMenu: (routeKey: string) => void;
  selectedMenu?: string[];
}
export const DesktopMenu: FC<DesktopMenuProps> = (props) => {
  return (
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
      onSelect={(item) => props.onSelectMenu(item.key)}
      selectedKeys={props.selectedMenu}
    >
      <Menu.Item key={NavigationRoutes.Home.key}>{NavigationRoutes.Home.title}</Menu.Item>
      <Menu.Item key={NavigationRoutes.About.key}>About</Menu.Item>
      <Menu.Item key={NavigationRoutes.Syllabus.key}>Syllabus</Menu.Item>
      {props.isAuthenticated && (
        <Menu.Item key={NavigationRoutes.WebCreation.key}>Web Creation</Menu.Item>
      )}
      <Menu.Item key={NavigationRoutes.Projects.key}>Projects</Menu.Item>
      <Menu.Item key={NavigationRoutes.Judges.key}>Judges</Menu.Item>
      <Menu.Item key={NavigationRoutes.Sponsors.key}>Sponsors</Menu.Item>

      {props.isAuthenticated ? (
        <Menu.Item key={NavigationRoutes.Logout.key}>Logout</Menu.Item>
      ) : (
        <Menu.Item key={NavigationRoutes.Login.key}>Login</Menu.Item>
      )}
    </Menu>
  );
};
