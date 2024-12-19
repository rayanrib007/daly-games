import { CContainerMainAfterMenu } from "@/components/general/CContainerMainAfterMenu";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";
import Image from "next/image";

export default function CTNGameDetails({
  gameData,
}: {
  gameData: IGamesDataProtocol;
}) {
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
      </CContainerMainAfterMenu>
    </main>
  );
}
