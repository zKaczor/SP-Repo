import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Empty,
  Form,
  Input,
  List,
  Row,
  Select,
  Space,
  Tooltip,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import { FC, useEffect, useState } from 'react';
import {
  UploadOutlined,
  PlusOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import {
  CreateWebsiteFormFieldNames,
  MAX_SCREEN_SHOT_COUNT,
  NavigationRoutes,
  ProjectCategories,
} from '../constants';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;
const { Option } = Select;

interface CreateWebsiteProps {}

export interface ImageProps {
  url: string;
  name: string;
  status: 'done' | 'uploading' | 'error';
  uid: string;
}

export interface MemberInfo {
  id: string;
  name: string;
  username: string;
}
export interface StakeholderInfo {
  id: string;
  name: string;
  username: string;
}
export interface AdvisorInfo {
  id: string;
  name: string;
  username: string;
}
export interface CreateWebsiteFormData {
  name?: string;
  category?: string;
  logo?: [ImageProps];
  shortDescription?: string;
  longDescription?: string;
  hasVideo?: boolean;
  videoUrl?: string;
  screenshots?: ImageProps[];
  selectedMembers?: MemberInfo[];
  selectedStakeholders?: StakeholderInfo[];
  selectedAdvisors?: AdvisorInfo[];
}

const DummyStudentsData: MemberInfo[] = [
  {
    id: '1',
    name: 'John Brown',
    username: 'johnbrown',
  },
  {
    id: '2',
    name: 'Jim Green',
    username: 'jimgreen',
  },
  {
    id: '3',
    name: 'Joe Black',
    username: 'joeblack',
  },
  {
    id: '4',
    name: 'Jim Red',
    username: 'jimred',
  },
  {
    id: '5',
    name: 'Jim Blue',
    username: 'jimblue',
  },
  {
    id: '6',
    name: 'Jim Violet',
    username: 'jimviolet',
  },
];

const DummyStakeholdersData = [
  {
    id: '1',
    name: 'Stakeholder 1',
    username: 'stakeholder1',
  },
  {
    id: '2',
    name: 'Stakeholder 2',
    username: 'stakeholder2',
  },
  {
    id: '3',
    name: 'Stakeholder 3',
    username: 'stakeholder3',
  },
  {
    id: '4',
    name: 'Stakeholder 4',
    username: 'stakeholder4',
  },
  {
    id: '5',
    name: 'Stakeholder 5',
    username: 'stakeholder5',
  },
  {
    id: '6',
    name: 'Stakeholder 6',
    username: 'stakeholder6',
  },
];

const DummyAdvisorsData = [
  {
    id: '1',
    name: 'Advisor 1',
    username: 'advisor1',
  },
  {
    id: '2',
    name: 'Advisor 2',

    username: 'advisor2',
  },
  {
    id: '3',
    name: 'Advisor 3',
    username: 'advisor3',
  },
  {
    id: '4',
    name: 'Advisor 4',
    username: 'advisor4',
  },
  {
    id: '5',
    name: 'Advisor 5',
    username: 'advisor5',
  },
  {
    id: '6',
    name: 'Advisor 6',
    username: 'advisor6',
  },
];

const DummyFormData: CreateWebsiteFormData = {
  category: ProjectCategories[0].key,
  longDescription: 'long description',
  name: 'name',
  shortDescription: 'short description',
  hasVideo: true,
  videoUrl: 'https://www.youtube.com/watch?v=0aUav1lx3rA',
  logo: [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ],
  screenshots: [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ],
  selectedMembers: [
    {
      id: '1',
      name: 'John Brown',
      username: 'johnbrown',
    },
    {
      id: '2',
      name: 'Jim Green',
      username: 'jimgreen',
    },
  ],
  selectedStakeholders: [
    {
      id: '1',
      name: 'Stakeholder 1',
      username: 'stakeholder1',
    },
    {
      id: '2',
      name: 'Stakeholder 2',
      username: 'stakeholder2',
    },
  ],
  selectedAdvisors: [
    {
      id: '1',
      name: 'Advisor 1',
      username: 'advisor1',
    },
    {
      id: '2',
      name: 'Advisor 2',
      username: 'advisor2',
    },
  ],
};

export const CreateWebsite: FC<CreateWebsiteProps> = (props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const hasVideo = Form.useWatch('hasVideo', form);
  const [screenShots, setScreenShots] = useState<UploadFile[]>(DummyFormData.screenshots ?? []);
  // exclude items that are already selected
  const [filteredOptionsForMembers, setFilteredOptionsForMembers] = useState<MemberInfo[]>(
    DummyStudentsData.filter((item) => {
      return !DummyFormData.selectedMembers?.find((member) => member.id === item.id);
    })
  );
  const [selectedMembers, setSelectedMembers] = useState<MemberInfo[]>(
    DummyFormData.selectedMembers ?? []
  );

  const [selectedStakeholders, setSelectedStakeholders] = useState<StakeholderInfo[]>(
    DummyFormData.selectedStakeholders ?? []
  );
  const [filteredOptionsForStakeholders, setFilteredOptionsForStakeholders] = useState<
    StakeholderInfo[]
  >(
    DummyStakeholdersData.filter((item) => {
      return !DummyFormData.selectedStakeholders?.find((stakeholder) => stakeholder.id === item.id);
    })
  );

  const [selectedAdvisors, setSelectedAdvisors] = useState<AdvisorInfo[]>(
    DummyFormData.selectedAdvisors ?? []
  );
  const [filteredOptionsForAdvisors, setFilteredOptionsForAdvisors] = useState<AdvisorInfo[]>(
    DummyAdvisorsData.filter((item) => {
      return !DummyFormData.selectedAdvisors?.find((advisor) => advisor.id === item.id);
    })
  );

  useEffect(() => {
    form.validateFields();
  }, [selectedAdvisors, selectedMembers, selectedStakeholders]);

  const normFile = (e: any) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      form.setFieldValue(CreateWebsiteFormFieldNames.Logo, e);
      return e;
    }
    form.setFieldValue(CreateWebsiteFormFieldNames.Logo, e && e.fileList);
    return e?.fileList;
  };

  // members handlers
  const onAddMember = (member: MemberInfo) => {
    form.setFieldValue(CreateWebsiteFormFieldNames.SelectedMembers, selectedMembers.concat(member));
    setSelectedMembers([...selectedMembers, member]);
    // remove from filtered options
    setFilteredOptionsForMembers(filteredOptionsForMembers.filter((m) => m.id !== member.id));
  };
  const onSearchMember = (value: string) => {
    if (value) {
      const filteredOptions = DummyStudentsData.filter(
        (item) =>
          item.name.toLowerCase().includes(value) || item.username.toLowerCase().includes(value)
      );
      const searchOptions = filteredOptions.filter(
        (item) => selectedMembers.find((m) => m.id === item.id) === undefined
      );
      setFilteredOptionsForMembers(searchOptions);
    } else {
      const searchOptions = DummyStudentsData.filter(
        (item) => selectedMembers.find((m) => m.id === item.id) === undefined
      );
      setFilteredOptionsForMembers(searchOptions);
    }
  };
  const removeMember = (member: MemberInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedMembers,
      selectedMembers.filter((m) => m.id !== member.id)
    );
    setSelectedMembers(selectedMembers.filter((item) => item.id !== member.id));
    // add to filtered options
    setFilteredOptionsForMembers([...filteredOptionsForMembers, member]);
  };

  // stakeholders handlers
  const onAddStakeholder = (stakeholder: StakeholderInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedStakeholders,
      selectedStakeholders.concat(stakeholder)
    );

    setSelectedStakeholders([...selectedStakeholders, stakeholder]);
    // remove from filtered options
    setFilteredOptionsForStakeholders(
      filteredOptionsForStakeholders.filter((option) => option.id !== stakeholder.id)
    );
  };
  const onSearchStakeholders = (value: string) => {
    if (value) {
      const filteredOptions = DummyStakeholdersData.filter(
        (item) =>
          item.name.toLowerCase().includes(value) || item.username.toLowerCase().includes(value)
      );
      const searchOptions = filteredOptions.filter(
        (item) => selectedStakeholders.find((m) => m.id === item.id) === undefined
      );
      setFilteredOptionsForStakeholders(searchOptions);
    } else {
      const searchOptions = DummyStakeholdersData.filter(
        (item) => selectedStakeholders.find((m) => m.id === item.id) === undefined
      );
      setFilteredOptionsForStakeholders(searchOptions);
    }
  };
  const onRemoveStakeholder = (stakeholder: MemberInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedStakeholders,
      selectedStakeholders.filter((m) => m.id !== stakeholder.id)
    );
    setSelectedStakeholders(selectedStakeholders.filter((item) => item.id !== stakeholder.id));
    // add to filtered options
    setFilteredOptionsForStakeholders([...filteredOptionsForStakeholders, stakeholder]);
  };

  // advisors handlers
  const onSearchAdvisor = (value: string) => {
    if (value) {
      const filteredOptions = DummyAdvisorsData.filter(
        (item) =>
          item.name.toLowerCase().includes(value) || item.username.toLowerCase().includes(value)
      );
      const searchOptions = filteredOptions.filter(
        (item) => selectedAdvisors.find((m) => m.id === item.id) === undefined
      );
      setFilteredOptionsForAdvisors(searchOptions);
    } else {
      const searchOptions = DummyAdvisorsData.filter(
        (item) => selectedAdvisors.find((m) => m.id === item.id) === undefined
      );
      setFilteredOptionsForAdvisors(searchOptions);
    }
  };

  const addAdvisor = (advisor: AdvisorInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedAdvisors,
      selectedAdvisors.concat(advisor)
    );

    setSelectedAdvisors([...selectedAdvisors, advisor]);
    // remove from filtered options
    setFilteredOptionsForAdvisors(
      filteredOptionsForAdvisors.filter((option) => option.id !== advisor.id)
    );
  };
  const removeAdvisor = (advisor: AdvisorInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedAdvisors,
      selectedAdvisors.filter((m) => m.id !== advisor.id)
    );
    setSelectedAdvisors(selectedAdvisors.filter((item) => item.id !== advisor.id));
    // add to filtered options
    setFilteredOptionsForAdvisors([...filteredOptionsForAdvisors, advisor]);
  };

  const onSubmitCreateWebsite = (values: any) => {
    console.log('values', values);
    // TODO: call api to create website
  };

  const previewWebsite = () => {
    navigate(NavigationRoutes.PreviewWebsite.path, {
      state: {
        data: form.getFieldsValue() as CreateWebsiteFormData,
      },
    }); // TODO: navigate to correct website id
  };

  const onImgCropOk = (file: any) => {
    console.log('file', file);
    if (file) {
      form.setFieldValue(CreateWebsiteFormFieldNames.Screenshots, [...screenShots, { ...file }]);
      setScreenShots([...screenShots, { ...file }]);
    }
  };
  return (
    <>
      {/* Project info */}
      <Typography.Title level={3}>Senior Design Project | 2022-2023</Typography.Title>
      <Form
        initialValues={DummyFormData}
        form={form}
        layout="vertical"
        onFinish={onSubmitCreateWebsite}
      >
        <Row gutter={[30, 15]} style={{ width: '100%' }}>
          {/* name */}
          <Col span={8}>
            <Form.Item
              label="Project Name:"
              name={CreateWebsiteFormFieldNames.Name}
              rules={[{ required: true, message: 'Please enter project name.' }]}
            >
              <Input placeholder="Project Name" />
            </Form.Item>
          </Col>
          {/* category */}
          <Col span={8}>
            <Form.Item
              label="Project Category:"
              name={CreateWebsiteFormFieldNames.Category}
              rules={[{ required: true, message: 'Please enter project category.' }]}
            >
              <Select placeholder="Select a category">
                {ProjectCategories.map((cate) => (
                  <Option key={cate.key}>{cate.value}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          {/* logo */}
          <Col span={8}>
            <Form.Item
              label="Project Logo:"
              valuePropName="fileList"
              name={CreateWebsiteFormFieldNames.Logo}
              getValueFromEvent={normFile}
              rules={[{ required: true, message: 'Please upload project logo.' }]}
            >
              {/* <ImgCrop rotate> */}
              <Upload accept=".png,.jpg" multiple={false} listType="picture" maxCount={1}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              {/* </ImgCrop> */}
            </Form.Item>
          </Col>
        </Row>
        {/* short description */}
        <Tooltip title="Describe your project in one sentence.">
          <Form.Item
            label="Short Description:"
            name={CreateWebsiteFormFieldNames.ShortDescription}
            rules={[{ required: true, message: 'Please enter some description.' }]}
          >
            <Input placeholder="Short Description" />
          </Form.Item>
        </Tooltip>
        {/* long description */}
        <Tooltip title="Give more information about your project.">
          <Form.Item label="Long Description:" name={CreateWebsiteFormFieldNames.LongDescription}>
            <TextArea rows={4} placeholder="Long Description" />
          </Form.Item>
        </Tooltip>

        <Row>
          <Col>
            <Form.Item label="" name={CreateWebsiteFormFieldNames.HasVideo} valuePropName="checked">
              <Checkbox>Do you have a video presentation for your project?</Checkbox>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label=""
              name={CreateWebsiteFormFieldNames.VideoUrl}
              rules={[{ required: hasVideo, message: 'Please enter video url.' }]}
            >
              <Input placeholder="Video Presentation URL" disabled={!hasVideo} />
            </Form.Item>
          </Col>
        </Row>
        <Typography.Paragraph>Please upload screenshots of your project:</Typography.Paragraph>
        <Form.Item
          name={CreateWebsiteFormFieldNames.Screenshots}
          // valuePropName="fileList"
          getValueFromEvent={onImgCropOk}
          style={{ textAlignLast: 'center' }}
        >
          <ImgCrop rotate onModalOk={onImgCropOk}>
            <Upload
              listType="picture-card"
              accept=".png,.jpg"
              fileList={form.getFieldValue(CreateWebsiteFormFieldNames.Screenshots)}
            >
              {screenShots.length < MAX_SCREEN_SHOT_COUNT && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </ImgCrop>
        </Form.Item>
        <Divider style={{ color: 'black' }} />
        {/* Team members */}
        <Typography.Title level={3}>Team Members</Typography.Title>
        <br />
        <Row>
          <Col span={5}>
            <Typography.Title level={4}>Search</Typography.Title>
          </Col>
          <Col flex="auto">
            <Typography.Title level={4}>Added Members</Typography.Title>
          </Col>
        </Row>
        <Row style={{ alignItems: 'baseline' }}>
          <Col span={5}>
            <Select
              style={{ width: '300px' }}
              mode="multiple"
              placeholder="Search for team members..."
              onSearch={(value) => onSearchMember(value)}
              dropdownRender={() => (
                <>
                  {filteredOptionsForMembers.length === 0 ? (
                    <Empty description={<>No more data</>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  ) : (
                    filteredOptionsForMembers.map((member) => (
                      <Row style={{ alignItems: 'baseline' }} key={member.id}>
                        <Col flex="auto" style={{ padding: '0 15px' }}>
                          <Typography.Text>{`${member.name} (${member.username})`}</Typography.Text>
                        </Col>
                        <Col flex="50px">
                          <Button type="text" onClick={() => onAddMember(member)}>
                            <PlusSquareOutlined />
                          </Button>
                        </Col>
                      </Row>
                    ))
                  )}
                </>
              )}
            ></Select>
          </Col>
          <Col span={19}>
            <Form.Item
              name={CreateWebsiteFormFieldNames.SelectedMembers}
              rules={[
                {
                  validator: (_, value) => {
                    if (value.length > 0) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Please select at least one team member.'));
                  },
                },
              ]}
            >
              <List
                size="small"
                grid={{ gutter: 10, column: 3 }}
                dataSource={selectedMembers}
                locale={{ emptyText: 'No members added yet.' }}
                renderItem={(member: MemberInfo) => (
                  <List.Item key={member.id} style={{ border: '1px solid', padding: '5px' }}>
                    <Space>
                      <Button type="text" danger onClick={() => removeMember(member)}>
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

        <Divider />
        {/* Stake Holders */}
        <Typography.Title level={3}>Stakeholders</Typography.Title>
        <br />
        <Row>
          <Col span={5}>
            <Typography.Title level={4}>Search</Typography.Title>
          </Col>
          <Col flex="auto">
            <Typography.Title level={4}>Added Stakeholders</Typography.Title>
          </Col>
        </Row>
        <Row style={{ alignItems: 'baseline' }}>
          <Col span={5}>
            <Select
              style={{ width: '300px' }}
              mode="multiple"
              placeholder="Search for stakeholders..."
              onSearch={(value) => onSearchStakeholders(value)}
              dropdownRender={() => (
                <>
                  {filteredOptionsForStakeholders.length === 0 ? (
                    <Empty description={<>No more data</>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  ) : (
                    filteredOptionsForStakeholders.map((item) => (
                      <Row style={{ alignItems: 'baseline' }} key={item.id}>
                        <Col flex="auto" style={{ padding: '0 15px' }}>
                          <Typography.Text>{`${item.name} (${item.username})`}</Typography.Text>
                        </Col>
                        <Col flex="50px">
                          <Button type="text" onClick={() => onAddStakeholder(item)}>
                            <PlusSquareOutlined />
                          </Button>
                        </Col>
                      </Row>
                    ))
                  )}
                </>
              )}
            ></Select>
          </Col>
          <Col span={19}>
            <Form.Item
              name={CreateWebsiteFormFieldNames.SelectedStakeholders}
              rules={[
                {
                  validator: (_, value) => {
                    if (value.length > 0) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Please select at least one stakeholder.'));
                  },
                },
              ]}
            >
              <List
                size="small"
                grid={{ gutter: 10, column: 3 }}
                dataSource={selectedStakeholders}
                locale={{ emptyText: 'No stakeholders added yet.' }}
                renderItem={(item: MemberInfo) => (
                  <List.Item key={item.id} style={{ border: '1px solid', padding: '5px' }}>
                    <Button type="text" danger onClick={() => onRemoveStakeholder(item)}>
                      <MinusSquareOutlined />
                    </Button>
                    <Typography.Text>{`${item.name} (${item.username})`}</Typography.Text>
                  </List.Item>
                )}
              ></List>
            </Form.Item>
          </Col>
        </Row>

        <Divider />
        {/* Advisors */}
        <Typography.Title level={3}>Advisors</Typography.Title>
        <br />
        <Row>
          <Col span={5}>
            <Typography.Title level={4}>Search</Typography.Title>
          </Col>
          <Col flex="auto">
            <Typography.Title level={4}>Added Advisors</Typography.Title>
          </Col>
        </Row>
        <Row style={{ alignItems: 'baseline' }}>
          <Col span={5}>
            <Select
              style={{ width: '300px' }}
              mode="multiple"
              placeholder="Search for advisors..."
              onSearch={(value) => onSearchAdvisor(value)}
              dropdownRender={() => (
                <>
                  {filteredOptionsForAdvisors.length === 0 ? (
                    <Empty description={<>No more data</>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  ) : (
                    filteredOptionsForAdvisors.map((item) => (
                      <Row style={{ alignItems: 'baseline' }} key={item.id}>
                        <Col flex="auto" style={{ padding: '0 15px' }}>
                          <Typography.Text>{`${item.name} (${item.username})`}</Typography.Text>
                        </Col>
                        <Col flex="50px">
                          <Button type="text" onClick={() => addAdvisor(item)}>
                            <PlusSquareOutlined />
                          </Button>
                        </Col>
                      </Row>
                    ))
                  )}
                </>
              )}
            ></Select>
          </Col>
          <Col span={19}>
            <Form.Item
              name={CreateWebsiteFormFieldNames.SelectedAdvisors}
              rules={[
                {
                  validator: (_, value) => {
                    if (value.length > 0) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Please select at least one advisor.'));
                  },
                },
              ]}
            >
              <List
                size="small"
                grid={{ gutter: 10, column: 3 }}
                dataSource={selectedAdvisors}
                locale={{ emptyText: 'No advisors added yet.' }}
                renderItem={(item: AdvisorInfo) => (
                  <List.Item key={item.id} style={{ border: '1px solid', padding: '5px' }}>
                    <Space>
                      <Button type="text" danger onClick={() => removeAdvisor(item)}>
                        <MinusSquareOutlined />
                      </Button>
                      <Typography.Text>{`${item.name} (${item.username})`}</Typography.Text>
                    </Space>
                  </List.Item>
                )}
              ></List>
            </Form.Item>
          </Col>
        </Row>

        {/* submit button */}
        <br />
        <Row justify="center">
          <Col style={{ textAlign: 'center' }}>
            <Button style={{ width: '350px', height: '50px' }} onClick={previewWebsite}>
              Preview Project Website
            </Button>
            <Typography.Paragraph style={{ padding: '5px 10px', width: '350px' }}>
              Click to preview how your website looks.
            </Typography.Paragraph>
          </Col>
          <Col offset={1} span={5} style={{ textAlign: 'center' }}>
            <Button type="primary" style={{ width: '350px', height: '50px' }} htmlType="submit">
              Submit Project Website
            </Button>
            <Typography.Paragraph style={{ padding: '5px 10px', width: '350px' }}>
              Once clicked, the information you entered will be sent for review to be published on
              the website.
            </Typography.Paragraph>
          </Col>
        </Row>
      </Form>
    </>
  );
};
