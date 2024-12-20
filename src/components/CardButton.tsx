//imports
import {
  DEF_CARD_BUTTON_CONTAINER_STYLES,
  DEF_CARD_BUTTON_STYLES,
} from "../utils/constants";
import { CardButtonProps } from "../utils/types";

function CardButton({ feature, onClick, position }: CardButtonProps) {
  /*ALL SVGS ARE CREATED USING CHATGPT, NONE OF THE SHAPES BELONG TO ME*/

  /*ABSOLUTE POSITIONING */

  if (feature === "personal")
    return (
      <div
        className={`absolute ${DEF_CARD_BUTTON_CONTAINER_STYLES}`}
        onClick={onClick}
        style={{
          bottom: position.bottom,
          left: position.left,
          transform: position.transform,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="h-32 w-32 hover:cursor-pointer hover:bg-white/20 rounded-full hover:border-2 border-white/40"
        >
          <circle cx="50" cy="50" r="20" className="fill-yellow-500" />

          <g className="stroke-yellow-400 stroke-[3px]">
            <line x1="50" y1="0" x2="50" y2="20" />
            <line x1="50" y1="80" x2="50" y2="100" />
            <line x1="0" y1="50" x2="20" y2="50" />
            <line x1="80" y1="50" x2="100" y2="50" />
            <line x1="15" y1="15" x2="30" y2="30" />
            <line x1="70" y1="70" x2="85" y2="85" />
            <line x1="15" y1="85" x2="30" y2="70" />
            <line x1="70" y1="30" x2="85" y2="15" />
          </g>
        </svg>
        <p className="absolute -bottom-9 min-w-fit text-nowrap text-lg font-semibold select-none mb-3">
          Personal Details
        </p>
      </div>
    );

  if (feature === "education")
    return (
      <div
        className={`absolute ${DEF_CARD_BUTTON_CONTAINER_STYLES} ${position.transform} hover:bg-black/20 hover:border-2 border-black/40`}
        onClick={onClick}
        style={{
          bottom: position.bottom,
          left: position.left,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className={`${DEF_CARD_BUTTON_STYLES}`}
        >
          <circle cx="50" cy="50" r="10" className="fill-yellow-400" />

          <path
            d="M50 20 Q55 35 50 50 Q45 35 50 20"
            className="fill-pink-400"
          />
          <path
            d="M50 80 Q55 65 50 50 Q45 65 50 80"
            className="fill-orange-300"
          />
          <path
            d="M20 50 Q35 45 50 50 Q35 55 20 50"
            className="fill-purple-300"
          />
          <path
            d="M80 50 Q65 45 50 50 Q65 55 80 50"
            className="fill-blue-300"
          />
        </svg>
      </div>
    );

  if (feature === "experience")
    return (
      <div
        className={`absolute ${DEF_CARD_BUTTON_CONTAINER_STYLES} ${position.transform} hover:bg-black/20 hover:border-2 hover:border-black/40`}
        onClick={onClick}
        style={{
          bottom: position.bottom,
          left: position.left,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className={`${DEF_CARD_BUTTON_STYLES}`}
        >
          <circle cx="50" cy="30" r="10" className="fill-pink-400" />
          <circle cx="70" cy="50" r="10" className="fill-pink-400" />
          <circle cx="50" cy="70" r="10" className="fill-pink-400" />
          <circle cx="30" cy="50" r="10" className="fill-pink-400" />
          <circle cx="50" cy="50" r="8" className="fill-yellow-400" />
        </svg>
      </div>
    );

  if (feature === "professional")
    return (
      <div
        className={`absolute ${DEF_CARD_BUTTON_CONTAINER_STYLES} ${position.transform}`}
        onClick={onClick}
        style={{
          bottom: position.bottom,
          left: position.left,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 80"
          className={`${DEF_CARD_BUTTON_STYLES}`}
        >
          <circle cx="40" cy="30" r="15" className="fill-gray-200" />
          <circle cx="60" cy="30" r="20" className="fill-gray-300" />
          <circle cx="80" cy="30" r="15" className="fill-gray-200" />

          <path
            d="M50 50 Q55 60 50 70 Q45 60 50 50"
            className="fill-blue-300"
          />
          <path
            d="M70 50 Q75 60 70 70 Q65 60 70 50"
            className="fill-blue-300"
          />
        </svg>
      </div>
    );
}

export default CardButton;
