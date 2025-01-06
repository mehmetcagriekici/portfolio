export default function PersonalText({ children }: { children: string[] }) {
  return (
    <p className="tracking-wide text-base leading-relaxed font-pop">
      {children}
    </p>
  );
}
