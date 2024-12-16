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

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data daly-games");
  }
}

export default async function PHome() {
  const [dalyGamesData, gamesList]: [IGamesDataProtocol, IGamesDataProtocol[]] =
    await Promise.all([getDalyGames(), getGamesData()]);

  return <CTNHomePage dalyGamesData={dalyGamesData} gamesList={gamesList} />;
}
