'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Call logout API route to clear the cookie
      await fetch('/api/logout', { method: 'POST' });

      // Redirect to sign-up page
      router.push('/sign-up');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
