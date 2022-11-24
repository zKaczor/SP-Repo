import { Button, Checkbox, Col, Divider, Empty, Form, Input, List, Row, Select, Space, Tooltip, Typography, Upload, UploadFile, Grid } from 'antd';
import { FC, useEffect, useState } from 'react';
import { UploadOutlined, PlusOutlined, PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { CreateWebsiteFormFieldNames, MAX_SCREEN_SHOT_COUNT, NavigationRoutes, ProjectCategories } from '../constants';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/create-website/search-bar';
import { AccountInfo, SearchAddAccount } from '../components/create-website/search-add';
const { TextArea } = Input;
const { Option } = Select;
const { useBreakpoint } = Grid;

interface CreateWebsiteProps {}

export interface ImageProps {
  url: string;
  name: string;
  status: 'done' | 'uploading' | 'error';
  uid: string;
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
  selectedMembers?: AccountInfo[];
  selectedStakeholders?: AccountInfo[];
  selectedAdvisors?: AccountInfo[];
}

const DummyAllStudentsData: AccountInfo[] = [
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

const DummyAllStakeholdersData = [
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

const DummyAllAdvisorsData = [
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
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const hasVideo = Form.useWatch('hasVideo', form);
  const [screenShots, setScreenShots] = useState<UploadFile[]>(DummyFormData.screenshots ?? []);
  // exclude items that are already selected
  const [filteredOptionsForMembers, setFilteredOptionsForMembers] = useState<AccountInfo[]>(
    DummyAllStudentsData.filter((item) => {
      return !DummyFormData.selectedMembers?.find((member) => member.id === item.id);
    })
  );
  const [selectedMembers, setSelectedMembers] = useState<AccountInfo[]>(DummyFormData.selectedMembers ?? []);

  const [selectedStakeholders, setSelectedStakeholders] = useState<AccountInfo[]>(DummyFormData.selectedStakeholders ?? []);
  const [filteredOptionsForStakeholders, setFilteredOptionsForStakeholders] = useState<AccountInfo[]>(
    DummyAllStakeholdersData.filter((item) => {
      return !DummyFormData.selectedStakeholders?.find((stakeholder) => stakeholder.id === item.id);
    })
  );

  const [selectedAdvisors, setSelectedAdvisors] = useState<AccountInfo[]>(DummyFormData.selectedAdvisors ?? []);
  const [filteredOptionsForAdvisors, setFilteredOptionsForAdvisors] = useState<AccountInfo[]>(
    DummyAllAdvisorsData.filter((item) => {
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
  const onAddMember = (member: AccountInfo) => {
    form.setFieldValue(CreateWebsiteFormFieldNames.SelectedMembers, selectedMembers.concat(member));
    setSelectedMembers([...selectedMembers, member]);
    // remove from filtered options
    setFilteredOptionsForMembers(filteredOptionsForMembers.filter((m) => m.id !== member.id));
  };
  const onSearchMember = (value: string) => {
    if (value) {
      const filteredOptions = DummyAllStudentsData.filter(
        (item) => item.name.toLowerCase().includes(value) || item.username.toLowerCase().includes(value)
      );
      const searchOptions = filteredOptions.filter((item) => selectedMembers.find((m) => m.id === item.id) === undefined);
      setFilteredOptionsForMembers(searchOptions);
    } else {
      const searchOptions = DummyAllStudentsData.filter((item) => selectedMembers.find((m) => m.id === item.id) === undefined);
      setFilteredOptionsForMembers(searchOptions);
    }
  };
  const onRemoveMember = (member: AccountInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedMembers,
      selectedMembers.filter((m) => m.id !== member.id)
    );
    setSelectedMembers(selectedMembers.filter((item) => item.id !== member.id));
    // add to filtered options
    setFilteredOptionsForMembers([...filteredOptionsForMembers, member]);
  };
  const onFocusSearchMembers = () => {
    const searchOptions = DummyAllStudentsData.filter((item) => selectedMembers.find((m) => m.id === item.id) === undefined);
    setFilteredOptionsForMembers(searchOptions);
  };

  // stakeholders handlers
  const onAddStakeholder = (stakeholder: AccountInfo) => {
    form.setFieldValue(CreateWebsiteFormFieldNames.SelectedStakeholders, selectedStakeholders.concat(stakeholder));

    setSelectedStakeholders([...selectedStakeholders, stakeholder]);
    // remove from filtered options
    setFilteredOptionsForStakeholders(filteredOptionsForStakeholders.filter((option) => option.id !== stakeholder.id));
  };
  const onSearchStakeholders = (value: string) => {
    if (value) {
      const filteredOptions = DummyAllStakeholdersData.filter(
        (item) => item.name.toLowerCase().includes(value) || item.username.toLowerCase().includes(value)
      );
      const searchOptions = filteredOptions.filter((item) => selectedStakeholders.find((m) => m.id === item.id) === undefined);
      setFilteredOptionsForStakeholders(searchOptions);
    } else {
      const searchOptions = DummyAllStakeholdersData.filter((item) => selectedStakeholders.find((m) => m.id === item.id) === undefined);
      setFilteredOptionsForStakeholders(searchOptions);
    }
  };
  const onRemoveStakeholder = (stakeholder: AccountInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedStakeholders,
      selectedStakeholders.filter((m) => m.id !== stakeholder.id)
    );
    setSelectedStakeholders(selectedStakeholders.filter((item) => item.id !== stakeholder.id));
    // add to filtered options
    setFilteredOptionsForStakeholders([...filteredOptionsForStakeholders, stakeholder]);
  };
  const onFocusSearchStakeholders = () => {
    const searchOptions = DummyAllStakeholdersData.filter((item) => selectedStakeholders.find((m) => m.id === item.id) === undefined);
    setFilteredOptionsForStakeholders(searchOptions);
  };

  // advisors handlers
  const onSearchAdvisor = (value: string) => {
    if (value) {
      const filteredOptions = DummyAllAdvisorsData.filter(
        (item) => item.name.toLowerCase().includes(value) || item.username.toLowerCase().includes(value)
      );
      const searchOptions = filteredOptions.filter((item) => selectedAdvisors.find((m) => m.id === item.id) === undefined);
      setFilteredOptionsForAdvisors(searchOptions);
    } else {
      const searchOptions = DummyAllAdvisorsData.filter((item) => selectedAdvisors.find((m) => m.id === item.id) === undefined);
      setFilteredOptionsForAdvisors(searchOptions);
    }
  };
  const addAdvisor = (advisor: AccountInfo) => {
    form.setFieldValue(CreateWebsiteFormFieldNames.SelectedAdvisors, selectedAdvisors.concat(advisor));

    setSelectedAdvisors([...selectedAdvisors, advisor]);
    // remove from filtered options
    setFilteredOptionsForAdvisors(filteredOptionsForAdvisors.filter((option) => option.id !== advisor.id));
  };
  const onRemoveAdvisor = (advisor: AccountInfo) => {
    form.setFieldValue(
      CreateWebsiteFormFieldNames.SelectedAdvisors,
      selectedAdvisors.filter((m) => m.id !== advisor.id)
    );
    setSelectedAdvisors(selectedAdvisors.filter((item) => item.id !== advisor.id));
    // add to filtered options
    setFilteredOptionsForAdvisors([...filteredOptionsForAdvisors, advisor]);
  };
  const onFocusSearchAdvisors = () => {
    const searchOptions = DummyAllAdvisorsData.filter((item) => selectedAdvisors.find((m) => m.id === item.id) === undefined);
    setFilteredOptionsForAdvisors(searchOptions);
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
      <Form initialValues={DummyFormData} form={form} layout="vertical" onFinish={onSubmitCreateWebsite}>
        <Row gutter={screens.xs || !screens.xl ? [0, 0] : [30, 15]} style={{ width: '100%' }}>
          {/* name */}
          <Col xs={24} xl={8}>
            <Form.Item
              label="Project Name:"
              name={CreateWebsiteFormFieldNames.Name}
              rules={[{ required: true, message: 'Please enter project name.' }]}
            >
              <Input placeholder="Project Name" />
            </Form.Item>
          </Col>
          {/* category */}
          <Col xs={24} xl={8}>
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
          <Col xs={24} xl={8}>
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
          <Col xs={24} xl={12}>
            <Form.Item label="" name={CreateWebsiteFormFieldNames.VideoUrl} rules={[{ required: hasVideo, message: 'Please enter video url.' }]}>
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
            <Upload listType="picture-card" accept=".png,.jpg" fileList={form.getFieldValue(CreateWebsiteFormFieldNames.Screenshots)}>
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
        <SearchAddAccount
          title="Team Members"
          subtitle="Added Members"
          onSearch={onSearchMember}
          filteredOptions={filteredOptionsForMembers}
          selectedAccounts={selectedMembers}
          onAdd={onAddMember}
          onRemove={onRemoveMember}
          onFocusSearch={onFocusSearchMembers}
          formItemName={CreateWebsiteFormFieldNames.SelectedMembers}
          formItemErrorMessage="Please select at least one team member."
        />

        <Divider />
        {/* Stake Holders */}
        <SearchAddAccount
          title="Stakeholders"
          subtitle="Added Stakeholders"
          onSearch={onSearchStakeholders}
          filteredOptions={filteredOptionsForStakeholders}
          selectedAccounts={selectedStakeholders}
          onAdd={onAddStakeholder}
          onRemove={onRemoveStakeholder}
          onFocusSearch={onFocusSearchStakeholders}
          formItemName={CreateWebsiteFormFieldNames.SelectedStakeholders}
          formItemErrorMessage="Please select at least one stakeholder."
        />

        <Divider />
        {/* Advisors */}
        <SearchAddAccount
          title="Advisors"
          subtitle="Added Advisors"
          onSearch={onSearchAdvisor}
          filteredOptions={filteredOptionsForAdvisors}
          selectedAccounts={selectedAdvisors}
          onAdd={addAdvisor}
          onRemove={onRemoveAdvisor}
          onFocusSearch={onFocusSearchAdvisors}
          formItemName={CreateWebsiteFormFieldNames.SelectedAdvisors}
          formItemErrorMessage="Please select at least one advisor."
        />

        {/* review & submit button */}
        <br />
        <Row justify="center" gutter={[20, 0]}>
          <Col style={{ textAlign: 'center' }} xs={24} xl={5} lg={8} md={10}>
            <Button style={{ width: '100%', height: '50px' }} onClick={previewWebsite}>
              Preview Project Website
            </Button>
            <Typography.Paragraph style={{ padding: '5px 10px', width: '100%' }}>Click to preview how your website looks</Typography.Paragraph>
          </Col>
          <Col style={{ textAlign: 'center' }} xs={24} xl={5} lg={8} md={10}>
            <Button type="primary" style={{ width: '100%', height: '50px' }} htmlType="submit">
              Submit Project Website
            </Button>
            <Typography.Paragraph style={{ padding: '5px 10px', width: '100%' }}>
              Once clicked, the information you entered will be sent for review to be published on the website.
            </Typography.Paragraph>
          </Col>
        </Row>
      </Form>
    </>
  );
};
