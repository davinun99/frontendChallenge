import React from 'react'
// import logo from './around-logo.webp'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { router } from './router'
import { Toaster } from 'react-hot-toast'

const App = () => (
  <>
    <div><Toaster position='top-right' /></div>
    <RouterProvider router={router}/>
  </>
)

export default App
