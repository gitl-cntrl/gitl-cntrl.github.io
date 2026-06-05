import dynamic from 'next/dynamic';

const WaveShaderDemo = dynamic(() => import('@/app/demos/wave-shader/page').then(m => m.default), { ssr: false });

export default function WaveShaderPage() {
  return <WaveShaderDemo />;
}
