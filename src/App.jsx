import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import NotFound from './Components/NotFound/NotFound'
import PostDetails from './Pages/PostDetails/PostDetails'


export default function App() {

let router=createBrowserRouter([
  {path:'',element:<Layout/> , children:[
    {path:'' , element:<Home/>},
    {path:'blog' , element:<Blog/>},
    {path:'about' , element:<About/>},
    {path:'PostDetails/:id' , element:<PostDetails/>},
    {path:'*' , element:<NotFound/>},
  ]}
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
