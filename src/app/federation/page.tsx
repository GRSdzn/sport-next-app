import FederationPage from '@/components/pages/federation/federation.page';
import { Metadata } from 'next';
import { federationMeta } from '@/components/seo/meta/pages';

export const metadata: Metadata = federationMeta;

const Federation: React.FC = () => {
  return <FederationPage />;
};

export default Federation;
