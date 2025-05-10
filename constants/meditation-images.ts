import treeImage from "@/assets/meditation-images/trees.webp";
import meditatingUnderTree from "@/assets/meditation-images/meditate-under-tree.webp";
import riverImage from "@/assets/meditation-images/river.webp";
import beachImage from "@/assets/meditation-images/beach.webp";
import yosemiteStars from "@/assets/meditation-images/yosemite-stars.webp";
import waterfall from "@/assets/meditation-images/waterfall.webp";

export type ImageFileNameMeditation =
  | "trees.webp"
  | "meditate-under-tree.webp"
  | "river.webp"
  | "beach.webp"
  | "yosemite-stars.webp"
  | "waterfall.webp";

export const IMAGE_FILES_MEDITATION: Record<ImageFileNameMeditation, any> = {
  "trees.webp": treeImage,
  "meditate-under-tree.webp": meditatingUnderTree,
  "river.webp": riverImage,
  "beach.webp": beachImage,
  "yosemite-stars.webp": yosemiteStars,
  "waterfall.webp": waterfall,
};
