import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative pt-16 px-64">
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
            Com a Amazônia Digital Bank o empreendedor raiz terá descomplicação
            no dia a dia de forma eficaz e sustentável de ponta a ponta.
          </p>
          <Button className="w-1/3 p-7 bg-transparent border border-white text-lg font-bold hover:bg-white hover:text-primaryColor hover:border-primaryColor">
            Quero descomplicar
          </Button>
        </div>
        {/* Right side */}
        <div className="relative w-1/2 flex justify-center">
          {/* <img
                        src=""
                        alt=""
                        className="w-[500px]"
                      /> */}
          <Image
            src="/ad.jpeg"
            alt=""
            width={400}
            height={100}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
