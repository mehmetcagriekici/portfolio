//imports
import FeaturePreviewCard from "../../components/FeaturePreviewCard";
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import { usePersonal } from "./usePersonal";

function Personal() {
  //UI personal
  const {
    showPersonalDetails,
    isLoading,
    error,
    personalData: {
      card: { name, age, country },
    },
  } = usePersonal();

  //click on the card
  function onClick() {
    showPersonalDetails();
  }

  //styles for the disk
  const styles = {
    outerContainer:
      "top-0 h-1/5 w-full personalCardEnter md:animate-personalCardEnterMd z-10 lg:top-[5%] lg:border-4 lg:border-stone-800 lg:w-[98%] lg:left-1/2 lg:-translate-x-1/2 lg:animate-lgDiskEnter xl:top-1/2 xl:left-0 xl:-translate-y-1/2 xl:translate-x-0 xl:h-3/5 xl:w-[40%] xl:border-slate-300/20",
    innerContainer: "p-1 xl:h-1/2 xl:w-full xl:top-1/2 xl:-translate-y-1/2",
  };

  //styles for the card
  const cardStyles =
    "absolute h-full text-stone-300 flex flex-wrap gap-2 shrink grow justify-safe-center items-safe-center overflow-auto md:gap-3";

  //card message
  const cardMessage =
    `My name is ${name}, I am ${age} years old, and I am from ${country}. As an autodidact, I've become a frontend developer through personal projects. I am looking forward to gain some professional experience. Click here to learn more about me.`.split(
      " "
    );

  return (
    <FeaturePreviewDisk styles={styles}>
      <FeaturePreviewCard
        onClick={onClick}
        isLoading={isLoading}
        error={error}
        styles={cardStyles}
        cardIndex={0}
      >
        {cardMessage.map((word, i) => (
          <span key={i} className="flex">
            {word.split("").map((chr, ix) => (
              <span
                className="animate-textEnter text-base md:text-2xl lg:text-3xl xl:text-xl"
                style={{ animationDelay: `${ix * i + 120 * ix}ms` }}
                key={`${i}_${ix}`}
              >
                {chr}
              </span>
            ))}
          </span>
        ))}
      </FeaturePreviewCard>
    </FeaturePreviewDisk>
  );
}

export default Personal;
