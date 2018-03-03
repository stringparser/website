
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <span style={{ fontSize: 20 }}>About Page</span>
    </Link>
    <p>Hello Next.js motherfucker</p>
  </div>
);

export default Index;
