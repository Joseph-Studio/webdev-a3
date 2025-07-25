import prisma from "../../../lib/prisma";

export async function GET() {
  const movies = await prisma.movie.findMany();
  return new Response(JSON.stringify(movies), { status: 200 });
}

export async function POST(request) {
  const { title, actors, releaseYear } = await request.json();
  const movie = await prisma.movie.create({
    data: {
      title,
      actors, // array of strings
      releaseYear: Number(releaseYear),
    },
  });
  return new Response(JSON.stringify(movie), { status: 201 });
}

export async function PUT(request) {
  const { id, title, actors, releaseYear } = await request.json();
  const movie = await prisma.movie.update({
    where: { id },
    data: {
      title,
      actors,
      releaseYear: Number(releaseYear),
    },
  });
  return new Response(JSON.stringify(movie), { status: 200 });
}

export async function DELETE(request) {
  const { id } = await request.json();
  await prisma.movie.delete({
    where: { id },
  });
  return new Response(null, { status: 204 });
}
