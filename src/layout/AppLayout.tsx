import Navbar from '@/components/appComponents/Navbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

    return (
        <div className="w-full">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AppLayout