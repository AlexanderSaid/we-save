export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const customAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const footerAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const titleAnimAbove = {
  hidden: {
    y: -200,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const photoAnimate = {
  hidden: {
    scale: 1.5,
    opacity: 0,
    x: -300,
  },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const inputAnim = {
  hidden: { width: "0%", opacity: 0 },
  show: {
    opacity: 1,
    width: "100%",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const scrollRevealToBig = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollRight = {
  hidden: {
    opacity: 0,
    x: -600,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const scrollLeft = {
  hidden: {
    opacity: 0,
    x: 1600,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const basketMotion = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

export const SliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.25, ease: "easeOut" } },
};
