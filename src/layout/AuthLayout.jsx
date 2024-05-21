import { Outlet } from 'react-router-dom'
import img from '../assets/images/bg-auth.jpeg'

const AuthLayout = () => {
    return (
        <>
            <main className="main md:h-screen h-full relative flex flexCol">
                <div className="flex-1 mb3">
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
