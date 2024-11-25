import { getProducts } from '../services/ProductService';

export async function loader() {
  try {
    const products = await getProducts();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error('Error loading products');
  }
}
