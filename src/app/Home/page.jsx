import React from "react";

import MovieCard from "../components/moviesCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route.js";
import { redirect } from "next/navigation";
async function getTopRatedMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2QwN2M1ZDI5MzMwMWFmYjcwMjMyNDQ1NWI2MmZhNSIsIm5iZiI6MTc2MjY0MjQ0Ny45MjMsInN1YiI6IjY5MGZjYTBmMDhhNmYxZWY2NjMxYWM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iHbaM6uUPogaiRks5e4jd1ThEJWheX71MsGydgy3rWU",
        accept: "application/json",
      },
    }
  );

  const data = await res.json();

  return data.results || [];
}
export default async function Home({}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/login?callbackUrl=/Home`);
  }

  const movies = await getTopRatedMovies();
  return (
    <div className="  w-full bg-black/55  rounded-tr-3xl  rounded-br-3xl p-5   ">
      <div
        className="grid  grid-cols-4 gap-5
        "
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
