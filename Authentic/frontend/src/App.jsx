import { Header } from './components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
