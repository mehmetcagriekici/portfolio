import { CardListProps } from "../utils/types";

function CardList({ itemsArray, styles: { ul, li } }: CardListProps) {
  return (
    <ul className={ul}>
      {itemsArray.map((item, i) => (
        <li key={i} className={li}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CardList;
