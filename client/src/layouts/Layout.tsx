import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    <>
      <header className='bg-slate-800'>
        <div className='mx-auto max-w-xl md:max-w-3xl lg:max-w-6xl py-6'>
          <h1 className='text-4xl font-bold text-white'>
            Stock Control System
          </h1>
        </div>
      </header>

      <main className='mx-auto mt-10 max-w-xl md:max-w-3xl lg:max-w-6xl p-10 bg-white shadow'>
        <Outlet />
      </main>

      <ToastContainer />
    </>
  );
}

export default Layout;
