import dynamic from 'next/dynamic';

const AsciiArtDemo = dynamic(() => import('@/app/demos/ascii-art/page').then(m => m.default), { ssr: false });

export default function AsciiArtPage() {
  return <AsciiArtDemo />;
}
