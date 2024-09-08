
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import CreateProduct from './pages/create/CreateProduct'
import EditProduct from './pages/edit/EditProduct'
import SingleProduct from './pages/single/SingleProduct'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/edit' element={<EditProduct />}/>
        <Route path='/product' element={<SingleProduct/>}/>
      </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
