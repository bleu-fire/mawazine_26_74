
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
function title (){
    return(
        <div>
            <h1>welcom to mawazin 2026</h1>
            <p> the mawazin in 2026 is  hot</p>
        </div>
    );
}
export const Navbar = () =>{
    
    return(
         
        <div  className="bg-amber-400 h-10 " >
           
            <div>
                <nav  className=" flex justify-end gap-9 mr-3">
                <Link to="/">Home</Link>
                <Link to="/Artistd">ArtistDetailPage</Link>
                <Link to="/Passport">Passport</Link>
                <Link to="/Planning">Planning</Link>
                <Link to="/Programme">Programme</Link>
                </nav>
            </div>
            <div>
                <img src={logo} alt="#" className="h-2 w-2"/>
            </div>
            <title/>

        </div>
    );
}