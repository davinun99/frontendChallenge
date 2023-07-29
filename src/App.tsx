import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import './styles/App.scss'
import { router } from './router'

const App = () => (
  <>
    <div>
      <Toaster position='top-right' />
    </div>
    <RouterProvider router={router}/>
  </>
)

export default App
