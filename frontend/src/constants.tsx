type NavigationRouteType = {
  title: string;
  key: string;
  path: string;
};

type NavigationRoutesType = {
  Home: NavigationRouteType;
  About: NavigationRouteType;
  Syllabus: NavigationRouteType;
  WebCreation: NavigationRouteType;
  PreviewWebsite: NavigationRouteType;
  Projects: NavigationRouteType;
  Judges: NavigationRouteType;
  Sponsors: NavigationRouteType;
  Login: NavigationRouteType;
  Logout: NavigationRouteType;
};

export const NavigationRoutes: NavigationRoutesType = {
  Home: {
    title: 'Home',
    key: 'Home',
    path: '/',
  },
  About: {
    title: 'About',
    key: 'About',
    path: '/About',
  },
  Syllabus: {
    title: 'Syllabus',
    key: 'Syllabus',
    path: '/Syllabus',
  },
  WebCreation: {
    title: 'Create Website',
    key: 'WebCreation',
    path: '/WebCreation',
  },
  PreviewWebsite: {
    title: 'Preview Website',
    key: 'PreviewWebsite',
    path: '/PreviewWebsite',
  },
  Projects: {
    title: 'Projects',
    key: 'Projects',
    path: '/Projects',
  },
  Judges: {
    title: 'Judges',
    key: 'Judges',
    path: '/Judges',
  },
  Sponsors: {
    title: 'Sponsors',
    key: 'Sponsors',
    path: '/Sponsors',
  },
  Login: {
    title: 'Login',
    key: 'Login',
    path: '/Login',
  },
  Logout: {
    title: 'Logout',
    key: 'Logout',
    path: '/',
  },
};

export const MAX_SCREEN_SHOT_COUNT = 5;

export const CreateWebsiteFormFieldNames = {
  Name: 'name',
  Category: 'category',
  Logo: 'logo',
  ShortDescription: 'shortDescription',
  LongDescription: 'longDescription',
  Screenshots: 'screenshots',
  HasVideo: 'hasVideo',
  VideoUrl: 'videoUrl',
  SelectedMembers: 'selectedMembers',
  SelectedStakeholders: 'selectedStakeholders',
  SelectedAdvisors: 'selectedAdvisors',
};

export const ProjectCategories = [
  { key: 'Corporate', value: 'Corporate' },
  { key: 'Research', value: 'Research' },
  { key: 'Humanitarian', value: 'Humanitarian' },
  { key: 'Security', value: 'Security' },
  { key: 'Entrepreneurial', value: 'Entrepreneurial' },
  { key: 'Game', value: 'Game' },
];
