import { Outlet, Link } from "react-router-dom";
import myPic from "../assets/profile/Luffy.jpg";


function MainLayout() {
    return (
        <div>
            <div className="header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#95c5eaff', borderRadius: '10px', margin: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                    <img src={myPic} alt="Profile" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                    <h2 style={{ color: "greenyellow" }}>Sun Heng</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginLeft: 'auto' }}>
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/about"><h3>About</h3></Link>
                    <Link to="/projects"><h3>Project</h3></Link>
                    <Link to="/contact"><h3>Contact</h3></Link>
                </div>
            </div>
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;