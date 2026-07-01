import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { DataProvider } from './context/DataContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from "react-scroll-to-top";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider >
      <CartProvider>

        <ClerkProvider>
          <App />
        
      <ScrollToTop style={
        {backgroundColor : "#fa2d37" , display: "flex" , justifyContent: "center" , alignItems:"center"}
      }  color= "white" smooth />
    
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

          />
        </ClerkProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)
