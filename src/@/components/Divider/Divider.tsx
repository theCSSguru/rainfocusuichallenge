import React from 'react';

export const Divider = ({
  thickness = 1,
  marginTop = 40,
  marginBottom = 30,
  bgColor = 'clr-divider-bg',
}: DividerProps) => {
  return (
    <div
      className={bgColor}
      style={{
        height: `${thickness}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    ></div>
  );
};

type DividerProps = {
  thickness?: number;
  marginTop?: number;
  marginBottom?: number;
  bgColor?: string;
};
