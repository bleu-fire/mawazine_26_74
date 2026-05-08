import type { ArtiatType } from "../data/artists";
type Props = {
  buttonName?: string;
  setRemove?: (id?: number) => void;
  artistObj?: ArtiatType;
};

export const Artistcrad = ({ buttonName, setRemove, artistObj }: Props) => {
  return (
    //this for the ArtistObj card to expand  in programm >_ adhd
    <div className="flex flex-col items-center">
      <div
        className="bg-amber-500 gap-6 m-10 flex items-center justify-center h-90  rounded-3xl"
        key={artistObj?.id}
      >
        <img
          className="rounded-3xl h-45 ml-2"
          src={artistObj?.img}
          alt={artistObj?.name}
        />

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="rounded-2xl bg-amber-700 px-4 py-2">
            {artistObj?.name}
          </h1>

          <h1 className="rounded-3xl bg-amber-950 p-4 mr-2 text-white">
            {artistObj?.about}
          </h1>
          <h1>{artistObj?.time}</h1>
        </div>
        <div className="flex  m-10 bg-amber-800 p-2 justify-center rounded-2xl">
          <button onClick={() => setRemove?setRemove(artistObj?.id):undefined}>{buttonName}</button>
        </div>
      </div>
    </div>
  );
};

export default Artistcrad;
