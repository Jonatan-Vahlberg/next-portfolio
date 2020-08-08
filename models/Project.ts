type Project = {
  id: string;
  name: string;
  subtitle: string;
  platform: string;
  thumb: string;
  orderId: number;
  website?: string;
  github?: string;
  playstore?: string;
  html?: string;
  [key: string]: string | number;
};

export default Project;
