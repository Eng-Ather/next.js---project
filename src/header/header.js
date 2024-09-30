// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className='bg-black text-white p-5'>
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
         
          <li style={{ marginRight: '20px' }}>
            <Link href="/">Home</Link>
          </li>
          
          <li style={{ marginRight: '20px' }}>
            <Link href="/about">About</Link>
          </li>

          <li style={{ marginRight: '20px' }}>
            <Link href='/project'>Projects</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
