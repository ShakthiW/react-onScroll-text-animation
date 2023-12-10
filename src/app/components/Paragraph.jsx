"use client"

import React, { useRef } from "react";
import styles from "../page.module.css";
import { useScroll, motion } from "framer-motion";

const Paragraph = ({ value }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    // can change the offset to change the starting and ending point of the animation(change end -> 0.9 so it starts at 90% of the page) (change start -> 0.25 so it ends at 25% of the page)
    offset: ['start 0.9', 'start 0.25'],
  });

  return (
    <motion.p 
      className={styles.paragraph} 
      ref={element}
      style={{opacity: scrollYProgress}}
    >
      {value}
    </motion.p>
  );
};

export default Paragraph;
