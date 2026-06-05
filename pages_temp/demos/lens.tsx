import dynamic from 'next/dynamic';

const LensDemo = dynamic(() => import('@/app/demos/lens/page').then(m => m.default), { ssr: false });

export default function LensPage() {
  return <LensDemo />;
}
