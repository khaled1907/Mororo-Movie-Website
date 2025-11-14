import favoritesData from "@/app/data/favoraite";

export async function GET() {
  return new Response(JSON.stringify(favoritesData), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const movie = await req.json();
  if (!favoritesData.find((f) => f.id === movie.id)) {
    favoritesData.push(movie);
  }
  return new Response(JSON.stringify(favoritesData), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

export async function DELETE(req) {
  const { id } = await req.json();
  const index = favoritesData.findIndex((f) => f.id === id);
  if (index > -1) favoritesData.splice(index, 1);

  return new Response(JSON.stringify(favoritesData), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
