import { MinusSquareOutlined } from '@ant-design/icons';
import { Button, Col, Form, List, Row, Space, Typography, Grid } from 'antd';
import { FC } from 'react';
import { SearchBar } from './search-bar';
const { useBreakpoint } = Grid;
export interface AccountInfo {
  id: string;
  name: string;
  username: string;
}

interface SearchAddAccountProps {
  title: string;
  subtitle: string;
  onFocusSearch: () => void;
  onSearch: (value: string) => void;
  onAdd: (item: AccountInfo) => void;
  onRemove: (item: AccountInfo) => void;
  selectedAccounts: AccountInfo[];
  filteredOptions: AccountInfo[];
  formItemName: string;
  formItemErrorMessage: string;
}

export const SearchAddAccount: FC<SearchAddAccountProps> = (props) => {
  const screens = useBreakpoint();
  return (
    <>
      <Typography.Title level={3}>{props.title}</Typography.Title>
      <br />
      <Row style={{ alignItems: 'baseline' }} gutter={[16, 16]}>
        <Col xl={{ span: 7 }} lg={{ span: 7 }} xs={{ span: 24 }}>
          <Typography.Title level={4}>Search</Typography.Title>
          <SearchBar onFocus={props.onFocusSearch} onSearch={props.onSearch} onSelect={props.onAdd} options={props.filteredOptions} />
        </Col>
        <Col xl={{ span: 17 }} lg={{ span: 17 }} xs={{ span: 24 }}>
          <Typography.Title level={4}>{props.subtitle}</Typography.Title>
          <Form.Item
            name={props.formItemName}
            rules={[
              {
                validator: (_, value) => {
                  if (value.length > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(props.formItemErrorMessage));
                },
              },
            ]}
          >
            <List
              size="small"
              grid={{ gutter: 10, column: screens.xs || !screens.lg ? 1 : 3 }}
              dataSource={props.selectedAccounts}
              locale={{ emptyText: 'No members added yet.' }}
              renderItem={(member: AccountInfo) => (
                <List.Item key={member.id} style={{ border: '1px solid', padding: '5px' }}>
                  <Space>
                    <Button type="text" danger onClick={() => props.onRemove(member)}>
                      <MinusSquareOutlined />
                    </Button>
                    <Typography.Text>{`${member.name} (${member.username})`}</Typography.Text>
                  </Space>
                </List.Item>
              )}
            ></List>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
