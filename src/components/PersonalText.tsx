export default function PersonalText({ children }: { children: string[] }) {
  return (
    <p className="text-stone-100 tracking-wider leading-relaxed border-b-2 border-indigo-600 w-4/5 p-2 font-black">
      {children}
    </p>
  );
}
