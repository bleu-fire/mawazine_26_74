import Artistcrad from "../components/ArtistCard"
import artists from "../data/artists"
function SetData(id:number):void{
    const data:any = JSON.parse(localStorage.getItem("Artists_id"))||[] ;
}
export  const  ArtistDetailPage = () =>{

    return(
        <div>
            {artists.map((line) =><Artistcrad buttonName="Add" />)}
        </div>
    );
}