"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/moviesCard";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/api/favorite")
      .then((res) => res.json())
      .then((data) => setFavorites(Array.isArray(data) ? data : []));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/favorite", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const updatedFavorites = await res.json();
      setFavorites(Array.isArray(updatedFavorites) ? updatedFavorites : []);
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  if (!favorites || favorites.length === 0)
    return <p className="text-white p-5">No favorites yet!</p>;

  return (
    <div className="w-full bg-black/55 rounded-tr-3xl rounded-br-3xl p-5">
      <div className="grid grid-cols-4 gap-5">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavoritePage={true}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
