//Disclaimer: I used Chat GPT to build this component

//imports
import { useEffect, useState } from "react";
import { motion } from "motion/react";

//types
type star = {
  id: number;
  sz: number; //size
  dur: number; //duration
  del: number; //delay
  x: number;
  y: number;
  vx: number;
  vy: number;
};

interface ScreenPositions {
  sw: number;
  sh: number;
}

interface generateStarsArgs extends ScreenPositions {
  sc: number;
}

interface moveStarsArgs extends ScreenPositions {
  strs: star[];
}

//helper functions
//function to generate stars with a given count, and screen width and size
const generateStars = ({
  sc, //star count
  sw, //screen width
  sh, //screen height
}: generateStarsArgs) =>
  Array.from(
    { length: sc },
    (_, id): star => ({
      id,
      x: Math.random() * sw,
      y: Math.random() * sh,
      sz: Math.random() * 4 + 1,
      dur: Math.random() * 2 + 1,
      del: Math.random() * 5,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
    })
  );

//function to move the stars (update x and y, and return the new stars)
const moveStars = ({ strs, sh, sw }: moveStarsArgs) =>
  strs.map((star) => {
    const nx = star.x + star.vx;
    const ny = star.y + star.vy;

    //check if the star is still inside the screen
    if (nx < 0 || nx > sw || ny < 0 || ny > sh)
      return { ...star, x: Math.random() * sw, y: Math.random() * sh };

    return { ...star, x: nx, y: ny };
  });

//component
export default function StarField() {
  //stars
  const [stars, setStars] = useState<star[]>(
    generateStars({ sc: 150, sw: window.innerWidth, sh: window.innerHeight })
  );

  //to move stars
  //using rAF to get more smooth and optimized animations
  useEffect(() => {
    let animationFrameId: number;

    //callback funciton that will be used in the rAF
    const animate = () => {
      setStars((prevStars) =>
        moveStars({
          strs: prevStars,
          sh: window.innerHeight,
          sw: window.innerWidth,
        })
      );
      animationFrameId = requestAnimationFrame(animate); //animation loop, recursion
    };
    animationFrameId = requestAnimationFrame(animate); //init animation

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="absolute z-0 h-screen w-screen overflow-hidden bg-stone-800/25">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          aria-hidden="true"
          className="absolute rounded-full bg-slate-50"
          style={{
            width: `${star.sz}px`,
            height: `${star.sz}px`,
            top: `${star.y}px`,
            left: `${star.x}px`,
          }}
          animate={{
            opacity: [0, 1, 0.3],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.dur,
            repeat: Infinity,
            delay: star.del,
          }}
        />
      ))}
    </div>
  );
}
