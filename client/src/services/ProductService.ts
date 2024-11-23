import axios from 'axios';
import { safeParse } from 'valibot';
import { DraftProductSchema } from '../schemas';

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
