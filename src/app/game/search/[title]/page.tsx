import CTNGameSearch from "@/containers/game/CTNGameSearch";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";

async function getData(title: string) {
  try {
    const games = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );
    return games.json();
  } catch (error) {
    return null;
  }
}

export default async function PGameSearch({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const gamesDataList: IGamesDataProtocol[] = await getData(title);

  return <CTNGameSearch gamesDataList={gamesDataList} />;
}