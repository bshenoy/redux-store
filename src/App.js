import './App.css';

import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

export default function App() {
  return (
    <div className='App'>
      {/* <Product/> */}
      <RouterProvider router={router} />  
    </div>
  );
}
