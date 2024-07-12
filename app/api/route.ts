import { NextApiRequest, NextApiResponse } from 'next';
import { signUp } from '../lib/auth_services';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const user = req.body;

    // Here you would usually save the data to your database
    console.log('Received data:', { username, email, password });
    signUp(user);

    // For demonstration, we'll just send a success response
    res.status(200).json({ message: 'Signup successful', user: {name: user.name} });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

