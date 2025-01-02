/*This component is built with Material UI
https://mui.com/
 */

//imports
import { IconContainerProps, Rating } from "@mui/material";
import { StarRatingProps } from "../utils/types";
import NetworkWifi1BarOutlinedIcon from "@mui/icons-material/NetworkWifi1BarOutlined";
import NetworkWifi2BarOutlinedIcon from "@mui/icons-material/NetworkWifi2BarOutlined";
import NetworkWifi3BarOutlinedIcon from "@mui/icons-material/NetworkWifi3BarOutlined";
import NetworkWifiOutlinedIcon from "@mui/icons-material/NetworkWifiOutlined";
import SignalWifi4BarOutlinedIcon from "@mui/icons-material/SignalWifi4BarOutlined";
import SignalWifi0BarOutlinedIcon from "@mui/icons-material/SignalWifi0BarOutlined";

//types
type iconsObj = {
  [index: string]: {
    icon: React.ReactElement<unknown>;
    label: string;
  };
};

//custom icons for rating
const customIcons: iconsObj = {
  default: {
    icon: <SignalWifi0BarOutlinedIcon className="text-stone-300/40" />,
    label: "",
  },
  1: {
    icon: <NetworkWifi1BarOutlinedIcon className="text-red-600" />,
    label: "insecure",
  },
  2: {
    icon: <NetworkWifi2BarOutlinedIcon className="text-orange-500" />,
    label: "uncondifent",
  },
  3: {
    icon: <NetworkWifi3BarOutlinedIcon className="text-yellow-500" />,
    label: "Neutral",
  },
  4: {
    icon: <NetworkWifiOutlinedIcon className="text-green-500" />,
    label: "confident",
  },
  5: {
    icon: <SignalWifi4BarOutlinedIcon className="text-blue-500" />,
    label: "Self Assured",
  },
};

function StarRating({ skill }: StarRatingProps) {
  //to use the custom icons
  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;

    //target
    if (value === skill.rating)
      return <span {...other}>{customIcons[value].icon}</span>;

    //default
    return <span {...other}>{customIcons["default"].icon}</span>;
  }

  return (
    <div className="flex w-full overflow-hidden justify-safe-center items-safe-center gap-3">
      <span className="text-indigo-100 tracking-wide">{skill.skill}:</span>
      <div className="">
        <Rating
          name="skills-pre-rating"
          value={skill.rating}
          max={5}
          size="small"
          highlightSelectedOnly
          readOnly
          IconContainerComponent={IconContainer}
          getLabelText={(value: number) => customIcons[value].label}
        />
      </div>
    </div>
  );
}

export default StarRating;
