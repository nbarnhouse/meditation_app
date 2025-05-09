import tree from "@/assets/audio/trees.mp3";
import river from "@/assets/audio/river.mp3";
import meditateUnderTree from "@/assets/audio/meditate-under-tree.mp3";
import beach from "@/assets/audio/beach.mp3";
import yosemite from "@/assets/audio/yosemite-stars.mp3";
import waterfall from "@/assets/audio/waterfall.mp3";

export type AudioFileName =
  | "trees.mp3"
  | "river.mp3"
  | "meditate-under-tree.mp3"
  | "beach.mp3"
  | "yosemite-stars.mp3"
  | "waterfall.mp3";

export const AUDIO_FILES: Record<AudioFileName, any> = {
  "trees.mp3": tree,
  "river.mp3": river,
  "meditate-under-tree.mp3": meditateUnderTree,
  "beach.mp3": beach,
  "yosemite-stars.mp3": yosemite,
  "waterfall.mp3": waterfall,
};
