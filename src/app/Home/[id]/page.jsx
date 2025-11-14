"use client"; // مهم جداً
import { Star } from "lucide-react";
import Image from "next/image";

import { useSearchParams } from "next/navigation";

export default function Details() {
  const searchParams = useSearchParams();
  const movie = JSON.parse(searchParams.get("movie"));

  // عدد النجوم الكامل (5 نجوم)
  const fullStars = Math.floor(movie.vote_average / 2); // TMDB rating 0-10, نحوله لـ0-5
  const halfStar = movie.vote_average % 2 >= 1; // لو فيه نص نجمة
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="w-full bg-black/55 rounded-tr-3xl rounded-br-3xl p-5">
      <div className="m-5 text-white">
        <h1 className="text-4xl font-extrabold text-white leading-tight">
          {movie.title}
          <br />
          <span className="block mt-2 text-2xl text-gray-300">
            {movie.release_date}
          </span>
        </h1>

        <div className="my-5 flex justify-center">
          <Image
            className="w-full max-w-md object-contain rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
          />
        </div>

        <p className="mt-4 text-slate-200 text-lg">{movie.overview}</p>

        <div className="mt-4 flex items-center gap-2">
          {/* عرض النجوم */}
          {[...Array(fullStars)].map((_, i) => (
            <Star key={"full-" + i} size={20} color="yellow" fill="yellow" />
          ))}
          {halfStar && <Star size={20} color="yellow" />}
          {[...Array(emptyStars)].map((_, i) => (
            <Star key={"empty-" + i} size={20} color="gray" />
          ))}
          <span className="ml-2 text-white">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>

        <div className="w-full flex justify-center">
          <button
            onClick={() =>
              window.open(
                `https://www.youtube.com/results?search_query=${encodeURIComponent(
                  movie.title + " trailer"
                )}`,
                "_blank"
              )
            }
            className="bg-red-700 hover:bg-gray-800 text-white py-2 px-6 rounded-lg mt-5 w-[80%] "
          >
            TRAILER
          </button>
        </div>
      </div>
    </div>
  );
}
