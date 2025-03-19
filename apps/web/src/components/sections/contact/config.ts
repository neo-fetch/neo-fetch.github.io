import type { Contact } from "@/types/contact";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitch,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "mayankchandrashekhar.deshpande@outlook.com",
  socials: [
    {
      name: "Github",
      href: "https://github.com/neo-fetch",
      Icon: SiGithub,
    },
    {
      name: "Twitch",
      href: "https://twitch.tv/neonfetch",
      Icon: SiTwitch,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/neo-fetch",
      Icon: SiInstagram,
    },
    {
      name: "Linkedin",
      href: "https://in.linkedin.com/in/mayankdeshpande",
      Icon: SiLinkedin,
    },
  ],
};

export { contact };
