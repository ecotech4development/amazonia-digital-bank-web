import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section>
      <div className="relative pt-16 px-64">
        {/* Background */}
        <div className="absolute inset-0 bg-bannerBackgroundColor"></div>

        {/* Content container */}
        <div className="relative flex flex-row pt-20 py-12">
          <div className="w-1/2 flex justify-center flex-col">
            <h1 className="font-semibold text-white text-[42px] leading-[44px] mb-4 w-4/5 break-words">
              Simplificando a tecnologia financeira para o{" "}
              <span className="underline decoration-primaryColor">
                pequeno e médio negócio
              </span>
            </h1>
            <p className="text-white mb-6">
              Com a Amazônia Digital Bank o empreendedor raiz terá
              descomplicação no dia a dia de forma eficaz e sustentável de ponta
              a ponta.
            </p>
            <Button className="w-1/3 p-7 bg-transparent border border-white text-lg font-bold hover:bg-white hover:text-primaryColor hover:border-primaryColor">
              Quero descomplicar
            </Button>
          </div>
          {/* Right side */}
          <div className="relative w-1/2 flex justify-center">
            <Image
              src="/ad.jpeg"
              alt=""
              width={400}
              height={100}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="min-w-full pt-10 pb-14 flex flex-nowrap px-64">
        <div className="w-full flex justify-center text-5xl font-bold text-primaryColor">
          <h1>Chega de pagar para ter meios de pagamentos</h1>
        </div>
        <div className="w-full flex flex-col justify-center gap-y-3 text-lg">
          <p className="break-words text-gray-500 text-xl">
            Somos a Amazônia Digital Bank, empresa que conhece o seu cliente no
            dia a dia, entende todas as dores dos empresários, pequenas e médias
            empresas do Brasil.
          </p>
          <a href="" className="text-primaryColor font-bold">
            —— Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
