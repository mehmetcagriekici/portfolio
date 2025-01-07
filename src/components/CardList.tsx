//imports
import { CardListProps } from "../utils/types";

function CardList({ itemsArray }: CardListProps) {
  return (
    <ul className="w-full h-full flex flex-col justify-center items-center bg-amber-400/70 rounded-xl font-orb tracking-widest p-1 gap-2 md:gap-4 md:rounded-full lg:gap-6 xl:rounded-xl hover:bg-yellow-500 hover:border-4 hover:border-gray-300">
      {itemsArray.map((item, i) => (
        <li
          key={i}
          className="text-md tracking-widest w-full md:text-2xl lg:text-3xl xl:text-xl"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CardList;
