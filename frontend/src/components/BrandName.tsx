import React from "react";

type BrandNameProps = {
  style?: React.CSSProperties;
  className?: string;
};

/** Nombre comercial: no debe traducirse en Chrome/Edge. */
export const BrandName = ({ style, className }: BrandNameProps) => (
  <span
    className={className ? `notranslate ${className}` : "notranslate"}
    translate="no"
    style={style}
  >
    LevelUp Interiores
  </span>
);
