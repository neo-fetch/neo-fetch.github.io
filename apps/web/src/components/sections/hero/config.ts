import type { Hero } from "@/types/hero";
import { metadata as meta } from "@/app/config";

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    "A full stack Software Developer at Airbus SE, specializing in monitoring the health of various Airbus aircrafts.",
};

export { hero };
