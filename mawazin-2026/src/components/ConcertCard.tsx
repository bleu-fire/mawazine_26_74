import { ConcertData} from "../data/ConcertData";
export const ConcertCard =()=>{
return(


<div className="flex gap-9">
    {ConcertData.map((Concert:any)=>(
    <div className="">
        <img src={Concert.place} alt="this goods" width="250" className="rounded-2xl hover:shadow-2xs" />
    </div>
    ))}
</div>
);

}