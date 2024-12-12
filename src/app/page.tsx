import CTNHomePage from "@/containers/home/CTNHomePage";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";

async function getDalyGames() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data daly-games");
  }
}

export default async function PHome() {
  const dalyGamesData: IGamesDataProtocol = await getDalyGames();

  return <CTNHomePage dalyGamesData={dalyGamesData} />;
}
