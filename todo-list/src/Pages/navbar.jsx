import './navbar.css'
import { Link } from "react-router-dom";

function LandingPage(){
    return(
        <>
        <div>
            <ul>
                <li className='list'><Link className='link' to="/home">Home</Link></li>
                <li className='list'><Link className='link' to="/todo/list">Main</Link></li>
                <li className='list'><Link className='link' to="/about/me">About</Link></li>
            </ul>
        </div>
        </>
    )
}

export default LandingPage;