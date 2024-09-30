import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Mainlayout from './Layout/Mainlayout'
import HomePage from './Pages/HomePage'
import ShowInfo from './Components/ShowInfo'

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />} >
        <Route index element={<HomePage />} />
        <Route path='/ShowInfo/:id' element={<ShowInfo />} />
      </Route>
    )
  )
  return (
  <RouterProvider router={router} />
  )
}

export default App
