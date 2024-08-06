import { NextApiRequest, NextApiResponse } from 'next';
import { initMongoose } from '../../../lib/mongoose';
import Product from '../../../models/Product';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    await initMongoose();
    const products = await Product.find().exec();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
