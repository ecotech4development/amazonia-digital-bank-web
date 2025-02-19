import { Button } from "../ui/button";

export default function Partner() {
  return (
    <section>
      <div className="flex flex-col items-center gap-y-10 p-12">
        <div className="text-center">
          <h3 className="text-base font-bold text-secondaryColor py-4">
            CONHEÇA OS NOSSOS
          </h3>
          <h1 className="font-semibold text-5xl">Parceiros</h1>
        </div>
        <div className="flex gap-x-8">
          <div className="bg-gray-100 rounded-lg w-[280px] h-[164px] flex items-center justify-center">
            <div className="w-[200px] h-[100px] flex items-center justify-center">
              <a href="">
                <img
                  src="https://quickdigitalbank.com.br/wp-content/uploads/2024/07/logo-parceiros.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[280px] h-[164px] flex items-center justify-center">
            <div className="w-[200px] h-[100px] flex items-center justify-center">
              <a href="">
                <img
                  src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/tecban.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[280px] h-[164px] flex items-center justify-center">
            <div className="w-[200px] h-[100px] flex items-center justify-center">
              <a href="">
                <img
                  src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/atmosfera.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[280px] h-[164px] flex items-center justify-center">
            <div className="w-[200px] h-[100px] flex items-center justify-center">
              <a href="">
                <img
                  src="https://quickdigitalbank.com.br/wp-content/uploads/2024/08/founder-institute.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <Button
            variant="default"
            className="py-3 px-5 bg-primaryColor hover:bg-hoverColor rounded-lg h-auto font-medium text-lg"
          >
            Quero ser um parceiro
          </Button>
        </div>
      </div>
    </section>
  );
}
