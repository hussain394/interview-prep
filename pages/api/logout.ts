import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Clear the 'session' cookie
  const cookie = serialize('session', '', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0), // Expire the cookie
  });

  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ message: 'Logged out successfully' });
}
