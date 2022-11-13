import { Button, Form, Input } from 'antd';
import { FC, useContext } from 'react';
import { useAuth } from '../utils/auth-context';

interface LoginProps {
  // onLogin: (username: string, password: string) => void;
}
export const Login: FC<LoginProps> = (props) => {
  const auth = useAuth();
  const login = (values: any) => {
    auth?.onLogin(values.username, values.password);
  };
  return (
    <Form onFinish={(values) => login(values)}>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
