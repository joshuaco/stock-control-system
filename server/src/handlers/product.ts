import { Request, Response } from 'express';
import Product from '../models/Product';

const createProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.create(req.body);
    res.status(201).json({ data: products });
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [['id', 'ASC']]
    });
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
};

const getProductByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    await product.update(req.body);

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

const updateStockAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    product.inStock = !product.dataValues.inStock;
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    // TODO: Learn about 'logical deletion'
    await product.destroy();
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getProducts,
  getProductByID,
  createProduct,
  updateProduct,
  updateStockAvailability,
  deleteProduct
};
