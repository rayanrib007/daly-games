import { CContainerMainAfterMenu } from "@/components/general/CContainerMainAfterMenu";
import CGameCard from "@/components/general/CGameCard";
import { CLabelTitleAndDescription } from "@/components/uiLib/labels/CLabelTitleAndDescription";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";
import Image from "next/image";

export default function CTNGameDetails({
  gameData,
  gameSorted,
}: {
  gameData: IGamesDataProtocol;
  gameSorted: IGamesDataProtocol;
}) {
  console.log(gameData);
  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-75"
          src={gameData.image_url}
          alt={gameData.title}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>
      <CContainerMainAfterMenu>
        <h1 className="font-bold text-xl my-4">{gameData.title}</h1>
        <p className="text-justify">{gameData.description}</p>
        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {gameData.platforms.map((platform) => (
            <CLabelTitleAndDescription key={platform} item={platform} />
          ))}
        </div>
        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {gameData.categories.map((category) => (
            <CLabelTitleAndDescription key={category} item={category} />
          ))}
        </div>
        <p className="mt-7 mb-2">
          <strong>Data de lançamento: </strong>
          {gameData.release}
        </p>
        <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado:</h2>
        <div className="flex">
          <div className="flex-grow">
            <CGameCard game={gameSorted} />
          </div>
        </div>
      </CContainerMainAfterMenu>
    </main>
  );
}
