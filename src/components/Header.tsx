'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CICLOMAP CABO FRIO</h1>
        <nav>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/contact" className="mr-4">Contato</Link>
          <Link href="/about">Sobre</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
