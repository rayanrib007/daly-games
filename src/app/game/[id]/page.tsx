import CTNGameDetails from "@/containers/game/CTNGameDetails";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";
import { redirect } from "next/navigation";

async function getGameData(id: string) {
  try {
    const data = await fetch(
      `${process.env.NEXT_API_URL}/next-api?api=game&id=${id}`
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
  const gameData: IGamesDataProtocol = await getGameData(id);

  if (!gameData) redirect("/");

  return <CTNGameDetails gameData={gameData} />;
}
