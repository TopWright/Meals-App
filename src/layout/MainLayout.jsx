import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
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
