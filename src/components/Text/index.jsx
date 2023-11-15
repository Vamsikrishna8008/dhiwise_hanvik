import React from "react";

const sizeClasses = {
  txtInterRegular18Gray50: "font-inter font-normal",
  txtSpaceGroteskMedium20Yellow800: "font-medium font-spacegrotesk",
  txtInterRegular20: "font-inter font-normal",
  txtAksharMedium64Gray300: "font-akshar font-medium",
  txtInterMedium24: "font-inter font-medium",
  txtAksharMedium110: "font-akshar font-medium",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterRegular16Gray90087: "font-inter font-normal",
  txtAksharMedium24: "font-akshar font-medium",
  txtAksharMedium5574: "font-akshar font-medium",
  txtSpaceGroteskMedium40: "font-medium font-spacegrotesk",
  txtInterRegular9: "font-inter font-normal",
  txtInterRegular18Yellow800: "font-inter font-normal",
  txtAksharMedium64: "font-akshar font-medium",
  txtInterMedium20Black900: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterRegular20Black900: "font-inter font-normal",
  txtIBMPlexSans14: "font-ibmplexsans font-normal",
  txtSpaceGroteskMedium64Black900: "font-medium font-spacegrotesk",
  txtAksharMedium3963: "font-akshar font-medium",
  txtSpaceGroteskMedium72: "font-medium font-spacegrotesk",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular18Gray90099: "font-inter font-normal",
  txtSpaceGroteskMedium64Gray300: "font-medium font-spacegrotesk",
  txtInterRegular16: "font-inter font-normal",
  txtSpaceGroteskMedium40Yellow800: "font-medium font-spacegrotesk",
  txtInterRegular18: "font-inter font-normal",
  txtInterRegular18Gray300: "font-inter font-normal",
  txtAksharMedium1706: "font-akshar font-medium",
  txtAksharMedium64Gray50: "font-akshar font-medium",
  txtInterRegular16Yellow800: "font-inter font-normal",
  txtInterRegular16Black900b2: "font-inter font-normal",
  txtSpaceGroteskMedium40Gray50: "font-medium font-spacegrotesk",
  txtInterMedium16Black900: "font-inter font-medium",
  txtSpaceGroteskMedium20: "font-medium font-spacegrotesk",
  txtSpaceGroteskMedium64: "font-medium font-spacegrotesk",
  txtInterSemiBold16Gray50: "font-inter font-semibold",
  txtInterRegular16Gray50: "font-inter font-normal",
  txtSpaceGroteskMedium24: "font-medium font-spacegrotesk",
  txtInterRegular48: "font-inter font-normal",
  txtSpaceGroteskMedium72Gray50: "font-medium font-spacegrotesk",
  txtSpaceGroteskMedium24Gray50: "font-medium font-spacegrotesk",
  txtInterRegular32: "font-inter font-normal",
  txtInterRegular16Yellow80087: "font-inter font-normal",
  txtInterMedium32: "font-inter font-medium",
  txtInterMedium16Yellow800: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtAksharMedium16: "font-akshar font-medium",
  txtSpaceGroteskMedium72Gray300: "font-medium font-spacegrotesk",
  txtSpaceGroteskMedium64Gray50: "font-medium font-spacegrotesk",
  txtSpaceGroteskMedium56: "font-medium font-spacegrotesk",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
