import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import React from 'react'
import { router } from './route/route'
import AuthProvider from './auth/AuthProvider'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
)
