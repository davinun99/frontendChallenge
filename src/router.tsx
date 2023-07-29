import {
  createBrowserRouter
} from 'react-router-dom'

import ErrorPage from './pages/ErrorPage'
import ProductsPage from './pages/ProductsPage'
import ReviewsPage from './pages/ReviewsPage'
import AddProductPage from './pages/AddProductPage'
import HomePage from './pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/products',
    element: <ProductsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/reviews',
    element: <ReviewsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/add-product',
    element: <AddProductPage />,
    errorElement: <ErrorPage />
  }
])
