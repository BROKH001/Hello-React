import { Outlet, Link } from "react-router-dom";


function MainLayout() {
    return (
        <div>
            <div className="header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '10%', paddingRight: '10%', backgroundColor: '#eab77cff', borderRadius: '10px', marginBottom: '20px' }}>
                <h1>User Name</h1>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginLeft: 'auto' }}>
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/about"><h3>About</h3></Link>
                    <Link to="/projects"><h3>Project</h3></Link>
                    <Link to="/contact"><h3>Contact</h3></Link>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;