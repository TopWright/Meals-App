import Header from './Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="main relative">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
