import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { AppBar } from './components/AppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};