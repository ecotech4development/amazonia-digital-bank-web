import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import {
  ChevronDown,
  DollarSign,
  Infinity,
  TrendingDown,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { HiOutlineLockClosed } from "react-icons/hi2";

export default function Home() {
  const reviews = [
    {
      id: 1,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/boleto.png",
    },
    {
      id: 2,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/netflix.png",
    },
    {
      id: 3,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/pix.png",
    },
    {
      id: 4,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/primer-video.png",
    },
    {
      id: 5,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/sky.png",
    },
    {
      id: 6,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/vivo.png",
    },
    {
      id: 7,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/sportify.png",
    },
    {
      id: 8,
      img: "https://quickdigitalbank.com.br/wp-content/uploads/2024/08/tim.png",
    },
  ];
  return (
    <>
      <div className="">
        <header className="fixed z-50 bg-white w-full top-0 left-0 h-auto py-5 px-64">
          <div className="flex flex-row justify-between">
            <div className="flex items-center text-2xl">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/07/quick-digital-logo.svg"
                alt=""
              />
            </div>
            <div className="flex gap-8 justify-center items-center text-xl font-medium text-gray-600">
              <nav className="w-full px-4 py-2 text-lg">
                <NavigationMenu className="max-w-screen-xl mx-auto">
                  <NavigationMenuList className="flex items-center gap-6">
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <a href="" className="pl-3 hover:text-primaryColor">
                          Inicio
                        </a>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/quem-somos" legacyBehavior passHref>
                        <a href="" className="pl-3 hover:text-primaryColor">
                          Quem somos
                        </a>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <a
                          href=""
                          className="pl-3 hover:text-primaryColor flex gap-1"
                        >
                          Soluções
                          <div className="flex items-end">
                            <ChevronDown className="w-4" />
                          </div>
                        </a>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute z-10">
                        <ul className=" w-auto p-4 bg-white">
                          <li className="pt-6">
                            <Link href="/component-1" legacyBehavior passHref>
                              <a
                                href=""
                                className="pl-1 hover:text-primaryColor"
                              >
                                Sou logista
                              </a>
                            </Link>
                          </li>
                          <li className="pt-6">
                            <Link href="/component-1" legacyBehavior passHref>
                              <a
                                href=""
                                className="pl-1 hover:text-primaryColor"
                              >
                                Sou revendedor
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/quem-somos" legacyBehavior passHref>
                        <a href="" className="pl-3 hover:text-primaryColor">
                          Contato
                        </a>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
              <Button
                variant="default"
                className="gap-2 py-3 px-4 bg-primaryColor hover:bg-[#9D321E] rounded-lg h-auto font-medium text-lg"
              >
                <HiOutlineLockClosed className="!w-6 !h-6 " />
                Login
              </Button>
            </div>
          </div>
        </header>

        <div className="relative pt-16 px-64">
          {/* Background */}
          <div className="absolute inset-0 bg-[#2F0B04]"></div>

          {/* Content container */}
          <div className="relative flex flex-row  py-12">
            <div className="w-1/2 flex justify-center flex-col">
              <h1 className="font-semibold text-white text-[42px] leading-[44px] mb-4 w-4/5 break-words">
                Simplificando a tecnologia financeira para o{" "}
                <span className="underline decoration-primaryColor">
                  pequeno e médio negócio
                </span>
              </h1>
              <p className="text-white mb-6">
                Com a Quick Digital o empreendedor raiz terá descomplicação no
                dia a dia de forma eficaz e sustentável de ponta a ponta.
              </p>
              <Button className="w-1/3 p-7 bg-transparent border border-white text-lg font-bold hover:bg-white hover:text-primaryColor hover:border-primaryColor">
                Quero descomplicar
              </Button>
            </div>
            {/* Right side */}
            <div className="relative w-1/2 flex justify-center">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/quick-digital-banner.webp"
                alt=""
                className="w-[500px]"
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
              Somos a Quick Digital, empresa que conhece o seu cliente no dia a
              dia, entende todas as dores dos empresários, pequenas e médias
              empresas do Brasil.
            </p>
            <a href="" className="text-primaryColor font-bold">
              —— Saiba mais
            </a>
          </div>
        </div>
        <div className="relative px-64 pb-7">
          <img
            src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/banner-sobre-quick-digital.svg"
            alt=""
            className="w-full h-[350px] rounded-2xl object-cover"
          />
          <div className="absolute inset-y-0 left-72 right-1/2 flex items-center">
            <div className="p-12">
              <h1 className="text-white text-4xl font-bold">
                Simplificamos em uma nova tecnologia um produto que traz receita
                e não custos e despesas.
              </h1>
            </div>
          </div>
        </div>

        <Marquee className="py-6">
          <div className="flex h-auto items-center">
            {reviews.map((review) => (
              <img
                key={review.id}
                src={review.img}
                alt=""
                className="p-4 h-16"
              />
            ))}
          </div>
        </Marquee>

        <div className="px-64 flex py-20">
          <div className="w-1/3 flex flex-col justify-center">
            <p className="font-bold text-secondaryColor pb-2">
              ENTENDA AS NOSSAS
            </p>
            <h1 className="text-5xl font-semibold py-2">
              Vantagens Exclusivas
            </h1>
            <p className="text-gray-600 py-5">
              Na Quick Digital o que não falta são vantagens para nossos
              clientes e parceiros, confira algumas e descomplique a vida
              financeira do seu negócio
            </p>
            <Button className="gap-2 py-3 px-4 bg-primaryColor hover:bg-[#9D321E] rounded-lg h-auto font-medium text-lg w-1/2">
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
        <div className="flex flex-col items-center py-12 bg-thirdColor">
          <h4 className="text-secondaryColor font-bold pb-3">
            VEJAM O QUE DIZEM DA
          </h4>
          <h1 className="text-5xl font-semibold pb-10">
            Quick Digital na mídia
          </h1>
          <div className="flex w-full px-64">
            <div className="w-7/12 h-60 px-6">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/07/swiper-na-midia.png"
                alt=""
                className="rounded-xl w-full h-full"
              />
              <h3>Startups.com.br</h3>
              <p>
                TecBan quer cocriar 30 negócios em escala com startups até 2027
              </p>
              <a href="">Ler mais</a>
            </div>
            <div className="w-7/12 h-60 px-6">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/cnn-brasil.png"
                alt=""
                className="rounded-xl w-full h-full"
              />
              <h3>CNN Business</h3>
              <p>
                10 Dicas importantes para fugir do juros do cartão de crédito
              </p>
              <a href="">Ler mais</a>
            </div>
            <div className="w-7/12 h-60 px-6">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/jovem-pan.png"
                alt=""
                className="rounded-xl w-full h-full"
              />
              <h3>Jovem pan</h3>
              <p>
                Saiba quais são as vantagens dos bancos digitais para o
                consumidor
              </p>
              <a href="">Ler mais</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
