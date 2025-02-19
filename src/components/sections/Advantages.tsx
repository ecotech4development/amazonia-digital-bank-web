import { DollarSign, Infinity, TrendingDown, WalletCards } from "lucide-react";
import { Button } from "../ui/button";

export default function Advantages() {
  return (
    <section>
      <div className="px-64 flex py-20">
        <div className="w-1/3 flex flex-col justify-center">
          <p className="font-bold text-secondaryColor pb-2">
            ENTENDA AS NOSSAS
          </p>
          <h1 className="text-5xl font-semibold py-2">Vantagens Exclusivas</h1>
          <p className="text-gray-600 py-5">
            Na Amazônia Digital Bank o que não falta são vantagens para nossos
            clientes e parceiros, confira algumas e descomplique a vida
            financeira do seu negócio
          </p>
          <Button className="gap-2 py-3 px-4 bg-primaryColor hover:bg-hoverColor rounded-lg h-auto font-medium text-lg w-1/2">
            Quero descomplicar
          </Button>
        </div>
        <div className="grid grid-cols-2 w-2/3 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
          <div className="border-r border-b flex flex-col items-start justify-center p-12 w-full h-52">
            <div className="pb-4">
              <TrendingDown size={30} className="text-primaryColor" />
            </div>
            <h3 className="font-bold text-lg">
              Redução de até 9x no seu custo
            </h3>
            <p className="text-xs">Tudo em um só equipamento.</p>
          </div>
          <div className="border-b flex flex-col items-start justify-center p-12 w-full h-52">
            <div className="pb-4">
              <WalletCards size={30} className="text-primaryColor" />{" "}
              {/* trocar icone */}
            </div>
            <h3 className="font-bold text-lg">Meios de pagamento</h3>
            <p className="text-xs">Operando com todos os meios digitais.</p>
          </div>
          <div className="border-r flex flex-col items-start justify-center p-12 w-full h-52">
            <div className="pb-4">
              <Infinity size={30} className="text-primaryColor" />{" "}
              {/* trocar icone */}
            </div>
            <h3 className="font-bold text-lg">Nota Fiscal ilimitado</h3>
            <p className="text-xs">Pacotes com NF-e, NFS-e e NFC-e.</p>
          </div>
          <div className=" flex flex-col items-start justify-center p-12 pr-0 w-full h-52">
            <div className="pb-4">
              <DollarSign size={30} className="text-primaryColor" />{" "}
              {/* trocar icone */}
            </div>
            <h3 className="font-bold text-lg">Ganhos Reais</h3>
            <p className="text-xs">
              Excelente remuneração na sua conta bancária digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
