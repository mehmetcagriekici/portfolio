//imports
import { CardListProps } from "../utils/types";

function CardList({ itemsArray }: CardListProps) {
  return (
    <ul className="w-full h-full flex flex-col justify-center items-center bg-amber-400/70 rounded-xl font-orb tracking-widest p-1 gap-2">
      {itemsArray.map((item, i) => (
        <li
          key={i}
          className="text-md tracking-widest w-full md:text-base lg:text-xl"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CardList;
