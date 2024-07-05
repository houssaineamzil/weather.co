"use client";
import React, { forwardRef, useRef, useState } from "react";
import styles from "./Button.module.scss";

export const Button = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (event) => {
    if (!ref.current || isFocused) return;

    const div = ref.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <button
      className={styles.button}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {/* <div className={styles.indicatorWrapper}> */}
      <div
        ref={ref}
        className={styles.indicator}
        style={{
          border: "1px solid rgba(8 32 82 / 100%)",
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
      />
      {/* </div> */}
    </button>
  );
};
