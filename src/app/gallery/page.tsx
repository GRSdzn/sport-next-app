import { Metadata } from 'next';
import { galleryMeta } from '@/components/seo/meta/pages';
import GalleryPage from '@/components/pages/gallery/gallery.page';

export const metadata: Metadata = galleryMeta;

const Gallery: React.FC = () => {
  return <GalleryPage />;
};

export default Gallery;
