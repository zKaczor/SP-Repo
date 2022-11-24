import { Drawer, Button, Typography } from 'antd';
import { FC } from 'react';
import { MenuItems, NavigationRoutes } from '../../constants';

interface MenuDrawerProps {
  onSelectMenu: (routeKey: string) => void;
  onCloseMenuDrawer: () => void;
  isOpen: boolean;
  isAuthenticated: boolean;
}
export const MenuDrawer: FC<MenuDrawerProps> = (props) => {
  return (
    <Drawer title="Menu" placement="right" onClose={props.onCloseMenuDrawer} open={props.isOpen}>
      {MenuItems.map((item) =>
        item.key === NavigationRoutes.WebCreation.key && !props.isAuthenticated ? null : (
          <Button
            type="default"
            key={item.key}
            onClick={() => props.onSelectMenu(item.key)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              border: '0px',
              borderBottom: '3px solid #d1d1d1',
            }}
          >
            <Typography.Paragraph strong>{item.title}</Typography.Paragraph>
          </Button>
        )
      )}
      {props.isAuthenticated ? (
        <Button
          type="primary"
          key={NavigationRoutes.Logout.key}
          onClick={() => props.onSelectMenu(NavigationRoutes.Logout.key)}
          style={{
            display: 'block',
            width: '100%',

            // textAlign: 'left',
            border: '0px',
            // borderBottom: '3px solid #d1d1d1',
          }}
        >
          <Typography.Paragraph strong style={{ color: 'white' }}>
            {NavigationRoutes.Logout.title}
          </Typography.Paragraph>
        </Button>
      ) : (
        <Button
          type="primary"
          key={NavigationRoutes.Login.key}
          onClick={() => props.onSelectMenu(NavigationRoutes.Login.key)}
          style={{
            display: 'block',
            width: '100%',

            // textAlign: 'left',
            border: '0px',
            // borderBottom: '3px solid #d1d1d1',
          }}
        >
          <Typography.Paragraph strong style={{ color: 'white' }}>
            {NavigationRoutes.Login.title}
          </Typography.Paragraph>
        </Button>
      )}
    </Drawer>
  );
};
