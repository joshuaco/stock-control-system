import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { getProductByID } from '../services/ProductService';

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const product = await getProductByID(+params.id);

    if (!product) {
      redirect('/');
    }

    return product;
  }
}
