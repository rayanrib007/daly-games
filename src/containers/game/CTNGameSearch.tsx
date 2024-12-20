import { CContainerMainAfterMenu } from "@/components/general/CContainerMainAfterMenu";
import CGameCard from "@/components/general/CGameCard";
import CInputSearchGames from "@/components/uiLib/inputs/CInputSearchGames";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";

export default function CTNGameSearch({
  gamesDataList,
}: {
  gamesDataList: IGamesDataProtocol[];
}) {
  return (
    <main className="w-full text-black">
      <CContainerMainAfterMenu>
        <CInputSearchGames placeholder="Procurando algum jogo?..." />
        {gamesDataList === null ? (
          <h1 className="font-bold text-xl mt-8 mb-5">
            Esse jogo não foi encontrado!...
          </h1>
        ) : (
          <h1 className="font-bold text-xl mt-8 mb-5">
            Veja o que encontramos...
          </h1>
        )}
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gamesDataList?.map((game) => {
            return <CGameCard key={game.id} game={game} />;
          })}
        </section>
      </CContainerMainAfterMenu>
    </main>
  );
}
