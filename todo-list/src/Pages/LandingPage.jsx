import { Link } from "react-router-dom";

function LandingPage() {
    return(
        <>
        <h1>Selamat datang di Home!</h1>
        <Link to='/todo/list'>Pergi ke Main</Link>
       </> 
    )
}

export default LandingPage;