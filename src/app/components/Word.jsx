"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import { useScroll, motion, progress, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    // can change the offset to change the starting and ending point of the animation(change end -> 0.9 so it starts at 90% of the page) (change start -> 0.25 so it ends at 25% of the page)
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p className={styles.paragraph} ref={element}>
      {words.map((word, i) => {
        // dividing the progress of the animation amoung the word length of the whole paragraph so that word by word can be animated
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
