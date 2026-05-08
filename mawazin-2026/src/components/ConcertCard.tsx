import { ConcertData} from "../data/ConcertData";
export const ConcertCard =()=>{
return(


<div>
    {ConcertData.map((Concert:any)=>(
    <div>
        <img src={Concert.Place} alt="this goods" />
    </div>
    ))}
</div>
);

}