//imports
import { DetailsListProps } from "../utils/types";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

//icons
const icons: {
  [key: string]: {
    icon: React.ReactElement<unknown>;
    label: string;
  };
} = {
  github: {
    icon: <GitHubIcon className="text-stone-300" />,
    label: "github",
  },
  netlify: {
    icon: <OpenInBrowserIcon className="text-yellow-300" />,
    label: "netlify",
  },
};

function DetailsList({ itemsArray }: DetailsListProps) {
  return (
    <ul className="h-full w-full flex flex-col justify-safe-center items-safe-center gap-2 md:text-xl lg:text-2xl font-pop">
      {itemsArray.map(
        (item, i) =>
          item.value && (
            <li
              key={i}
              className={`w-full flex flex-col justify-safe-center items-safe-center p-2 shadow-sm`}
            >
              {item.link ? (
                <span className="flex gap-2 justify-center items-center">
                  {icons[item.key].icon}
                  <a
                    href={item.value}
                    target="blank"
                    className={`font-black tracking-wider capitalize hover:cursor-pointer hover:underline hover:text-gray-300`}
                  >
                    click here to visit {item.key}
                  </a>
                </span>
              ) : (
                <span className="capitalize font-black tracking-wide flex justify-center items-center gap-2">
                  <span className="hidden md:flex">{item.key}</span>
                  {item.value}
                </span>
              )}
            </li>
          )
      )}
    </ul>
  );
}

export default DetailsList;
