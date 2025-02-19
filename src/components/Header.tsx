import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { HiOutlineLockClosed } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="fixed z-50 bg-white w-full top-0 left-0 h-auto py-5 px-64">
      <div className="flex flex-row justify-between">
        <div className="flex items-center text-2xl">
          <Image src="/logo/ad.png" width={100} height={90} alt="" />
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
                          <a href="" className="pl-1 hover:text-primaryColor">
                            Sou logista
                          </a>
                        </Link>
                      </li>
                      <li className="pt-6">
                        <Link href="/component-1" legacyBehavior passHref>
                          <a href="" className="pl-1 hover:text-primaryColor">
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
            className="gap-2 py-3 px-4 bg-primaryColor hover:bg-hoverColor rounded-lg h-auto font-medium text-lg"
          >
            <HiOutlineLockClosed className="!w-6 !h-6 " />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
