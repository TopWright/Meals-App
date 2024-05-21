import { Outlet } from 'react-router-dom'
import img from '../assets/images/bg-auth.jpeg'

const AuthLayout = () => {
    return (
        <>
            <main className="main h-screen relative flex">
                <div className="flex-1">
                    <img src={img} alt="Food Background Image" className='w-full h-full' />
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default AuthLayout
