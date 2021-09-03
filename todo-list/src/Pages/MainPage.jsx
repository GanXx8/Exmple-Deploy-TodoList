import { Link } from "react-router-dom";
import Main from '../Main.jsx'

function MainPage() {
    return(
        <>
        <h1>Silahkan cetak ToDo List!</h1>
        <Main/>
        <Link to='/home'>Pergi ke Home</Link><br>
        </br>
        <Link to='/about/me'>Cek Result</Link>
       </> 
    )
}

export default MainPage;