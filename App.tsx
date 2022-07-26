import React from 'react';
import MainNavigation from './src/navigation/mainNav';
import { StoreProvider } from './src/store';

export default function App() {
  return (
    <StoreProvider>
      <MainNavigation />
    </StoreProvider>
  );
}
