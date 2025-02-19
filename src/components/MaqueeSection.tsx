import { Marquee } from "@/components/magicui/marquee";

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

export default function MarqueeSection() {
  return (
    <Marquee className="py-6">
      <div className="flex h-auto items-center">
        {reviews.map((review) => (
          <img key={review.id} src={review.img} alt="" className="p-4 h-16" />
        ))}
      </div>
    </Marquee>
  );
}
