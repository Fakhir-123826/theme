import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CustomAlert from './CustomAlert'
import CustomConfirm from './CustomConfirm'

const LumaLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <CustomAlert />
        <CustomConfirm />
    </div>
  )
}

export default LumaLayout