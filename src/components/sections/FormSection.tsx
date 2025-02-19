import { PiMailboxLight } from "react-icons/pi";
import { Button } from "../ui/button";

export default function FormSection() {
  return (
    <section className="px-64 py-20 flex items-start text-white bg-bannerBackgroundColor">
      <div className="flex flex-col w-1/3">
        <PiMailboxLight className="w-14 h-14" />
        <p className="py-5">
          Seu novo parceiro de negócios que fala a sua língua
        </p>
        <h1 className="text-3xl font-bold pb-10">
          Fique por dentro de tudo que acontece na Amazônia Digital Bank
        </h1>
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            id="name"
            placeholder="Seu nome"
            className="py-5 pl-2 rounded-sm bg-gray-800 bg-opacity-50 text-white placeholder-white focus:outline-blue-600 focus:border-none text-sm"
          />
          <input
            type="text"
            id="email"
            placeholder="Insira seu melhor email"
            className="py-5 pl-2 rounded-sm bg-gray-800 bg-opacity-50 text-white placeholder-white focus:outline-blue-600 focus:border-none text-sm"
          />
          <Button className="py-3 w-[45%] px-5 bg-primaryColor hover:bg-hoverColor rounded-lg h-auto font-medium text-lg">
            Quero me inscrever
          </Button>
        </form>
      </div>
    </section>
  );
}
