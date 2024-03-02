import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Main from './components/Main/Main'
import Payments from './components/Payments/Payments'
import CreditScore from './components/Credit-Score/Credit-Score'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Main />}/>
      <Route path='/payments' element={<Payments />}/>
      <Route path='/credit-score' element={<CreditScore />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
