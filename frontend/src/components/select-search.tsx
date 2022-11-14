import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Col, Empty, Row, Select } from 'antd';
import { FC } from 'react';

interface AccountInfo {
  id: string;
  name: string;
  username: string;
}
interface SelectSearchProps {
  onFocus: () => void;
  onSearch: (value: string) => void;
  onSelect: (item: AccountInfo) => void;
  options: AccountInfo[];
}
export const SelectSearch: FC<SelectSearchProps> = (props) => {
  return (
    <Select
      onFocus={props.onFocus}
      style={{ width: '100%' }}
      mode="multiple"
      placeholder="Search for team members..."
      onSearch={(value) => props.onSearch(value)}
      dropdownRender={() => (
        <>
          {props.options.length === 0 ? (
            <Empty key="Members" description={<>No more data</>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            props.options.map((item) => (
              <Row
                style={{ alignItems: 'baseline' }}
                key={item.id}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Col flex="auto" style={{ padding: '0 15px' }}>
                  <Button
                    style={{ width: '100%', textAlign: 'left', border: '0px', borderBottom: '1px solid' }}
                    type="default"
                    onClick={() => props.onSelect(item)}
                  >
                    <PlusSquareOutlined />
                    {`${item.name} (${item.username})`}
                  </Button>
                </Col>
              </Row>
            ))
          )}
        </>
      )}
    />
  );
};
