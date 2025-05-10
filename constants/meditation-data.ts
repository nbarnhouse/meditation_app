import { AudioFileName } from "./meditation-audio";
import { ImageFileNameMeditation } from "./meditation-images";

export interface MeditationType {
  id: number;
  title: string;
  image: ImageFileNameMeditation;
  audio: AudioFileName;
}

export const MEDITATION_DATA: MeditationType[] = [
  {
    id: 1,
    title: "Mountains",
    image: "trees.webp",
    audio: "trees.mp3",
  },
  {
    id: 2,
    title: "Rivers",
    image: "river.webp",
    audio: "river.mp3",
  },
  {
    id: 3,
    title: "Sunset",
    image: "meditate-under-tree.webp",
    audio: "meditate-under-tree.mp3",
  },
  {
    id: 4,
    title: "Beaches",
    image: "beach.webp",
    audio: "beach.mp3",
  },
  {
    id: 5,
    title: "Starry Night",
    image: "yosemite-stars.webp",
    audio: "yosemite-stars.mp3",
  },
  {
    id: 6,
    title: "Waterfall",
    image: "waterfall.webp",
    audio: "waterfall.mp3",
  },
];
