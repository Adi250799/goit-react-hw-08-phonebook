import './App.css'
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<ContactPage />}/>
          }/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }/>
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }/>
      </Routes>
    </Layout>
  );
};

export default App