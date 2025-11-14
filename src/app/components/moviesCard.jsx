"use client";
import Image from "next/image";
import { Star } from "lucide-react";

export default function MovieCard({ movie, isFavoritePage, onDelete }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.jpg";

  const addToFavorites = async (e) => {
    e.stopPropagation();
    try {
      const res = await fetch("/api/favorite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      });
      const updatedFavorites = await res.json();
      alert(`${movie.title} added to Favorites!`);
    } catch (err) {
      console.error(err);
      alert("Failed to add to Favorites");
    }
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (onDelete) onDelete(movie.id);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 relative">
      <div className="relative w-full h-[350px]">
        <Image src={imageUrl} alt={movie.title} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black p-3 flex flex-col gap-2">
          <h3 className="text-white text-sm font-semibold">{movie.title}</h3>
          <div className="flex items-center gap-1 text-yellow-400 text-xs">
            <Star size={14} />
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
          <button
            onClick={isFavoritePage ? handleDelete : addToFavorites}
            className="mt-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            {isFavoritePage ? "Delete" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
