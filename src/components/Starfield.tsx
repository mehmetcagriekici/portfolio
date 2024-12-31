//DISCLAIMER: I used !!! CHAT GPT !!! to build and optimize this component
//imports
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
//main background animation
//stand alone component

//a star is defined by an id, random x and y positions, size, duration, and delay (appearance time)
type star = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  velocityX: number;
  velocityY: number;
};

//screen sizes
const MD = 768;
const LG = 1024;

//helper function to move stars
//move stars and if they go out of bonds, re-spawn them randomly
const moveStars = ({
  stars,
  width,
  height,
}: {
  stars: star[];
  width: number;
  height: number;
}): star[] => {
  return stars.map((star) => {
    //reposition
    const newX = star.x + star.velocityX;
    const newY = star.y + star.velocityY;

    //check if star leaves the screen
    if (newX < 0 || newX > width || newY < 0 || newY > height) {
      return { ...star, x: Math.random() * width, y: Math.random() * height };
    }

    //new coords
    return { ...star, x: newX, y: newY };
  });
};

//helper function to generate stars
function generateStars({
  width,
  height,
}: {
  width: number;
  height: number;
}): star[] {
  //responsive star count
  const starCount = width < MD ? 100 : height < LG ? 200 : 300;
  //responsive starSize
  const sizeMultiplier = width < MD ? 2 : width < LG ? 3 : 4;

  //randomly generated stars
  const store = [];

  for (let i = 0; i < starCount; i++) {
    const newStar: star = {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * sizeMultiplier + 1,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      //coord change rates
      velocityX: Math.random() * 0.5 - 0.25, // Random horizontal speed
      velocityY: Math.random() * 0.5 - 0.25, // Random vertical speed
    };

    store.push(newStar);
  }

  return store;
}

function Starfield() {
  //responsive stars
  const [stars, setStars] = useState<star[]>([]);
  //screen sizes
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //function to update dimensions on screen change and update the stars
  const updateDimensions = useCallback(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    setStars(
      generateStars({ width: window.innerWidth, height: window.innerHeight })
    );
  }, []);

  //update stars, whenever the window size changes
  useEffect(() => {
    //init
    updateDimensions();

    //watch
    window.addEventListener("resize", updateDimensions);

    //clear
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  //move stars
  useEffect(() => {
    //funcion to move stars
    const updateStars = () => {
      setStars((prevStars) =>
        moveStars({
          stars: prevStars,
          width: dimensions.width,
          height: dimensions.height,
        })
      );
    };

    //assign interval
    const interval = setInterval(updateStars, 20);

    return () => clearInterval(interval);
  }, [dimensions]);

  //first div -> outer container, lowest z index
  return (
    <div className="absolute z-0 h-dvh w-dvw">
      {/* Stars container */}
      <div className="relative h-full w-full overflow-hidden bg-stone-800/25">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-slate-50"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              boxShadow: "0 0 3px 2px rgba(255, 255, 255, 0.3)", //glow
            }}
            animate={{
              opacity: [0, 1, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatType: "loop",
              delay: star.delay,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}

export default Starfield;
