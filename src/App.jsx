import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router'

const App = () => {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(router)} /> 
    </div>
  )
}

export default App
