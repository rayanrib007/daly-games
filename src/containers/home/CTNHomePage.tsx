import { CContainerMainAfterMenu } from "@/components/general/CContainerMainAfterMenu";
import CGameCard from "@/components/home/CGameCard";
import CInputSearchGames from "@/components/uiLib/inputs/CInputSearchGames";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

export default function CTNHomePage({
  dalyGamesData,
  gamesList,
}: {
  dalyGamesData: IGamesDataProtocol;
  gamesList: IGamesDataProtocol[];
}) {
  return (
    <main className="w-full">
      <CContainerMainAfterMenu>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dalyGamesData.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white p-3">
                  {dalyGamesData.title}
                </p>
                <BsArrowRightSquare size={24} color="#FFF" />
              </div>
              <Image
                src={dalyGamesData.image_url}
                alt={dalyGamesData.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-80 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
          </section>
        </Link>
        <CInputSearchGames placeholder="Procurando algum jogo?..." />
        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gamesList.map((game) => (
            <CGameCard key={game.id} game={game} />
          ))}
        </section>
      </CContainerMainAfterMenu>
    </main>
  );
}
