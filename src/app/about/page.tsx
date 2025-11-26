import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/about/about.page';
import { aboutMeta } from '@/components/seo/meta/pages/about.meta';

export const metadata: Metadata = aboutMeta;

const About = () => {
  return <AboutPage />;
};

export default About;
