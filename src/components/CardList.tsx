//imports
import { CardListProps } from "../utils/types";

function CardList({ itemsArray }: CardListProps) {
  return (
    <ul className=" h-[90%] w-[98%] flex justify-safe-center items-safe-center flex-col gap-2 bg-stone-400/20 shadow rounded-md lg:rounded-xl lg:shadow-lg lg:bg-stone-400/40 lg:border-4 border-stone-800/60 lg:gap-4">
      {itemsArray.map((item, i) => (
        <li
          key={i}
          className="text-black capitalize tracking-widest leading-relaxed text-md text-wrap flex justify-safe-center items-safe-center flex-wrap shrink-0 font-roboto font-bold md:text-xl lg:w-full lg:text-2xl"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CardList;
