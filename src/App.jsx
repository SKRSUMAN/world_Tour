
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './Pages/ErrorPage'


const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/country",
        element:<Country/>
      },
    ]
  }

 
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
      <h1>Hello React Project</h1>
      </RouterProvider>
    </div>
  )
}

export default App