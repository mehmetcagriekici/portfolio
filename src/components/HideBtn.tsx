import { HideBtnProps } from "../utils/types";

export default function HideBtn({ onClick, children }: HideBtnProps) {
  return (
    <button
      onClick={onClick}
      className="font-orb capitalize tracking-widest text-base bg-gray-300 rounded-full p-3 border-2 border-black hover:cursor-pointer hover:bg-gray-200 md:border-4 md:text-2xl lg:text-4xl lg:p-5 xl:text-xl xl:p-3"
    >
      {children}
    </button>
  );
}
