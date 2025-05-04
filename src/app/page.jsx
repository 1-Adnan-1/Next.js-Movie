import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=79f1d2c8e3e13651e9d43c6ab93bbaf7&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-4">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
