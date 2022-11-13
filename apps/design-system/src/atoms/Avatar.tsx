import Image from "next/image";
import React from "react";

import styles from "./Avatar.module.scss";

export interface AvatarProps {
  size: "small" | "medium" | "large";
  src: string;
  alt?: string;
}

const sizes = {
  small: 40,
  medium: 48,
  large: 62,
};

export const Avatar = ({ src, size = "medium", alt = "" }: AvatarProps) => {
  const pxSize = sizes[size];

  return (
    <span className={styles.avatar} style={{ height: `${pxSize}px`, width: `${pxSize}px` }}>
      <Image src={src} width={pxSize} height={pxSize} objectFit="cover" alt={alt} />
    </span>
  );
};
