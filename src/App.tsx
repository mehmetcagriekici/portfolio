//imports
import Starfield from "./components/Starfield";
import Details from "./features/details/Details";
import { useDetails } from "./features/details/useDetails";
import Experience from "./features/experience/Experience";
import Personal from "./features/personal_information/Personal";

function App() {
  //hook for all other features
  const { isDetailsOn } = useDetails();

  return (
    <div className="relative h-dvh w-dvw font-serif font-semibold text-sm text-center tracking-tight overflow-hidden appBgSm md:appBgMd ">
      {isDetailsOn && <Details />}
      {/*Starfield animation*/}
      {isDetailsOn || <Starfield />}
      <Personal />
      <Experience />
    </div>
  );
}

export default App;
