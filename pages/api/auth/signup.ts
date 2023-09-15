import User from '@/models/user';
import dbConnect from '@/utils/dbConnect';
// import handler from '@/utils/handler.js';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    dbConnect();
    await User.create(req.body);
    res.status(201).json({ message: 'Created user!' });
  } else {
    // Handle any other HTTP method
  }
}

export default handler;
