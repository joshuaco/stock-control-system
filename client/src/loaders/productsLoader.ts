import { getProducts } from '../services/ProductService';

export async function loader() {
  try {
    const products = await getProducts();

    if (!products) {
      throw new Error('No products found');
    }

    return products;
  } catch (error) {
    console.log(error);
    throw new Response('Error loading products', { status: 500 });
  }
}
