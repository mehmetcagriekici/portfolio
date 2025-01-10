//imports
import Error from "../../components/Error";
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import HideBtn from "../../components/HideBtn";
import Loader from "../../components/Loader";
import PersonalText from "../../components/PersonalText";
import Socials from "../../components/Socials";
import StarRating from "../../components/StarRating";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { useDetails } from "../details/useDetails";
import { usePersonalData } from "./usePersonalData";
import { motion } from "motion/react";

function Personal() {
  //personal data
  const { data, error, isLoading } = usePersonalData();
  //ui state
  const { openExp, closeDetails, closeImg } = useDetails();

  //hide personal
  //show experiences
  function onClick() {
    openExp();
    closeDetails();
    closeImg();
  }

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error.message} />;

  if (data) {
    //data destructuring
    const {
      personalData: {
        name,
        age,
        country,
        skills,
        spoken_languages: spokenLanguages,
        avatar,
        socials,
      },
    } = data;

    //cards
    return (
      <FeaturePreviewDisk>
        {/*visit experiences button*/}
        <HideBtn onClick={onClick}>Show Projects</HideBtn>
        {/*Image:avatar, name, age ,country*/}
        <motion.section
          className="w-full min-h-[30%] overflow-hidden flex items-center justify-center bg-yellow-500/90 gap-2 p-3 rounded-lg md:rounded-full lg:rounded-xl md:w-4/5 lg:w-4/6 xl:w-1/2"
          initial={{ x: -10000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div className="h-4/5">
            <img
              src={avatar}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="font-orb flex flex-col gap-2 text-base tracking-wide md:text-2xl lg:text-3xl lg:gap-4 ">
            <span>{name}</span>
            <span>{age}</span>
            <span>{country}</span>
          </div>
        </motion.section>
        {/*socials*/}
        <motion.section
          className="w-full min-h-[30%] overflow-hidden flex flex-col items-center justify-center bg-yellow-500/90 gap-2 rounded-lg font-orb text-base  md:w-4/5 md:min-h-[25%] md:rounded-full lg:rounded-xl lg:w-4/6 xl:w-1/2"
          initial={{ x: 10000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Socials socials={socials} />
        </motion.section>
        {/*skills, spoken languages*/}
        <motion.section
          className="w-full min-h-[55%] overflow-hidden flex flex-col items-center justify-center bg-yellow-500/90 gap-2 rounded-lg font-orb text-base md:rounded-full lg:rounded-xl md:w-4/5 md:min-h-[45%] lg:w-4/6 lg:min-h-[30%] xl:w-1/2 xl:min-h-[50%]"
          initial={{ y: 10000 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex flex-col gap-1">
            {skills.map((skill, i) => (
              <StarRating skill={skill} key={i} />
            ))}
          </div>
          <PersonalText>
            I speak {CONVERT_LIST_TO_STR(spokenLanguages)}
          </PersonalText>
        </motion.section>
      </FeaturePreviewDisk>
    );
  }

  return "";
}

export default Personal;
