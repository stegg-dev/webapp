import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10" data-testid="not-found">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl font-medium text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link href="/">
        <span className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Go Home
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
