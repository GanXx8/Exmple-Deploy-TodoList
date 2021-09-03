import { Link } from "react-router-dom";

function About() {
    return(
        <>
        <h1>Selamat datang di Result!</h1>
        <Link to='/main'>Pergi ke Main</Link><br>
        </br>
        <Link to='/resultlist'>Pergi ke Home</Link>
       </> 
    )
}

export default About;