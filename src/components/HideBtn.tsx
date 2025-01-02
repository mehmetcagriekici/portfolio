import { HideBtnProps } from "../utils/types";

export default function HideBtn({ onClick, children }: HideBtnProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1 right-1 h-8 w-32 border-2 border-indigo-500/50 rounded-lg shadow bg-indigo-300/30 uppercase tracking-widest text-xs font-bold text-indigo-200 hover:bg-indigo-300 hover:text-black hover:border-rose-500 lg:text-xl lg:h-24 lg:w-64 xl:h-16 xl:w-56"
    >
      {children}
    </button>
  );
}
