import dynamic from 'next/dynamic';

const ImageClassifierDemo = dynamic(() => import('@/app/demos/image-classifier/page').then(m => m.default), { ssr: false });

export default function ImageClassifierPage() {
  return <ImageClassifierDemo />;
}
