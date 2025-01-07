//imports
import Starfield from "./components/Starfield";
import Experience from "./features/experience/Experience";
import Personal from "./features/personal_information/Personal";
import { useAppSelector } from "./hooks/reduxHooks";

{
  /*
  design the app for xl 
   */
}

function App() {
  //toggle
  const { isExpOn } = useAppSelector((state) => state.details);

  return (
    <div className="relative h-dvh w-dvw font-pop font-semibold text-sm text-center tracking-tight overflow-hidden bg-black ">
      {/*Starfield animation*/}
      <Starfield />
      {/*Display individually*/}
      {isExpOn ? <Experience /> : <Personal />}
    </div>
  );
}

export default App;
