import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { HiOutlineLockClosed } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="">
        <header className="fixed z-50 bg-white w-full top-0 left-0 h-auto py-5 px-72">
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

        <div className="relative pt-16 px-72">
          {/* Background */}
          <div className="absolute inset-0 bg-[#2F0B04]"></div>

          {/* Content container */}
          <div className="relative flex flex-row  py-12">
            <div className="w-1/2 flex justify-center flex-col">
              <h1 className="font-bold text-white text-5xl mb-4 break-words">
                Simplificando a tecnologia financeira para o pequeno e médio
                negócio
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
        <div className="min-w-full pt-10 pb-14 flex flex-nowrap px-72">
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
        <div className="relative px-72 pb-7">
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
      </div>
    </>
  );
}
