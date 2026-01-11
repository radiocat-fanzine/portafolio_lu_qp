import { Outlet } from 'react-router-dom'

function ProjectLayout() {
    return (
        <section style={{ padding: '2rem', width: '100%' }}>
        <Outlet />
        </section>
    )
}

export default ProjectLayout

