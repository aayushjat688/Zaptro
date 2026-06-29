import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import {DataProvider } from './context/DataContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider >
      <CartProvider>

            <ClerkProvider>
      <App />
    </ClerkProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)
