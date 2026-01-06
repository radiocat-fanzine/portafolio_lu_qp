import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../styles/components/layout.css'

function Layout() {
    return (
        <div className="layout-container">
            <Sidebar />

            <main className="layout-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout

