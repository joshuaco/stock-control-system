import axios from 'axios';
import { safeParse } from 'valibot';
import { Product } from '../types/index';
import { DraftProductSchema, ProductsSchema, ProductSchema } from '../schemas';

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(product: ProductData) {
  try {
    const parsed = safeParse(DraftProductSchema, {
      name: product.name,
      price: +product.price
    });

    if (parsed.success) {
      const URL = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(URL, {
        name: parsed.output.name,
        price: parsed.output.price
      });
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const URL = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios.get(URL);
    const result = safeParse(ProductsSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProductByID(id: Product['id']) {
  try {
    const URL = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios.get(URL);
    const result = safeParse(ProductSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error('Invalid data');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(id: Product['id'], product: ProductData) {
  try {
    const result = safeParse(ProductSchema, {
      id,
      name: product.name,
      price: +product.price,
      inStock: product.inStock === 'true'
    });

    if (result.success) {
      const URL = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      await axios.put(URL, result.output);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: Product['id']) {
  try {
    const URL = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.delete(URL);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductAvailability(id: Product['id']) {
  try {
    const URL = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.patch(URL);
  } catch (error) {
    console.log(error);
  }
}
