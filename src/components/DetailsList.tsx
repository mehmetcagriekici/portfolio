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
    <ul className="h-full w-4/5 flex flex-col justify-safe-center items-safe-center gap-2 md:text-xl lg:text-2xl">
      {itemsArray.map((item, i) => (
        <li
          key={i}
          className={`w-full flex flex-col justify-safe-center items-safe-center gap-2 p-2 shadow-sm`}
        >
          {item.link && item.value ? (
            <span className="flex gap-2 justify-center items-center">
              {icons[item.key].icon}
              <a
                href={item.value}
                target="blank"
                className={`text-indigo-50 font-black tracking-wider capitalize`}
              >
                click here to visit {item.key}
              </a>
            </span>
          ) : (
            <span className="capitalize font-black tracking-wide text-indigo-100 flex justify-center items-center gap-2">
              <span className="hidden md:flex">{item.key}</span>
              {item.value}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DetailsList;
