import CTNGameDetails from "@/containers/game/CTNGameDetails";
import { redirect } from "next/navigation";

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
