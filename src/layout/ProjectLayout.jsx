import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function ProjectLayout() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />

        <main style={{ flex: 1, padding: '2rem' }}>
            <Outlet />
        </main>
        </div>
    )
}

export default ProjectLayout
