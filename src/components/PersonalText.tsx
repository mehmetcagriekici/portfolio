export default function PersonalText({ children }: { children: string[] }) {
  return (
    <p className="tracking-wide text-base leading-relaxed font-orb md:text-2xl md:tracking-wider xl:text-xl">
      {children}
    </p>
  );
}
