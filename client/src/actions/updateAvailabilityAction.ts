import { ActionFunctionArgs } from 'react-router-dom';
import { updateProductAvailability } from '../services/ProductService';

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());

  if (formData.id) {
    await updateProductAvailability(+formData.id);
  }
  return {};
}
