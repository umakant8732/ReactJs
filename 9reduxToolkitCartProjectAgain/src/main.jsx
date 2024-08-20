import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import store, {persistor} from './store/store.js'
import { Provider } from 'react-redux'

import Products from './components/Products.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Wishlist from './pages/Wishlist.jsx'

import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/about",
        element: <About/>

      },
      {
        path : "/contact-us",
        element : <ContactUs/>

      },
      {
        path : "/wishlist",
        element : <Wishlist/>

      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </PersistGate>
  </Provider>

)
