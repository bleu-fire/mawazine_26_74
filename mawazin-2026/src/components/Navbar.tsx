
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

export const Navbar = () =>{
    
    return(
         
        <div  className="bg-red-600 h-20  flex justify-between items-center" >
             <div className=" ml-9 flex justify-start">
                <img src={logo} alt="#" className="h-10 w-30"/>
            </div>


            <div>
                <nav  className=" flex justify-eArtistdnditems-center gap-9 mr-3">
                <Link className=" text-amber-300  hover:text-white " to="/">Home</Link>
                <Link className=" text-amber-300  hover:text-white " to="/ArtistDetailPage">ArtistDetailPage</Link>
                <Link className=" text-amber-300  hover:text-white " to="/Passport">Passport</Link>
                <Link className=" text-amber-300  hover:text-white " to="/Planning">Planning</Link>
                <Link  className=" text-amber-300  hover:text-white " to="/Programme">Programme</Link>
                </nav>
            </div>

            

        </div>
    );
}