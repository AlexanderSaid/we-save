import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (viewer) => {
  const [element, view] = useInView({ threshold: viewer });
  const controls = useAnimation();
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls, view];
};
