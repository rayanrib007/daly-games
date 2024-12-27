import CTNGameDetails from "@/containers/game/CTNGameDetails";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = (await params).id;
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .catch(() => {
        return {
          title: "DalyGames - Descubra jogos incríveis para se divertir",
        };
      });
    return {
      title: response.title,
      description: `${response.description.slice(0, 150)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "DalyGames - Descubra jogos incríveis para se divertir",
    };
  }
}

async function getGameData(id: string) {
  try {
    const data = await fetch(
      `${process.env.NEXT_API_URL}/next-api?api=game&id=${id}`,
      { cache: "no-store" }
    );
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

async function getGameSorted() {
  try {
    const data = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function PGames({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const [gameData, gameSorted] = await Promise.all([
    getGameData(id),
    getGameSorted(),
  ]);

  if (!gameData) redirect("/");

  return <CTNGameDetails gameData={gameData} gameSorted={gameSorted} />;
}
