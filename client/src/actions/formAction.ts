import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { addProduct, updateProduct } from '../services/ProductService';
import { toast } from 'react-toastify';

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = '';

  if (Object.values(data).includes('')) {
    error = 'All fields are required';
    return error;
  }

  if (params.id) {
    await updateProduct(+params.id, data);
    toast.success('Product updated successfully');
  } else {
    await addProduct(data);
    toast.success('Product created successfully');
  }

  return redirect('/');
}
