//imports
import { DetailsListProps } from "../utils/types";

function DetailsList({
  itemsArray,
  colors: { listBorder, anchorBackground, anchorBorder, text },
}: DetailsListProps) {
  return (
    <ul className="h-full w-full flex flex-col justify-safe-center items-safe-center gap-2">
      {itemsArray.map((item, i) => (
        <li
          key={i}
          className={`w-11/12 border-b-2 ${listBorder} flex flex-col justify-safe-center items-safe-center ${text}`}
        >
          <span className="capitalize">{item.key}</span>
          {item.link ? (
            <a
              href={item.value}
              target="blank"
              className={`border-4 rounded-sm ${anchorBorder} ${anchorBackground} text-black font-black tracking-wide shadow-md`}
            >
              Click Here to Visit the Source
            </a>
          ) : (
            <span className="capitalize text-xl font-black tracking-wide leading-relaxed">
              {item.value}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DetailsList;
