//imports
import Starfield from "./components/Starfield";
import Experience from "./features/experience/Experience";
import Personal from "./features/personal_information/Personal";
import { useAppSelector } from "./hooks/reduxHooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  //toggle
  const { isExpOn } = useAppSelector((state) => state.details);

  //tanstack
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative h-dvh w-dvw font-pop font-semibold text-sm text-center tracking-tight overflow-hidden bg-black ">
        {/*Starfield animation*/}
        <Starfield />
        {/*Display individually*/}
        {isExpOn ? <Experience /> : <Personal />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
