"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[450px] relative imgcontainer cursor-pointer"
    >
      <Image
        style={{ ObjectFit: "cover" }}
        width={450}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        alt="img"
      />
      <div className="absolute bottom-1 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-semibold text-amber-600">{dt?.title}</div>
        <div className="text-white">
          {dt?.release_date} - {dt?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
