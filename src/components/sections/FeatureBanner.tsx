import Image from "next/image";

export default function FeatureBanner() {
  return (
    <section>
      <div className="relative px-64 pb-7">
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
          <Image
            src="/amazonia.jpg"
            alt=""
            fill
            className="object-cover"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
        <div className="absolute inset-y-0 left-72 right-1/2 flex items-center">
          <div className="p-12">
            <h1 className="text-white text-4xl font-bold">
              Simplificamos em uma nova tecnologia um produto que traz receita e
              não custos e despesas.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
