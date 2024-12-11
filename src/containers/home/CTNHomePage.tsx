import { CContainerMainAfterMenu } from "@/components/general/CContainerMainAfterMenu";
import { IGamesDataProtocol } from "@/utils/interfaces/IGames";
import Image from "next/image";
import Link from "next/link";

export default function CTNHomePage({
  dalyGamesData,
}: {
  dalyGamesData: IGamesDataProtocol;
}) {
  return (
    <main className="w-full">
      <CContainerMainAfterMenu>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dalyGamesData.id}`}>
          <section className="w-full bg-black rounded-lg">
            <Image
              src={dalyGamesData.image_url}
              alt={dalyGamesData.title}
              priority
              quality={100}
              width={100}
              height={100}
            />
          </section>
        </Link>
      </CContainerMainAfterMenu>
    </main>
  );
}
