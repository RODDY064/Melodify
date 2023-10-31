const nav_animate = {
  closed: {
    y: -1000,
    transition: {
      when: "afterChildren",
    },
  },
  open: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const links_animate = {
  close: {
    y: 2,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export { nav_animate, links_animate };
