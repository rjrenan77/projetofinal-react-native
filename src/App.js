import React from 'react';

// import { Container } from './styles';
import { useSelector } from 'react-redux';
import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);
  return <Routes />;
}
