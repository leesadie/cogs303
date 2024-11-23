import { NextApiRequest, NextApiResponse } from 'next';
import { fetchUsersFromCSV } from '../utils/fetchUsers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await fetchUsersFromCSV();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error reading CSV file' });
  }
}