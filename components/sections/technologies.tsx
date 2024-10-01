import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { technos } from "@/constants";
import Image from "next/image";


const firstRow = technos.slice(0, technos.length / 2);
const secondRow = technos.slice(technos.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-36 cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image width="40" height="40" alt={name} src={img} />
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

const Technologies = () => {
  return (
    <section className="py-20 relative z-50">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </section>
  );
}

export default Technologies;
