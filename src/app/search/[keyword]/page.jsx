import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=79f1d2c8e3e13651e9d43c6ab93bbaf7&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  return (
    <div>
      {!data.results ? (
        <div>Arama yok</div>
      ) : (
        <div className="flex items-center flex-wrap gap-4 justify-center">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
