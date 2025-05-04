import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=79f1d2c8e3e13651e9d43c6ab93bbaf7`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const movieDetail = await getMovie(params.id);

  return (
    <div className="relative min-h-screen text-white mt-8">
      {/* Background */}
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        alt="Movie Background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-extrabold mb-2">{movieDetail?.title}</h1>
        {movieDetail?.tagline && (
          <p className="italic text-gray-400 text-lg mb-4">
            "{movieDetail.tagline}"
          </p>
        )}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Poster */}
          <div className="w-full lg:w-1/3 relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
              alt="Poster"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Info */}
          <div className="lg:w-2/3">
            <p className="text-lg mb-6">{movieDetail?.overview}</p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong>Release:</strong> {movieDetail?.release_date}
              </div>
              <div>
                <strong>Rating:</strong> ⭐ {movieDetail?.vote_average} (
                {movieDetail?.vote_count} votes)
              </div>
              <div>
                <strong>Runtime:</strong> {movieDetail?.runtime} min
              </div>
              <div>
                <strong>Original Language:</strong>{" "}
                {movieDetail?.original_language.toUpperCase()}
              </div>
              <div>
                <strong>Budget:</strong> ${movieDetail?.budget.toLocaleString()}
              </div>
              <div>
                <strong>Revenue:</strong> $
                {movieDetail?.revenue.toLocaleString()}
              </div>
              <div className="col-span-2">
                <strong>Genres:</strong>{" "}
                {movieDetail?.genres?.map((g) => g.name).join(", ")}
              </div>
              <div className="col-span-2">
                <strong>Production Countries:</strong>{" "}
                {movieDetail?.production_countries
                  ?.map((c) => c.name)
                  .join(", ")}
              </div>
              <div className="col-span-2">
                <strong>Production Companies:</strong>{" "}
                {movieDetail?.production_companies
                  ?.map((c) => c.name)
                  .join(", ")}
              </div>
              <div className="col-span-2">
                <strong>IMDb:</strong>{" "}
                <a
                  href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  {movieDetail.imdb_id}
                </a>
              </div>
            </div>

            <button className="mt-8 bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
