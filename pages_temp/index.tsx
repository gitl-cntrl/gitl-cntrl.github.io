import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40, color: '#ddd', background: '#000', minHeight: '100vh' }}>
      <h1>Aceternity Playground</h1>
      <ul>
        <li><Link href="/demos/ascii-art">ASCII Art Demo</Link></li>
        <li><Link href="/demos/lens">Lens Demo</Link></li>
        <li><Link href="/demos/wave-shader">Wave Shader Demo</Link></li>
        <li><Link href="/demos/image-classifier">Image Classifier Demo</Link></li>
      </ul>
    </main>
  );
}
