
import  {artists}  from "../data/artists"

export const ArtistCrad = ()=>{
return(
    //this for the artist card to expand  in programm >_ adhd
<div className="flex flex-col items-center">
  {artists.map((artist: any) => (
    <div
      className="bg-amber-500 gap-6 m-10 flex items-center justify-center h-90  rounded-3xl"
      key={artist.id}
    >
      <img
        className="rounded-3xl h-45 ml-2"
        src={artist.img}
        alt={artist.title}
      />

      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="rounded-2xl bg-amber-700 px-4 py-2">
          {artist.name}
        </h1>

        <h1 className="rounded-3xl bg-amber-950 p-4 mr-2 text-white">
          {artist.about}
        </h1>
        <h1>{artist.time}</h1>
      </div>
    </div>
  ))}
</div>
);
    
}