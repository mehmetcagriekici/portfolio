import { HideBtnProps } from "../utils/types";

export default function HideBtn({ onClick, children }: HideBtnProps) {
  return (
    <button
      onClick={onClick}
      className="font-orb capitalize tracking-widest text-base bg-gray-300 rounded-full p-3 border-2 border-black hover:cursor-pointer hover:bg-gray-200"
    >
      {children}
    </button>
  );
}
