export default function Media() {
  return (
    <section>
      <div className="flex flex-col items-center pt-12 pb-16 bg-thirdColor h-auto">
        <h4 className="text-secondaryColor font-bold pb-3">
          VEJAM O QUE DIZEM DA
        </h4>
        <h1 className="text-5xl font-semibold pb-10">
          Amazônia Digital Bank na mídia
        </h1>
        <div className="flex w-full px-[12%] gap-6 h-full">
          <div className="w-1/3 h-60">
            <img
              src="https://quickdigitalbank.com.br/wp-content/uploads/2024/07/swiper-na-midia.png"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <h3 className="text-primaryColor font-bold text-lg py-3">
              Startups.com.br
            </h3>
            <p className="font-bold text-lg pb-2">
              TecBan quer cocriar 30 negócios em escala com startups até 2027
            </p>
            <a href="" className="text-gray-600">
              Ler mais
            </a>
          </div>
          <div className="w-1/3">
            <div className="max-w-full h-60">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/cnn-brasil.png"
                alt=""
                className="rounded-xl w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-primaryColor font-bold text-lg py-3">
                CNN Business
              </h3>
              <p className="font-bold text-lg pb-2">
                10 Dicas importantes para fugir do juros do cartão de crédito
              </p>
              <a href="" className="text-gray-600 py-3">
                Ler mais
              </a>
            </div>
          </div>
          <div className="w-1/3">
            <div className="max-w-full h-60">
              <img
                src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/jovem-pan.png"
                alt=""
                className="rounded-xl h-full w-full"
              />
            </div>
            <div>
              <h3 className="text-primaryColor font-bold text-lg py-3">
                Jovem pan
              </h3>
              <p className="font-bold text-lg pb-2">
                Saiba quais são as vantagens dos bancos digitais para o
                consumidor
              </p>
              <a href="" className="text-gray-600">
                Ler mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
