import Image from "next/image";
import { Button } from "../ui/button";

export default function Newsletter() {
  return (
    <section className="flex flex-row items-center justify-center px-64 pb-20">
      <div className="w-[45%] flex flex-col p-5">
        <h3 className="text-secondaryColor font-bold text-base pb-3">
          AINDA NÃO ESTÁ CONVENCIDO?
        </h3>
        <h1 className="text-5xl font-semibold pb-10">
          A Amazônia Digital Bank é a solução para o seu negócio!
        </h1>
        <Button
          variant="default"
          className="py-3 w-2/5 px-5 bg-primaryColor hover:bg-hoverColor rounded-lg h-auto font-medium text-lg"
        >
          Quero descomplicar
        </Button>
      </div>
      <div className="flex flex-grow p-5 justify-center">
        <div className="w-3/4">
          <Image src="/ad.jpeg" width={450} height={100} alt="" />
        </div>
      </div>
    </section>
  );
}
