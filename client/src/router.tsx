import { createBrowserRouter } from 'react-router-dom';
import { action as formAction } from './actions/formAction';
import { loader as productsLoader } from './loaders/productsLoader';
import { loader as editProductLoader } from './loaders/editProductLoader';
import { action as updateAction } from './actions/updateAvailabilityAction';
import { action as deleteProductAction } from './actions/deleteProductAction';
import Layout from './layouts/Layout';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAction
      },
      {
        path: 'products/create',
        element: <NewProduct />,
        action: formAction
      },
      {
        path: 'products/:id/edit', // ROA Pattern
        element: <EditProduct />,
        action: formAction,
        loader: editProductLoader
      },
      {
        path: 'products/:id/delete',
        action: deleteProductAction
      }
    ]
  }
]);
