import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import { Provider } from 'react-redux'
import reduxStore from './reduxStore.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='cart' element={<Cart />} />
        <Route path='' element={<Products />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  </Provider>


)
