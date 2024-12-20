//imports
import Details from "./features/details/Details";
import { useDetails } from "./features/details/useDetails";
import Education from "./features/education/Education";
import Experience from "./features/experience/Experience";
import Personal from "./features/personal_information/Personal";
import Professional from "./features/professional_experience/Professional";

function App() {
  //hook for all other features
  const { isDetailsOn } = useDetails();

  return (
    <div className="relative h-dvh w-dvw font-roboto font-semibold text-sm text-center tracking-tight overflow-hidden appBgSm md:appBgMd ">
      {isDetailsOn && <Details />}
      <Professional />
      <Experience />
      <Education />
      <Personal />
    </div>
  );
}

export default App;
