//extracted component from Personal Details
//imports
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CodeIcon from "@mui/icons-material/Code";
import { Alert } from "@mui/material";
import { CheckCircle, Error } from "@mui/icons-material";

//types
type socialProps = {
  socials: { key: string; value: string }[];
};

type socialIcons = {
  [key: string]: {
    icon: React.ReactElement<unknown>;
    label: string;
  };
};

//social icons
const socialIcons: socialIcons = {
  linkedin: {
    icon: <LinkedInIcon className="text-cyan-500" fontSize="inherit" />,
    label: "linkedin",
  },
  gmail: {
    icon: <ContactMailIcon className="text-green-500" fontSize="inherit" />,
    label: "gmail",
  },
  github: {
    icon: <GitHubIcon className="text-gray-200" fontSize="inherit" />,
    label: "github",
  },
  codewars: {
    icon: <CodeIcon className="text-rose-500" fontSize="inherit" />,
    label: "codewars",
  },
};

export default function Socials({ socials }: socialProps) {
  //copy the gmail text to clipboard on click
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  //function to copy to clipBoard
  function copyToClipboard(gmail: string) {
    navigator.clipboard
      .writeText(gmail)
      .then(() => {
        setStatus("copied!");
        setSuccess(true);
        //clear
        setTimeout(() => {
          setStatus("");
          setSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        setStatus("failed to copy!");
        setSuccess(false);
        console.error(err);
      });
  }

  return (
    <ul className="font-orb tracking-wider text-base flex flex-col gap-5 md:gap-8 md:tracking-widest md:text-2xl xl:text-xl">
      {socials.map((social, i) => (
        <li key={i} className="flex justify-center items-center">
          {social.key === "gmail" ? (
            <div className="relative flex gap-2 justify-center items-center w-full">
              {socialIcons[social.key].icon}
              {status &&
                (success ? (
                  <Alert
                    severity="info"
                    className="absolute top-0 left-0 right-0 max-h-10 flex justify-center items-center"
                    icon={<CheckCircle />}
                  >
                    {status}
                  </Alert>
                ) : (
                  <Alert
                    severity="warning"
                    className="absolute top-0 left-0 right-0 max-h-10 flex justify-center items-center"
                    icon={<Error />}
                  >
                    {status}
                  </Alert>
                ))}
              <span className="" onClick={() => copyToClipboard(social.value)}>
                {social.value}
              </span>
            </div>
          ) : (
            <a
              target="blank"
              href={social.value}
              className="flex gap-1 justify-center items-center w-full"
            >
              {socialIcons[social.key].icon}
              <span>{social.key}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
