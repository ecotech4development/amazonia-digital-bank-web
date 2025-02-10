import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="pt-3 ">
        <header className="min-w-full h-auto py-5 px-72">
          <div className="flex flex-row justify-between">
            <div className="flex items-center text-2xl">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/07/quick-digital-logo.svg"
                alt=""
              />
            </div>
            <div className="flex gap-8 justify-center items-center text-xl">
              <nav className="flex gap-8">
                <a href="">Inicio</a>
                <a href="">Quem somos</a>
                <a href="">Soluções</a>
                <a href="">Contato</a>
              </nav>
              <Button className="text-xl p-6">Login</Button>
            </div>
          </div>
        </header>

        <div className="relative px-72">
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
          <div className="w-full flex justify-center text-5xl font-bold">
            <h1>Chega de pagar para ter meios de pagamentos</h1>
          </div>
          <div className="w-full flex flex-col justify-center gap-y-3 text-lg">
            <p className="break-words">
              Somos a Quick Digital, empresa que conhece o seu cliente no dia a
              dia, entende todas as dores dos empresários, pequenas e médias
              empresas do Brasil.
            </p>
            <a href="">—— Saiba mais</a>
          </div>
        </div>
        <div className="relative px-72">
          <img
            src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/banner-sobre-quick-digital.svg"
            alt=""
            className="w-full h-[350px] rounded-xl object-cover"
          />
          <div className="absolute inset-y-0 left-0 w-1/2 flex items-center">
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
